// src/pages/Notifications.tsx
import { useState } from "react";
import {
  BellIcon,
  CheckIcon,
  XMarkIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { Card } from "../components/ui/Card";
import { format, formatDistanceToNow } from "date-fns";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "warning" | "success" | "error";
  date: string;
  read: boolean;
  category: "budget" | "transaction" | "account" | "system";
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Budget Alert",
      message: "You have exceeded your Food & Dining budget by $50",
      type: "warning",
      date: "2024-01-16T10:00:00",
      read: false,
      category: "budget",
    },
    {
      id: "2",
      title: "Transaction Successful",
      message: "Your salary has been deposited successfully",
      type: "success",
      date: "2024-01-16T09:30:00",
      read: true,
      category: "transaction",
    },
    {
      id: "3",
      title: "Account Update",
      message: "Your profile information has been updated successfully",
      type: "info",
      date: "2024-01-15T15:45:00",
      read: true,
      category: "account",
    },
    {
      id: "4",
      title: "Security Alert",
      message: "New login detected from an unknown device",
      type: "error",
      date: "2024-01-15T14:20:00",
      read: false,
      category: "system",
    },
  ]);

  const [filter, setFilter] = useState({
    type: "all",
    read: "all",
    category: "all",
  });

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500" />;
      case "success":
        return <CheckCircleIcon className="h-6 w-6 text-green-500" />;
      case "error":
        return <XMarkIcon className="h-6 w-6 text-red-500" />;
      default:
        return <InformationCircleIcon className="h-6 w-6 text-blue-500" />;
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const filteredNotifications = notifications.filter((notification) => {
    const typeMatch =
      filter.type === "all" || notification.type === filter.type;
    const readMatch =
      filter.read === "all" ||
      (filter.read === "read" ? notification.read : !notification.read);
    const categoryMatch =
      filter.category === "all" || notification.category === filter.category;
    return typeMatch && readMatch && categoryMatch;
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  const formattedDate = format(new Date(), "yyyy-MM-dd");

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold">Notifications</h1>
          {unreadCount > 0 && (
            <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              {unreadCount} unread
            </span>
          )}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={markAllAsRead}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <CheckIcon className="h-4 w-4 mr-2" />
            Mark all as read
          </button>
          <button
            onClick={clearAllNotifications}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <XMarkIcon className="h-4 w-4 mr-2" />
            Clear all
          </button>
        </div>
      </div>

      <Card className="mb-6">
        <div className="p-4 flex flex-wrap gap-4">
          <select
            className="block w-40 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={filter.type}
            onChange={(e) => setFilter({ ...filter, type: e.target.value })}
          >
            <option value="all">All Types</option>
            <option value="info">Information</option>
            <option value="warning">Warnings</option>
            <option value="success">Success</option>
            <option value="error">Errors</option>
          </select>

          <select
            className="block w-40 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={filter.read}
            onChange={(e) => setFilter({ ...filter, read: e.target.value })}
          >
            <option value="all">All Status</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
          </select>

          <select
            className="block w-40 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={filter.category}
            onChange={(e) => setFilter({ ...filter, category: e.target.value })}
          >
            <option value="all">All Categories</option>
            <option value="budget">Budget</option>
            <option value="transaction">Transactions</option>
            <option value="account">Account</option>
            <option value="system">System</option>
          </select>
        </div>
      </Card>

      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-12">
            <BellIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No notifications
            </h3>
            <p className="mt-1 text-sm text-gray-500">You're all caught up!</p>
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`bg-white rounded-lg shadow p-4 transition duration-150 ease-in-out ${
                !notification.read ? "border-l-4 border-indigo-500" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  {getNotificationIcon(notification.type)}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {notification.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {notification.message}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      {formatDistanceToNow(new Date(notification.date), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {!notification.read && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <CheckIcon className="h-5 w-5" />
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(notification.id)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
