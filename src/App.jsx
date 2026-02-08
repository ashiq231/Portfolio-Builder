import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AdminRoute from './components/auth/AdminRoute';

// Pages
import LandingPage from './pages/LandingPage';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ForgotPassword from './components/auth/ForgotPassword';
import Dashboard from './components/dashboard/Dashboard';
import PortfolioBuilder from './components/builder/PortfolioBuilder';
import PublicPortfolio from './components/portfolio/PublicPortfolio';
import BuyCredits from './components/credits/BuyCredits';
import AdminPanel from './components/admin/AdminPanel';
