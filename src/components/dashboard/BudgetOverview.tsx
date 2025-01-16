// src/components/dashboard/BudgetOverview.tsx
function BudgetOverview() {
  const budgets = [
    {
      category: "Food & Dining",
      spent: 400000,
      total: 600000,
      color: "#2563EB",
    },
    {
      category: "Transportation",
      spent: 200000,
      total: 300000,
      color: "#10B981",
    },
    // Add more categories as needed
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Budget Overview
      </h2>
      <div className="space-y-6">
        {budgets.map((budget) => {
          const percentage = (budget.spent / budget.total) * 100;
          return (
            <div key={budget.category} className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {budget.category}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {(budget.spent / 1000).toLocaleString()}K /{" "}
                    {(budget.total / 1000).toLocaleString()}K RWF
                  </p>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {percentage.toFixed(1)}%
                </span>
              </div>
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute h-full rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: budget.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BudgetOverview;
