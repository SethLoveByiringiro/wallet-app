// src/components/budgets/BudgetSummary.tsx
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";

export function BudgetSummary() {
  const summary = {
    totalBudget: 2500000,
    totalSpent: 1800000,
    remainingBudget: 700000,
    percentageSpent: 72, // (1800000 / 2500000) * 100
  };

  return (
    <div className="space-y-6">
      {/* Budget Progress Overview */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Budget Overview
          </h2>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            Monthly
          </span>
        </div>

        {/* Progress Bar */}
        <div className="relative pt-4">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-100">
                Budget Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-indigo-600">
                {summary.percentageSpent}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-100">
            <div
              style={{ width: `${summary.percentageSpent}%` }}
              className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                summary.percentageSpent > 90
                  ? "bg-red-500"
                  : summary.percentageSpent > 75
                  ? "bg-yellow-500"
                  : "bg-indigo-500"
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Budget Card */}
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl shadow-lg p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium opacity-80">Total Budget</p>
              <p className="text-2xl font-bold mt-1">
                RWF {summary.totalBudget.toLocaleString()}
              </p>
            </div>
            <div className="rounded-full bg-white/20 p-3">
              <WalletIcon className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        {/* Total Spent Card */}
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-lg p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium opacity-80">Total Spent</p>
              <p className="text-2xl font-bold mt-1">
                RWF {summary.totalSpent.toLocaleString()}
              </p>
            </div>
            <div className="rounded-full bg-white/20 p-3">
              <ArrowTrendingUpIcon className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="mt-4 text-sm">
            <span className="bg-white/20 px-2 py-1 rounded">
              {summary.percentageSpent}% of budget used
            </span>
          </div>
        </div>

        {/* Remaining Budget Card */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium opacity-80">Remaining Budget</p>
              <p className="text-2xl font-bold mt-1">
                RWF {summary.remainingBudget.toLocaleString()}
              </p>
            </div>
            <div className="rounded-full bg-white/20 p-3">
              <ArrowTrendingDownIcon className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="mt-4 text-sm">
            <span className="bg-white/20 px-2 py-1 rounded">
              {100 - summary.percentageSpent}% remaining
            </span>
          </div>
        </div>
      </div>

      {/* Tips or Alerts */}
      {summary.percentageSpent > 75 && (
        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                You've used {summary.percentageSpent}% of your budget. Consider
                reviewing your spending.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
