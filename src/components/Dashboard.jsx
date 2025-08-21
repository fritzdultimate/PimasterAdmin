import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Menu, X, LayoutDashboard, Users, Wallet, Settings, Activity, Coins } from "lucide-react";
import Activities from "./Activities";
import SettingsTab from "./SettingsTab";
import Wallets from "./Wallets";
import Sponsors from "./Sponsors";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import Overview from "./Overview";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const nav = [
    { key: "sponsors", label: "Sponsors", icon: Users },
    { key: "wallets", label: "Wallets", icon: Wallet },
    { key: "settings", label: "Settings", icon: Settings },
    { key: "activities", label: "Activities", icon: Activity },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100">
      <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} setActiveTab={setActiveTab} />

      {/* Shell */}
      <div className="flex">
        
        <Sidebar sidebarOpen={sidebarOpen} nav={nav} activeTab={activeTab} setActiveTab={setActiveTab} setSidebarOpen={setSidebarOpen} />

        {/* Main content */}
        <main className="mx-auto w-full max-w-6xl flex-1 p-4 md:p-6">
          { activeTab === 'overview' && <Overview /> }

          {/* Tab content */}
          {activeTab === "sponsors" && <Sponsors />}
          {activeTab === "wallets" && <Wallets />}
          {activeTab === "settings" && <SettingsTab />}
          {activeTab === "activities" && <Activities />}
        </main>
      </div>
    </div>
  );
}
