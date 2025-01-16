// src/components/layout/Header.tsx
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import DarkModeToggle from "../ui/DarkModeToggle";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Dashboard
          </h2>
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <Link
              to="/notifications"
              className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <BellIcon className="h-6 w-6" />
            </Link>
            <Link
              to="/profile"
              className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <UserCircleIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
