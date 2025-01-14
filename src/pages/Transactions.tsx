// src/pages/Transactions.tsx
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import TransactionForm from "../components/transactions/TransactionForm";
import TransactionList from "../components/transactions/TransactionList";
import TransactionFilters from "../components/transactions/TransactionFilters";

export default function Transactions() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Transactions</h1>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
        >
          <PlusIcon className="h-5 w-5" />
          Add Transaction
        </button>
      </div>

      <TransactionFilters />
      <TransactionList />

      {showForm && <TransactionForm onClose={() => setShowForm(false)} />}
    </div>
  );
}
