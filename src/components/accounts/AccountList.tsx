// src/components/accounts/AccountList.tsx
import { useState } from "react";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
import {
  PhoneIcon,
  CreditCardIcon,
  WalletIcon,
} from "@heroicons/react/24/solid";

interface Account {
  id: string;
  name: string;
  type: "bank" | "cash" | "mobile_money";
  balance: number;
  provider?: string;
  accountNumber?: string;
}

export default function AccountList() {
  const [accounts] = useState<Account[]>([
    {
      id: "1",
      name: "BK Account",
      type: "bank",
      balance: 5000,
      provider: "Bank of Kigali",
      accountNumber: "XXXX-XXXX-1234",
    },
    {
      id: "2",
      name: "Cash Wallet",
      type: "cash",
      balance: 500,
    },
    {
      id: "3",
      name: "MTN MoMo",
      type: "mobile_money",
      balance: 300,
      provider: "MTN",
      accountNumber: "078XXXXXXX",
    },
    {
      id: "4",
      name: "Airtel Money",
      type: "mobile_money",
      balance: 250,
      provider: "Airtel",
      accountNumber: "073XXXXXXX",
    },
  ]);

  const getAccountStyles = (type: string, provider?: string) => {
    switch (type) {
      case "mobile_money":
        if (provider === "MTN") {
          return {
            background: "bg-yellow-400",
            text: "text-gray-900",
            border: "border-yellow-500",
            hover: "hover:bg-yellow-500",
            icon: <PhoneIcon className="h-8 w-8 text-gray-900" />,
            gradient: "bg-gradient-to-br from-yellow-400 to-yellow-500",
            secondaryText: "text-gray-800",
            brand: "MTN MoMo",
          };
        }
        if (provider === "Airtel") {
          return {
            background: "bg-red-600",
            text: "text-white",
            border: "border-red-700",
            hover: "hover:bg-red-700",
            icon: <PhoneIcon className="h-8 w-8 text-white" />,
            gradient: "bg-gradient-to-br from-red-600 to-red-700",
            secondaryText: "text-red-100",
            brand: "Airtel Money",
          };
        }
        return {
          background: "bg-blue-600",
          text: "text-white",
          border: "border-blue-700",
          hover: "hover:bg-blue-700",
          icon: <PhoneIcon className="h-8 w-8 text-white" />,
          gradient: "bg-gradient-to-br from-blue-600 to-blue-700",
          secondaryText: "text-blue-100",
        };
      case "bank":
        if (provider === "Bank of Kigali") {
          return {
            background: "bg-blue-800",
            text: "text-white",
            border: "border-blue-900",
            hover: "hover:bg-blue-900",
            icon: <CreditCardIcon className="h-8 w-8 text-white" />,
            gradient: "bg-gradient-to-br from-blue-800 to-blue-900",
            secondaryText: "text-blue-100",
            brand: "BK",
          };
        }
        return {
          background: "bg-indigo-600",
          text: "text-white",
          border: "border-indigo-700",
          hover: "hover:bg-indigo-700",
          icon: <CreditCardIcon className="h-8 w-8 text-white" />,
          gradient: "bg-gradient-to-br from-indigo-600 to-indigo-700",
          secondaryText: "text-indigo-100",
        };
      case "cash":
        return {
          background: "bg-green-600",
          text: "text-white",
          border: "border-green-700",
          hover: "hover:bg-green-700",
          icon: <WalletIcon className="h-8 w-8 text-white" />,
          gradient: "bg-gradient-to-br from-green-600 to-green-700",
          secondaryText: "text-green-100",
        };
      default:
        return {
          background: "bg-gray-100",
          text: "text-gray-900",
          border: "border-gray-200",
          hover: "hover:bg-gray-200",
          icon: null,
          gradient: "bg-gradient-to-br from-gray-100 to-gray-200",
          secondaryText: "text-gray-600",
        };
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {accounts.map((account) => {
        const styles = getAccountStyles(account.type, account.provider);

        return (
          <div
            key={account.id}
            className={`rounded-lg shadow-lg overflow-hidden ${styles.gradient} transform transition-all duration-200 hover:scale-105`}
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    {styles.icon}
                    <div>
                      <h3 className={`text-lg font-bold ${styles.text}`}>
                        {account.name}
                      </h3>
                      {account.provider && (
                        <p className={`text-sm ${styles.secondaryText}`}>
                          {account.provider}
                        </p>
                      )}
                      {account.accountNumber && (
                        <p className={`text-xs ${styles.secondaryText} mt-1`}>
                          {account.accountNumber}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className={`mt-4 text-3xl font-bold ${styles.text}`}>
                    RWF {account.balance.toLocaleString()}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    className={`${styles.text} opacity-70 hover:opacity-100 transition-opacity`}
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button
                    className={`${styles.text} opacity-70 hover:opacity-100 transition-opacity`}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            <button
              className={`w-full px-6 py-3 ${styles.background} ${styles.text} text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2`}
            >
              <span>View Transactions</span>
            </button>
          </div>
        );
      })}

      {/* Add Account Card */}
      <button className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-800 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105">
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
