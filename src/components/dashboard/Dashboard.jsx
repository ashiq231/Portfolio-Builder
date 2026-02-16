import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../services/supabase';
import './Dashboard.css';

const Dashboard = () => {
    const { user, profile, signOut, refreshProfile } = useAuth();
    const [portfolio, setPortfolio] = useState(null);
    const [loading, setLoading] = useState(true);

    // Debug: Log profile to check role
    useEffect(() => {
        console.log('Profile data:', profile);
        console.log('Profile role:', profile?.role);
    }, [profile]);

    const fetchPortfolio = useCallback(async () => {
        try {
            const { data, error } = await supabase
                .from('portfolios')
                .select(', professions(), themes(*)')
                .eq('user_id', user.id)
                .single();

            if (error && error.code !== 'PGRST116') {
                console.error('Error fetching portfolio:', error);
            } else {
                setPortfolio(data);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    }, [user]);

    useEffect(() => {
        refreshProfile();
        fetchPortfolio();
    }, [fetchPortfolio, refreshProfile]);

    const handleUnpublish = async () => {
        if (!window.confirm('Are you sure you want to unpublish your portfolio?')) {
            return;
        }

        try {
            const { error } = await supabase
                .from('portfolios')
                .update({ is_published: false })
                .eq('id', portfolio.id);

            if (error) throw error;

            // Refund credit
            await supabase
                .from('user_profiles')
                .update({ credits: profile.credits + 1 })
                .eq('id', user.id);

            refreshProfile();
            fetchPortfolio();
            alert('Portfolio unpublished successfully! Credit refunded.');
        } catch (error) {
            console.error('Error unpublishing:', error);
            alert('Failed to unpublish portfolio');
        }
    };

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <div className="spinner"></div>
            </div>
        );
    }

