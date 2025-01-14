// src/components/layout/Header.tsx
import { UserCircleIcon, BellIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <BellIcon className="h-6 w-6" />
            </button>
            <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <UserCircleIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
