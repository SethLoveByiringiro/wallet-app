// src/components/transactions/TransactionList.tsx

interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  account: string;
  amount: number;
  type: "income" | "expense";
}

export default function TransactionList() {
  const transactions: Transaction[] = [
    {
      id: "1",
      date: "2024-01-14",
      description: "Grocery Shopping",
      category: "Food",
      account: "Bank Account",
      amount: -150.5,
      type: "expense",
    },
    {
      id: "2",
      date: "2024-01-14",
      description: "Salary Deposit",
      category: "Salary",
      account: "Bank Account",
      amount: 3000.0,
      type: "income",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow mt-6">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Account
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {transaction.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {transaction.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {transaction.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {transaction.account}
              </td>
              <td
                className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                  transaction.amount >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {transaction.amount >= 0 ? "+" : ""}$
                {Math.abs(transaction.amount).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
