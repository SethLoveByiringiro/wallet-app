// src/components/transactions/TransactionFilters.tsx
import { FunnelIcon, CalendarIcon } from "@heroicons/react/24/outline";

export default function TransactionFilters() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <FunnelIcon className="h-5 w-5 text-gray-400" />
          <div>
            <label className="block text-sm text-gray-600">Type</label>
            <select className="mt-1 block w-40 rounded-md border-gray-300 shadow-sm focus:border-indigo-500">
              <option>All Types</option>
              <option>Income</option>
              <option>Expense</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600">Category</label>
          <select className="mt-1 block w-40 rounded-md border-gray-300 shadow-sm focus:border-indigo-500">
            <option>All Categories</option>
            <option>Food</option>
            <option>Salary</option>
            <option>Transport</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600">Account</label>
          <select className="mt-1 block w-40 rounded-md border-gray-300 shadow-sm focus:border-indigo-500">
            <option>All Accounts</option>
            <option>Bank Account</option>
            <option>Cash</option>
            <option>Mobile Money</option>
          </select>
        </div>

        <div className="flex-grow">
          <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            Date Range
          </label>
          <div className="flex items-center gap-2 mt-1">
            <input
              type="date"
              className="block w-40 rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
              placeholder="mm/dd/yyyy"
            />
            <input
              type="date"
              className="block w-40 rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
              placeholder="mm/dd/yyyy"
            />
          </div>
        </div>

        <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2">
          <FunnelIcon className="h-4 w-4" />
          Apply Filters
        </button>
      </div>
    </div>
  );
}
