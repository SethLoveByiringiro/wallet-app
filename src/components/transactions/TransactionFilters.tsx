// src/components/transactions/TransactionFilters.tsx
import { useState } from "react";
import {
  FunnelIcon,
  CalendarIcon,
  ArrowPathIcon,
  TagIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

interface FilterState {
  type: string;
  category: string;
  account: string;
  dateFrom: string;
  dateTo: string;
}

export default function TransactionFilters() {
  const [filters, setFilters] = useState<FilterState>({
    type: "all",
    category: "all",
    account: "all",
    dateFrom: "",
    dateTo: "",
  });

  const categories = [
    { id: "food", name: "Food", color: "bg-blue-100 text-blue-800" },
    { id: "salary", name: "Salary", color: "bg-green-100 text-green-800" },
    {
      id: "transport",
      name: "Transport",
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: "shopping",
      name: "Shopping",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      id: "entertainment",
      name: "Entertainment",
      color: "bg-pink-100 text-pink-800",
    },
    {
      id: "utilities",
      name: "Utilities",
      color: "bg-indigo-100 text-indigo-800",
    },
  ];

  const handleReset = () => {
    setFilters({
      type: "all",
      category: "all",
      account: "all",
      dateFrom: "",
      dateTo: "",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Filter Transactions
        </h2>
        <button
          onClick={handleReset}
          className="text-gray-600 hover:text-gray-800 flex items-center gap-2 text-sm"
        >
          <ArrowPathIcon className="h-4 w-4" />
          Reset Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Transaction Type */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <FunnelIcon className="h-4 w-4 text-gray-500" />
            Transaction Type
          </label>
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
          >
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <TagIcon className="h-4 w-4 text-gray-500" />
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Account */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <BuildingLibraryIcon className="h-4 w-4 text-gray-500" />
            Account
          </label>
          <select
            value={filters.account}
            onChange={(e) =>
              setFilters({ ...filters, account: e.target.value })
            }
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
          >
            <option value="all">All Accounts</option>
            <option value="bank">Bank Account</option>
            <option value="cash">Cash</option>
            <option value="mobile">Mobile Money</option>
          </select>
        </div>

        {/* Date Range */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <CalendarIcon className="h-4 w-4 text-gray-500" />
            Date Range
          </label>
          <div className="flex gap-2">
            <input
              type="date"
              value={filters.dateFrom}
              onChange={(e) =>
                setFilters({ ...filters, dateFrom: e.target.value })
              }
              className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 text-sm"
            />
            <input
              type="date"
              value={filters.dateTo}
              onChange={(e) =>
                setFilters({ ...filters, dateTo: e.target.value })
              }
              className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-end space-x-3">
        <button
          onClick={handleReset}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm font-medium transition-colors"
        >
          Clear
        </button>
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
          <FunnelIcon className="h-4 w-4" />
          Apply Filters
        </button>
      </div>
    </div>
  );
}
