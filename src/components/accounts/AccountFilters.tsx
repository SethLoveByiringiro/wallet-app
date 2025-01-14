// src/components/accounts/AccountFilters.tsx
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface AccountFiltersProps {
  onFilterChange: (filters: {
    search: string;
    type: string;
    sortBy: string;
  }) => void;
}

export default function AccountFilters({
  onFilterChange,
}: AccountFiltersProps) {
  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    sortBy: "balance-high",
  });

  const handleChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex flex-wrap gap-4">
        {/* Search */}
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search accounts..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              value={filters.search}
              onChange={(e) => handleChange("search", e.target.value)}
            />
          </div>
        </div>

        {/* Account Type Filter */}
        <div className="w-48">
          <select
            className="w-full border rounded-lg py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
            value={filters.type}
            onChange={(e) => handleChange("type", e.target.value)}
          >
            <option value="all">All Account Types</option>
            <option value="bank">Bank Accounts</option>
            <option value="cash">Cash</option>
            <option value="mobile_money">Mobile Money</option>
          </select>
        </div>

        {/* Sort By */}
        <div className="w-48">
          <select
            className="w-full border rounded-lg py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
            value={filters.sortBy}
            onChange={(e) => handleChange("sortBy", e.target.value)}
          >
            <option value="balance-high">Highest Balance</option>
            <option value="balance-low">Lowest Balance</option>
            <option value="name-asc">Name A-Z</option>
            <option value="name-desc">Name Z-A</option>
          </select>
        </div>
      </div>
    </div>
  );
}
