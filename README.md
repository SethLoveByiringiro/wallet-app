<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
=======
# Personal Wallet Web Application

A comprehensive web application for tracking personal finances across multiple accounts, managing budgets, and visualizing spending patterns.

## Features & Functionality

### 1. Transaction Tracking
- Record income and expenses across multiple accounts (bank, mobile money, cash)
- Categorize transactions with custom categories and subcategories
- View transaction history with filtering and sorting options
- Real-time balance updates across all accounts

### 2. Budget Management
- Set monthly/yearly budgets for different spending categories
- Real-time budget tracking and notifications
- Visual progress bars for budget utilization
- Alerts when spending exceeds budget limits

### 3. Category Management
- Create custom categories and subcategories for expenses
- Link transactions to specific categories
- Track spending patterns by category
- Hierarchical category organization

### 4. Reporting & Analytics
- Generate detailed financial reports for any time period
- Visualization of spending patterns
- Category-wise expense breakdown
- Income vs. expense analysis
- Custom date range selection for reports

### 5. Data Visualization
- Interactive charts and graphs
- Monthly spending trends
- Category-wise distribution
- Budget vs. actual spending comparisons
- Account balance trends

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- MongoDB (v4.4 or higher)
- Modern web browser

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/SethLoveByiringiro/wallet-web-app.git
cd wallet-web-app
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables:
```bash
# In backend directory
cp .env.example .env
# Edit .env with your MongoDB connection string and JWT secret
```

4. Start the development servers:
```bash
# Start backend server
cd backend
npm run dev

# Start frontend development server
cd frontend
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

## Deployment

The application is deployed and accessible at: [Insert your deployment link here]

### Deployment Steps
1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy to your chosen platform (e.g., Render, Netlify, or Fly.io)
3. Set up environment variables on your hosting platform
4. Configure your MongoDB connection string
5. Deploy the backend API

## Tech Stack

- Frontend: React, TypeScript, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT
- Charts: Recharts
- Deployment: 

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
>>>>>>> e01d55afdd857bf1e14d88da5a455ae6be52bb26
