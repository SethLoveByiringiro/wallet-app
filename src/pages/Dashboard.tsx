// src/pages/Dashboard.tsx
import AccountSummary from "../components/dashboard/AccountSummary";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import BudgetOverview from "../components/dashboard/BudgetOverview";
import ExpenseChart from "../components/dashboard/ExpenseChart";

function Dashboard() {
  return (
    <div className="space-y-6">
      <AccountSummary />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ExpenseChart />
        <BudgetOverview />
      </div>

      <div className="mt-6">
        <RecentTransactions />
      </div>
    </div>
  );
}

export default Dashboard;
