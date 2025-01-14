// src/components/accounts/AccountList.tsx
import { useState } from "react";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";

interface Account {
  id: string;
  name: string;
  type: "bank" | "cash" | "mobile_money";
  balance: number;
}

export default function AccountList() {
  const [accounts] = useState<Account[]>([
    {
      id: "1",
      name: "Main Bank Account",
      type: "bank",
      balance: 5000,
    },
    {
      id: "2",
      name: "Cash Wallet",
      type: "cash",
      balance: 500,
    },
    {
      id: "3",
      name: "Mobile Money",
      type: "mobile_money",
      balance: 300,
    },
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {accounts.map((account) => (
        <div key={account.id} className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                {account.name}
              </h3>
              <p className="text-sm text-gray-500 capitalize">
                {account.type.replace("_", " ")}
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="text-gray-400 hover:text-gray-500">
                <PencilIcon className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-red-500">
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold text-gray-900">
              ${account.balance.toLocaleString()}
            </p>
          </div>
        </div>
      ))}

      {/* Add Account Card */}
      <button className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-indigo-500 hover:bg-indigo-50 transition-colors">
        <div className="flex flex-col items-center justify-center h-full space-y-2">
          <PlusIcon className="h-8 w-8 text-gray-400" />
          <span className="text-sm font-medium text-gray-500">
            Add New Account
          </span>
        </div>
      </button>
    </div>
  );
}
