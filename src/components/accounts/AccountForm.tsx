// src/components/accounts/AccountForm.tsx
import { useState } from "react";
import { Account } from "../../types/account";

interface AccountFormProps {
  onClose: () => void;
  editAccount?: Account;
}

export function AccountForm({ onClose, editAccount }: AccountFormProps) {
  const [formData, setFormData] = useState({
    name: editAccount?.name || "",
    type: editAccount?.type || "bank",
    balance: editAccount?.balance || "",
  });

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          {editAccount ? "Edit Account" : "Add New Account"}
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Account Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="e.g., Main Bank Account"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Account Type
            </label>
            <select
              value={formData.type}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  type: e.target.value as "bank" | "cash" | "mobile_money",
                }))
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              <option value="bank">Bank Account</option>
              <option value="cash">Cash</option>
              <option value="mobile_money">Mobile Money</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Initial Balance
            </label>
            <input
              type="number"
              value={formData.balance}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, balance: e.target.value }))
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="0.00"
              step="0.01"
            />
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
            >
              {editAccount ? "Update" : "Add"} Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
