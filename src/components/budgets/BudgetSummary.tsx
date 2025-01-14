// src/components/budgets/BudgetSummary.tsx
export function BudgetSummary() {
  const summary = {
    totalBudget: 2500,
    totalSpent: 1800,
    remainingBudget: 700,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-sm font-medium text-gray-500">Total Budget</h3>
        <p className="mt-2 text-3xl font-bold text-gray-900">
          ${summary.totalBudget.toLocaleString()}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-sm font-medium text-gray-500">Total Spent</h3>
        <p className="mt-2 text-3xl font-bold text-red-600">
          ${summary.totalSpent.toLocaleString()}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-sm font-medium text-gray-500">Remaining Budget</h3>
        <p className="mt-2 text-3xl font-bold text-green-600">
          ${summary.remainingBudget.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
