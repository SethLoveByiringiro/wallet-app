// src/components/budgets/BudgetList.tsx
interface Budget {
  id: string;
  category: string;
  amount: number;
  spent: number;
  period: string;
}

export function BudgetList() {
  const budgets: Budget[] = [
    {
      id: "1",
      category: "Food & Dining",
      amount: 600,
      spent: 400,
      period: "Monthly",
    },
    {
      id: "2",
      category: "Transportation",
      amount: 300,
      spent: 200,
      period: "Monthly",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow mt-6">
      <div className="p-6">
        <div className="space-y-6">
          {budgets.map((budget) => {
            const percentage = (budget.spent / budget.amount) * 100;
            return (
              <div key={budget.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium">{budget.category}</h3>
                    <p className="text-sm text-gray-500">{budget.period}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium">
                      ${budget.spent} / ${budget.amount}
                    </p>
                    <p className="text-sm text-gray-500">
                      {percentage.toFixed(1)}% used
                    </p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${
                      percentage >= 90
                        ? "bg-red-600"
                        : percentage >= 75
                        ? "bg-yellow-500"
                        : "bg-blue-600"
                    }`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
