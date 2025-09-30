'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <aside className="fixed left-0 top-[80px] h-[calc(100vh-80px)] w-60 bg-gradient-to-b from-[#0078D7] to-[#005A9E] flex flex-col text-[#fff] shadow-xl z-40 rounded-tr-[50px]">
      {/* Upload Button */}
      <div className="px-4 py-4 pt-6 w-full">
        <button
          className="bg-[#fff] px-10 hover:bg-gray-50 text-[#0078D7] rounded-full py-3 flex items-center justify-center gap-2 shadow-md transition-all font-bold"
          style={{ fontFamily: 'var(--font-noto-sans-jp)', fontWeight: 800 }}
        >
          <span className="text-lg">+</span>
          <span>アップロード</span>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-2 py-4 font-[family-name:var(--font-noto-sans-jp)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <ul className="space-y-0.5">
          <li>
            <Link href="/" className={`flex items-center gap-3 px-4 py-3 rounded-full transition-colors ${
              isActive('/') ? 'bg-white/20' : 'hover:bg-white/10'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a2 2 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-[15px] font-bold">ダッシュボード</span>
            </Link>
          </li>
          <li>
            <Link href="/users" className={`flex items-center gap-3 px-4 py-3 rounded-full transition-colors ${
              isActive('/users') ? 'bg-white/20' : 'hover:bg-white/10'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-[15px] font-bold">利用者管理</span>
            </Link>
          </li>
          <li>
            <Link href="/records" className={`flex items-center gap-3 px-4 py-3 rounded-full transition-colors ${
              isActive('/records') ? 'bg-white/20' : 'hover:bg-white/10'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-[15px] font-bold">記録・報告</span>
            </Link>
          </li>
          <li>
            <Link href="/care-plan" className={`flex items-center gap-3 px-4 py-3 rounded-full transition-colors ${
              isActive('/care-plan') ? 'bg-white/20' : 'hover:bg-white/10'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <span className="text-[15px] font-bold">看護計画</span>
            </Link>
          </li>
          <li>
            <Link href="/schedule" className={`flex items-center gap-3 px-4 py-3 rounded-full transition-colors ${
              isActive('/schedule') ? 'bg-white/20' : 'hover:bg-white/10'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-[15px] font-bold">スケジュール管理</span>
            </Link>
          </li>
          <li>
            <Link href="/medical-data" className={`flex items-center gap-3 px-4 py-3 rounded-full transition-colors ${
              isActive('/medical-data') ? 'bg-white/20' : 'hover:bg-white/10'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-[15px] font-bold">医療データ支援</span>
            </Link>
          </li>
          <li>
            <Link href="/billing" className={`flex items-center gap-3 px-4 py-3 rounded-full transition-colors ${
              isActive('/billing') ? 'bg-white/20' : 'hover:bg-white/10'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[15px] font-bold">加算・制度対応</span>
            </Link>
          </li>
          <li>
            <Link href="/notifications" className={`flex items-center gap-3 px-4 py-3 rounded-full transition-colors ${
              isActive('/notifications') ? 'bg-white/20' : 'hover:bg-white/10'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="text-[15px] font-bold">通知・共有</span>
            </Link>
          </li>
          <li>
            <Link href="/chat" className={`flex items-center gap-3 px-4 py-3 rounded-full transition-colors ${
              isActive('/chat') ? 'bg-white/20' : 'hover:bg-white/10'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-[15px] font-bold">社内チャット</span>
            </Link>
          </li>
          <li>
            <Link href="/settings" className={`flex items-center gap-3 px-4 py-3 rounded-full transition-colors ${
              isActive('/settings') ? 'bg-white/20' : 'hover:bg-white/10'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-[15px] font-bold">設定・管理者メニュー</span>
            </Link>
          </li>
          <li>
            <Link href="/help" className={`flex items-center gap-3 px-4 py-3 rounded-full transition-colors ${
              isActive('/help') ? 'bg-white/20' : 'hover:bg-white/10'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[15px] font-bold">ヘルプ・サポート</span>
            </Link>
          </li>
          <li>
            <Link href="/invoice" className={`flex items-center gap-3 px-4 py-3 rounded-full transition-colors ${
              isActive('/invoice') ? 'bg-white/20' : 'hover:bg-white/10'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-[15px] font-bold">請求</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Plan Details */}
      

      {/* User Info */}
      <div className="px-4 py-5 border-t border-white/20 font-[family-name:var(--font-noto-sans-jp)]">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center text-[15px] font-bold">
            山
          </div>
          <div className="flex-1">
            <div className="text-[13px] font-bold">山田 太郎</div>
            <div className="text-[11px] text-[#fff]/80">管理者</div>
          </div>
        </div>
        <button className="text-[13px] font-bold flex items-center gap-1 hover:underline transition-all">
          アカウント設定
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </aside>
  );
}