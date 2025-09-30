'use client';

import { useState } from 'react';

export default function Notifications() {
  const [filter, setFilter] = useState('all');

  const notifications = [
    { id: 1, type: 'health', user: '田中太郎', message: '血圧が高値です（152/88）', time: '10分前', priority: 'high', read: false },
    { id: 2, type: 'record', user: null, message: '本日の訪問記録が未入力です（3件）', time: '30分前', priority: 'medium', read: false },
    { id: 3, type: 'insurance', user: '佐藤花子', message: '公費有効期限が近づいています（10/15）', time: '1時間前', priority: 'high', read: false },
    { id: 4, type: 'health', user: '山田良子', message: '体温が平常値に戻りました', time: '2時間前', priority: 'low', read: true },
    { id: 5, type: 'system', user: null, message: 'システムメンテナンスのお知らせ', time: '3時間前', priority: 'medium', read: true },
  ];

  const sharedReports = [
    { id: 1, user: '佐藤花子', recipient: 'ケアマネージャー', date: '2024-09-28', status: 'sent' },
    { id: 2, user: '田中太郎', recipient: '家族', date: '2024-09-27', status: 'draft' },
    { id: 3, user: '山田良子', recipient: 'ケアマネージャー', date: '2024-09-25', status: 'sent' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'health':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5 0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5C8.5 7.57 10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
          </svg>
        );
      case 'record':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          </svg>
        );
      case 'insurance':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#fff] font-[family-name:var(--font-noto-sans-jp)] p-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">通知・共有</h1>
        <p className="text-gray-600">アラート通知と共有レポートの管理</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 border border-red-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-red-900">緊急</span>
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z"/>
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-red-900">2</div>
          <div className="text-xs text-red-700 mt-1">件</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 border border-yellow-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-yellow-900">要確認</span>
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-yellow-900">2</div>
          <div className="text-xs text-yellow-700 mt-1">件</div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-900">情報</span>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-blue-900">1</div>
          <div className="text-xs text-blue-700 mt-1">件</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-green-900">送信済み</span>
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-green-900">2</div>
          <div className="text-xs text-green-700 mt-1">レポート</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Notifications */}
        <div className="col-span-2 space-y-6">
          {/* Filter Bar */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  filter === 'all' ? 'bg-[#0078D7] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                すべて
              </button>
              <button
                onClick={() => setFilter('unread')}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  filter === 'unread' ? 'bg-[#0078D7] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                未読
              </button>
              <button
                onClick={() => setFilter('health')}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  filter === 'health' ? 'bg-[#0078D7] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                体調変化
              </button>
              <button
                onClick={() => setFilter('record')}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  filter === 'record' ? 'bg-[#0078D7] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                入力漏れ
              </button>
              <button
                onClick={() => setFilter('insurance')}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  filter === 'insurance' ? 'bg-[#0078D7] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                公費切れ
              </button>
            </div>
          </div>

          {/* Notifications List */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">通知一覧</h2>
              <button className="text-sm text-[#0078D7] font-bold hover:underline">
                すべて既読にする
              </button>
            </div>

            <div className="divide-y divide-gray-100">
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`p-6 hover:bg-blue-50/30 transition-colors cursor-pointer ${
                    !notif.read ? 'bg-blue-50/20' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      notif.priority === 'high' ? 'bg-red-500 text-white' :
                      notif.priority === 'medium' ? 'bg-yellow-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {getIcon(notif.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <div className="font-bold text-gray-900">
                          {notif.user || 'システム通知'}
                        </div>
                        <div className="text-xs text-gray-500">{notif.time}</div>
                      </div>
                      <div className="text-sm text-gray-700">{notif.message}</div>
                      {!notif.read && (
                        <div className="mt-2">
                          <span className="inline-block px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded">
                            未読
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Shared Reports */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">クイックアクション</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-3 bg-blue-50 text-blue-700 rounded-xl font-bold hover:bg-blue-100 transition-colors text-sm text-left flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                レポート作成
              </button>
              <button className="w-full px-4 py-3 bg-green-50 text-green-700 rounded-xl font-bold hover:bg-green-100 transition-colors text-sm text-left flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                一斉送信
              </button>
            </div>
          </div>

          {/* Shared Reports */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">共有レポート</h3>
            <div className="space-y-3">
              {sharedReports.map((report) => (
                <div key={report.id} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-gray-900 text-sm">{report.user}</div>
                    <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                      report.status === 'sent' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {report.status === 'sent' ? '送信済み' : '下書き'}
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 mb-1">宛先: {report.recipient}</div>
                  <div className="text-xs text-gray-500">{report.date}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">通知設定</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">体調変化</span>
                <div className="w-12 h-6 bg-[#0078D7] rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">入力漏れ</span>
                <div className="w-12 h-6 bg-[#0078D7] rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">公費切れ</span>
                <div className="w-12 h-6 bg-[#0078D7] rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}