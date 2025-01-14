// src/components/transactions/TransactionForm.tsx

interface TransactionFormProps {
  onClose: () => void;
}

export default function TransactionForm({ onClose }: TransactionFormProps) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Type
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option value="expense">Expense</option>
              <option value="income">Income</option>
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
              Category
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option value="food">Food</option>
              <option value="transport">Transport</option>
              <option value="shopping">Shopping</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Account
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option value="bank">Bank Account</option>
              <option value="cash">Cash</option>
              <option value="mobile">Mobile Money</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="Enter description"
            />
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
