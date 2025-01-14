// src/components/dashboard/RecentTransactions.tsx

function RecentTransactions() {
  const transactions = [
    {
      id: "1",
      description: "Grocery Shopping",
      amount: 150.5,
      type: "expense",
      category: "Food",
    },
    {
      id: "2",
      description: "Salary Deposit",
      amount: 3000,
      type: "income",
      category: "Salary",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900">Recent Transactions</h2>
      <div className="mt-6 space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex justify-between items-center p-4 border rounded-lg"
          >
            <div>
              <p className="font-medium">{transaction.description}</p>
              <p className="text-sm text-gray-500">{transaction.category}</p>
            </div>
            <div
              className={
                transaction.type === "income"
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              {transaction.type === "income" ? "+" : "-"}${transaction.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentTransactions;
