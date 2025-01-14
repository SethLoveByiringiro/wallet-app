// src/components/budgets/BudgetForm.tsx

interface BudgetFormProps {
  onClose: () => void;
}

export default function BudgetForm({ onClose }: BudgetFormProps) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Budget</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option value="food">Food & Dining</option>
              <option value="transport">Transportation</option>
              <option value="shopping">Shopping</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="0.00"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Period
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          <div className="flex justify-end gap-4 mt-6">
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
