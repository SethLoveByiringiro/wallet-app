export default function AccountSummary() {
  const summaryData = {
    totalBalance: 5000,
    totalIncome: 3000,
    totalExpenses: 1500,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900">Total Balance</h3>
        <p className="mt-2 text-3xl font-bold text-gray-900">
          ${summaryData.totalBalance.toLocaleString()}
        </p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-green-600">Monthly Income</h3>
        <p className="mt-2 text-3xl font-bold text-green-600">
          ${summaryData.totalIncome.toLocaleString()}
        </p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-red-600">Monthly Expenses</h3>
        <p className="mt-2 text-3xl font-bold text-red-600">
          ${summaryData.totalExpenses.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
