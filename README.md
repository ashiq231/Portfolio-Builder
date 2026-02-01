# 🎨 Portfolio Builder Platform
### *Empowering Professionals to Showcase Their Best Work*

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Node.js](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![React](https://img.shields.io/badge/react-%5E18.2.0-blue)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/postgresql-%3E%3D13.0-blue)](https://www.postgresql.org/)

> **A profession-aware, theme-customizable SaaS platform for creating professional portfolio websites without coding knowledge.**

![Project Status](https://img.shields.io/badge/status-in%20development-yellow)
![Progress](https://img.shields.io/badge/progress-2%25-orange)

---

## 📊 Project Statistics

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/ashiq231/Portfolio-Builder)
![GitHub contributors](https://img.shields.io/github/contributors/ashiq231/Portfolio-Builder)
![GitHub last commit](https://img.shields.io/github/last-commit/ashiq231/Portfolio-Builder)
![GitHub repo size](https://img.shields.io/github/repo-size/ashiq231/Portfolio-Builder)

---

## 📋 Table of Contents

- [About](#about)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Roadmap](#development-roadmap)
- [Team](#team)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About

**Portfolio Builder Platform** is a specialized SaaS application designed to help professionals across various fields create and publish stunning portfolio websites through an intuitive, no-code interface.

### 💡 The Problem We're Solving

- **60% of professionals** lack an online portfolio due to technical barriers
- Existing platforms are either too complex or lack profession-specific customization
- Students and early-career professionals need affordable portfolio solutions
- Building a portfolio manually takes 20+ hours; we reduce this to **under 30 minutes**

### 🌟 What Makes Us Different

Unlike generic website builders, Portfolio Builder offers:

#### 1️⃣ **Profession-Specific Intelligence**
Not just templates – smart sections tailored to your career:
- **Developers:** GitHub integration, tech stack display, code showcases
- **Doctors:** Certifications, specializations, publications
- **Teachers:** Teaching philosophy, subjects, student testimonials
- **Designers:** Behance/Dribbble import, visual galleries
- **Freelancers:** Service packages, rates, booking calendar

#### 2️⃣ **Multi-Tier Theme System**
```
Basic Plan (Free):
├── Light Theme (professional white)
└── Dark Theme (modern dark)

Premium Plan ($5/month):
├── Ocean Blue (tech-focused)
├── Sunset Orange (creative warm)
├── Forest Green (nature-inspired)
├── Midnight Purple (elegant modern)
├── Corporate Gray (business professional)
└── Minimalist Cream (simple sophisticated)
```

#### 3️⃣ **Zero-Deployment Publishing**
- No manual hosting required
- Instant publishing to: `portfoliobuilder.com/p/your-name`
- Real-time updates when you edit
- Built-in analytics (views, visitors)

---

## ✨ Key Features

### 🔐 Authentication & Security
- [x] Email verification on signup
- [x] JWT-based secure authentication
- [x] Role-based access (Admin/User)
- [ ] Password reset functionality
- [ ] Two-factor authentication (planned)

### 🎨 Portfolio Creation
- [x] Profession selection system
- [ ] Theme selection (basic/premium tiers)
- [ ] Template browsing by profession
- [ ] Form-based content editor
- [ ] Image upload via Cloudinary
- [ ] Live preview before publishing
- [ ] One-click publishing

### 💎 Subscription System
- [ ] Freemium model (basic features free)
- [ ] Premium plan ($5/month)
- [ ] Stripe payment integration
- [ ] Theme access based on plan
- [ ] Portfolio analytics

### 🛠️ Admin Panel
- [ ] User management dashboard
- [ ] Template & theme management
- [ ] System analytics
- [ ] Content moderation

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

- **React.js** (v18.2+) - UI library
- **Tailwind CSS** - Utility-first styling
- **React Router** (v6) - Client-side routing
- **Axios** - HTTP requests
- **Formik + Yup** - Form handling & validation

### Backend
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

- **Node.js** (v16+) + **Express** - Backend framework
- **PostgreSQL** (v13+) - Relational database
- **Sequelize ORM** - Database management
- **JWT** - Secure authentication
- **Bcrypt** - Password hashing
- **Nodemailer** - Email service

### Cloud Services
- **Cloudinary** - Image hosting & optimization
- **Stripe** - Payment processing
- **SendGrid/Gmail SMTP** - Email delivery

### DevOps
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

- **Vercel** - Frontend hosting
- **Railway/Render** - Backend hosting
- **GitHub Actions** - CI/CD
- **Jest** - Testing

---

## 🚀 Getting Started

### Prerequisites
```bash
node >= 16.0.0
npm >= 8.0.0
postgresql >= 13.0
git
```

### Installation

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ashiq231/Portfolio-Builder.git
cd Portfolio-Builder
```

#### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create `.env` file:
```env
PORT=5000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=portfolio_builder
DB_USER=postgres
DB_PASSWORD=your_password

# JWT
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

# Email (Gmail SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Cloudinary (get from https://cloudinary.com)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe (optional, for later)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

Initialize database:
```bash
# Sync database schema
npm run db:sync

# Seed initial data
npm run db:seed
```

Start backend server:
```bash
npm run dev
# Server running at http://localhost:5000
```

#### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
```

Create `.env` file:
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_... (optional, for later)
```

Start frontend:
```bash
npm start
# App running at http://localhost:3000
```

#### 4️⃣ Verify Setup
```bash
# Backend health check
curl http://localhost:5000/api/health

# Expected response:
# {"status":"Server is running","timestamp":"2025-02-01T..."}

# Frontend should show landing page at http://localhost:3000
```

---

## 📁 Project Structure
```
Portfolio-Builder/
│
├── backend/                    # Node.js + Express backend
│   ├── src/
│   │   ├── config/            # Database, email, services config
│   │   ├── controllers/       # Request handlers
│   │   ├── models/            # Sequelize models
│   │   ├── routes/            # API endpoints
│   │   ├── middleware/        # Auth, validation, errors
│   │   ├── utils/             # Helper functions
│   │   └── server.js          # Entry point
│   ├── tests/                 # Backend tests
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── frontend/                   # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   ├── pages/             # Page components
│   │   ├── services/          # API calls
│   │   ├── context/           # React context
│   │   ├── hooks/             # Custom hooks
│   │   ├── utils/             # Utilities
│   │   └── App.js             # Root component
│   ├── tests/                 # Frontend tests
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── docs/                       # Documentation
│   ├── API.md                 # API documentation
│   ├── DEPLOYMENT.md          # Deployment guide
│   └── DATABASE_SCHEMA.md     # Database design
│
├── PROJECT_TRACKER.md         # Progress tracking
├── CONTRIBUTING.md            # Contribution guidelines
├── LICENSE
└── README.md                  # This file
```

---

## 🗺️ Development Roadmap

### ✅ Phase 1: Foundation (Weeks 1-2) - **IN PROGRESS**
- [x] Project initialization and setup
- [x] Database schema design
- [x] Basic Express server
- [x] React app scaffold
- [ ] User authentication (in progress)

### 📅 Phase 2: Core Features (Weeks 3-4) - **PLANNED**
- [ ] Profession selection system
- [ ] Theme management (8 themes)
- [ ] Template browsing
- [ ] Portfolio editor

### 📅 Phase 3: Publishing (Weeks 5-6) - **PLANNED**
- [ ] Portfolio rendering engine
- [ ] Public portfolio URLs
- [ ] Analytics tracking
- [ ] Image optimization

### 📅 Phase 4: Monetization (Week 7) - **PLANNED**
- [ ] Subscription tiers
- [ ] Stripe integration
- [ ] Theme access control
- [ ] Payment webhooks

### 📅 Phase 5: Launch (Week 8) - **PLANNED**
- [ ] Testing & bug fixes
- [ ] Documentation
- [ ] Production deployment
- [ ] Marketing materials

**View detailed progress:** [PROJECT_TRACKER.md](./PROJECT_TRACKER.md)

---

## 👥 Team

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/mehedyk">
        <img src="https://github.com/mehedyk.png" width="100px;" alt="S.M. Mehedy Kawser"/>
        <br />
        <sub><b>S.M. Mehedy Kawser</b></sub>
      </a>
      <br />
      <sub>Frontend Lead</sub>
      <br />
      <sub>React, UI/UX, Styling</sub>
    </td>
    <td align="center">
      <a href="https://github.com/ashiq231">
        <img src="https://github.com/ashiq231" width="100px;" alt="Ashiq"/>
        <br />
        <sub><b>Ashiq</b></sub>
      </a>
      <br />
      <sub>Backend Lead</sub>
      <br />
      <sub>API, Database, Auth</sub>
    </td>
    <td align="center">
      <a href="https://github.com/jubayer">
        <img src="https://github.com/jubayer.png" width="100px;" alt="Jubayer"/>
        <br />
        <sub><b>Jubayer</b></sub>
      </a>
      <br />
      <sub>Full-Stack Developer</sub>
      <br />
      <sub>Integration, DevOps, Testing</sub>
    </td>
  </tr>
</table>

**Academic Context:**
- **Institution:** Daffodil International University
- **Course Title:** Software Engineering Design Capstone Project
- **Course Code:** SE 331
- **Supervisor:** Md. Rashedul Alam
- **Semester:** Spring 2026
---

## 🤝 Contributing

We follow a structured Git workflow for this project:

### Branch Strategy
```
main (production)
  └── dev (integration branch)
      ├── feature/auth-system (Ashiq)
      ├── feature/portfolio-editor (Mehedy)
      └── feature/theme-system (Jubayer)
```

### Commit Convention
```
<type>: <description>

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Tests
- chore: Maintenance

Examples:
✅ feat: add user registration endpoint
✅ fix: resolve email verification token expiry
✅ docs: update API documentation
```

### Workflow
1. Create feature branch from `dev`
2. Make small, focused commits
3. Push and create Pull Request to `dev`
4. Get review from another team member
5. Merge after approval
6. Weekly: merge `dev` → `main`

**Detailed guidelines(will be added later):** [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 📝 Documentation

- [📖 API Documentation](./docs/API.md)
- [🚀 Deployment Guide](./docs/DEPLOYMENT.md)
- [🗄️ Database Schema](./docs/DATABASE_SCHEMA.md)
- [📋 Project Tracker](./PROJECT_TRACKER.md)
- [🤝 Contributing Guide](./CONTRIBUTING.md)

---

## 📄 License

All rights of this project is reserved. This project  will be licensed under the MIT License after we complete this project.- see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Anthropic Claude** - Development assistance
- **Our Supervisor** - Project guidance
- **Open Source Community** - Amazing tools and libraries
- **Stack Overflow** - Endless problem-solving help

---

## 📞 Contact & Support

- **Repository:** [GitHub](https://github.com/ashiq231/Portfolio-Builder)
- **Issues:** [Report a Bug](https://github.com/ashiq231/Portfolio-Builder/issues)
- **Discussions:** [Start a Discussion](https://github.com/ashiq231/Portfolio-Builder/discussions)

---

<div align="center">

### ⭐ Star us on GitHub — it helps!

**Made by Team Galacticos**

*Empowering professionals, one portfolio at a time.*

[Report Bug](https://github.com/ashiq231/Portfolio-Builder/issues) · [Request Feature](https://github.com/ashiq231/Portfolio-Builder/issues) · [View Demo](#)

</div>