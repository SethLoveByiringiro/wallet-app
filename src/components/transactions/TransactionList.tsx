// src/components/transactions/TransactionList.tsx
import { format } from "date-fns";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

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
      date: "2025-01-14",
      description: "Grocery Shopping",
      category: "Food",
      account: "Bank Account",
      amount: -150500,
      type: "expense",
    },
    {
      id: "2",
      date: "2025-01-14",
      description: "Salary Deposit",
      category: "Salary",
      account: "Bank Account",
      amount: 3000000,
      type: "income",
    },
    // Add more sample transactions
  ];

  const getCategoryStyle = (category: string) => {
    const styles: { [key: string]: string } = {
      Food: "bg-blue-100 text-blue-800",
      Salary: "bg-green-100 text-green-800",
      Transport: "bg-purple-100 text-purple-800",
      Shopping: "bg-yellow-100 text-yellow-800",
      Entertainment: "bg-pink-100 text-pink-800",
      Utilities: "bg-indigo-100 text-indigo-800",
    };
    return styles[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Table Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h3 className="text-lg font-medium text-gray-900">
          Recent Transactions
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date/Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Account
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Amount
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        transaction.type === "income"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }`}
                    >
                      {transaction.type === "income" ? (
                        <ArrowUpIcon className="w-4 h-4 text-green-600" />
                      ) : (
                        <ArrowDownIcon className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {transaction.description}
                      </div>
                      <div className="text-xs text-gray-500">
                        {format(new Date(transaction.date), "MMM dd, yyyy")}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryStyle(
                      transaction.category
                    )}`}
                  >
                    {transaction.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.account}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                  <span
                    className={
                      transaction.amount >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {transaction.amount >= 0 ? "+" : "-"}RWF{" "}
                    {Math.abs(transaction.amount).toLocaleString()}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="text-gray-400 hover:text-gray-500">
                      <PencilIcon className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-red-500">
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination or Load More */}
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {transactions.length} transactions
        </div>
        <button className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
          Load More
        </button>
      </div>
    </div>
  );
}
