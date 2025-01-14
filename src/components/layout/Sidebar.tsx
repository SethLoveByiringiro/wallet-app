// src/components/layout/Sidebar.tsx
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  CreditCardIcon,
  ChartPieIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";

function Sidebar() {
  const location = useLocation();
  const navigation = [
    { name: "Dashboard", href: "/", icon: HomeIcon },
    { name: "Transactions", href: "/transactions", icon: CreditCardIcon },
    { name: "Budgets", href: "/budgets", icon: ChartPieIcon },
    { name: "Accounts", href: "/accounts", icon: WalletIcon },
  ];

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex flex-col flex-grow bg-white border-r border-gray-200">
        <div className="flex items-center h-16 flex-shrink-0 px-4 bg-primary-600">
          <h1 className="text-xl font-bold text-white">Wallet App</h1>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 px-4 py-4 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  <item.icon className="sidebar-icon mr-3" aria-hidden="true" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
