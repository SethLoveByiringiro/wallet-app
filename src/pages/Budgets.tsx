// src/pages/Budgets.tsx
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { BudgetList } from "../components/budgets/BudgetList";
import BudgetForm from "../components/budgets/BudgetForm";
import { BudgetSummary } from "../components/budgets/BudgetSummary";

export default function Budgets() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Budgets</h1>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
        >
          <PlusIcon className="h-5 w-5" />
          Add Budget
        </button>
      </div>

      <BudgetSummary />
      <BudgetList />

      {showForm && <BudgetForm onClose={() => setShowForm(false)} />}
    </div>
  );
}
