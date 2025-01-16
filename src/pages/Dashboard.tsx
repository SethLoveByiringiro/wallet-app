// src/pages/Dashboard.tsx
import ExpenseChart from "../components/dashboard/ExpenseChart";
import BudgetOverview from "../components/dashboard/BudgetOverview";
import RecentTransactions from "../components/dashboard/RecentTransactions";

function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 px-4 py-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-gray-800">
          <h3 className="text-lg font-medium text-gray-900">Total Balance</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">RWF 5,000,000</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
          <h3 className="text-lg font-medium text-green-600">Monthly Income</h3>
          <p className="mt-2 text-3xl font-bold text-green-600">
            RWF 3,000,000
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
          <h3 className="text-lg font-medium text-red-600">Monthly Expenses</h3>
          <p className="mt-2 text-3xl font-bold text-red-600">RWF 1,500,000</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ExpenseChart />
        <BudgetOverview />
      </div>

      {/* Recent Transactions */}
      <RecentTransactions />
    </div>
  );
}

export default Dashboard;
