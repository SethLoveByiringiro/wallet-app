// src/pages/Accounts.tsx
import { useState } from "react";
import AccountList from "../components/accounts/AccountList";
import { AccountForm } from "../components/accounts/AccountForm";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function Accounts() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Accounts</h1>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
        >
          <PlusIcon className="h-5 w-5" />
          Add Account
        </button>
      </div>

      <AccountList />

      {showForm && <AccountForm onClose={() => setShowForm(false)} />}
    </div>
  );
}
