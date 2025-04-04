"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  PiggyBank,
  Settings,
  LogOut,
  CreditCard,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

const menuItems = [
  { icon: LayoutDashboard, labelKey: "sidebar.dashboard", href: "/lender/dashboard" },
  { icon: FileText, labelKey: "sidebar.activeLoans", href: "/lender/dashboard/active-loans" },
  { icon: PiggyBank, labelKey: "sidebar.auditLogs", href: "/lender/dashboard/audit-logs" },
  { icon: Wallet, labelKey: "sidebar.loanRequests", href: "/lender/dashboard/loan-requests" },
  { icon: CreditCard, labelKey: "sidebar.repayments", href: "/lender/dashboard/repayments" },
  { icon: Settings, labelKey: "sidebar.settings", href: "/lender/dashboard/settings" },
];

export function LenderSidebar() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <aside className="flex flex-col w-64 min-h-screen bg-white border-r dark:bg-darkbg dark:border-gray-700 border-gray-700 p-4">
      <div className="flex items-center  mb-4">
        <Image src="/img/TrustBridge.png" alt="TrustBridge" width={50} height={50} />
        <h1 className="text-2xl font-bold text-dark dark:text-white">TrustBridge</h1>
      </div>
      <nav className="flex-1 space-y-4">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center space-x-2 text-sm font-medium ${
              pathname === item.href
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-700 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-500"
            }`}
          >
            <item.icon className="h-4 w-4" />
            <span>{t(item.labelKey)}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto">
        <Link
          href="/"
          className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
        >
          <LogOut className="h-4 w-4" />
          <span>{t("sidebar.logout")}</span>
        </Link>
      </div>
    </aside>
  );
}
