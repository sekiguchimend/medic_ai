import Link from 'next/link';
import { Search, Bell, HelpCircle, Settings, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white h-14 flex items-center justify-between px-4">
      {/* Left section - Logo */}
      <div className="flex items-end justfy-center">
        <div className="flex items-center justfy-center gap-2">
          <svg className="w-6 h-6 text-[#0078D7]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
          </svg>
          <span className="text-xl font-extrabold text-gray-900 tracking-wider font-[family-name:var(--font-geist-sans)]">MEDIC_AI</span>
        </div>
      </div>

      {/* Center section - Search */}
      <div className="flex-1 max-w-2xl mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search Drive"
            className="w-full h-10 pl-10 pr-4 bg-gray-100 rounded-lg text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0078D7] transition-all"
          />
        </div>
      </div>

      {/* Right section - Icons */}
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <HelpCircle className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>

        {/* User Avatar */}
        <button className="w-8 h-8 rounded-full bg-[#0078D7] flex items-center justify-center text-white text-sm font-medium ml-2">
          J
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </header>
  );
}