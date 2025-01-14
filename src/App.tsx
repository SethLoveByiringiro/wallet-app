// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../src/components/layout/Layout";
import Dashboard from "../src/pages/Dashboard";
import Transactions from "../src/pages/Transactions";
import Budgets from "../src/pages/Budgets";
import Accounts from "../src/pages/Accounts";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/accounts" element={<Accounts />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
