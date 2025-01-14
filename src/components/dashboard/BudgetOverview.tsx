// src/components/dashboard/BudgetOverview.

function BudgetOverview() {
  const budgets = [
    {
      id: "1",
      category: "Food & Dining",
      spent: 400,
      total: 600,
    },
    {
      id: "2",
      category: "Transportation",
      spent: 200,
      total: 300,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900">Budget Overview</h2>
      <div className="mt-6 space-y-4">
        {budgets.map((budget) => (
          <div key={budget.id} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">{budget.category}</span>
              <span className="font-medium">
                ${budget.spent} / ${budget.total}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 rounded-full h-2"
                style={{ width: `${(budget.spent / budget.total) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BudgetOverview;
