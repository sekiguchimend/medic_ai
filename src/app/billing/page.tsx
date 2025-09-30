'use client';

import { useState } from 'react';

export default function Billing() {
  const [selectedMonth, setSelectedMonth] = useState('2024-09');

  const billingData = [
    { user: '佐藤花子', visits: 8, bonus: ['緊急時訪問看護加算', '特別管理加算'], amount: 45000, status: 'approved' },
    { user: '田中太郎', visits: 6, bonus: ['特別管理加算'], amount: 38000, status: 'pending' },
    { user: '山田良子', visits: 10, bonus: ['認知症ケア加算', '特別管理加算'], amount: 52000, status: 'approved' },
    { user: '鈴木一郎', visits: 7, bonus: ['緊急時訪問看護加算'], amount: 41000, status: 'approved' },
  ];

  const alerts = [
    { user: '佐藤花子', type: 'insurance', message: '公費有効期限: 2024-10-15', priority: 'high' },
    { user: '田中太郎', type: 'bonus', message: '特別管理加算の要件確認が必要', priority: 'medium' },
    { user: '伊藤美咲', type: 'insurance', message: '公費有効期限: 2024-11-30', priority: 'low' },
  ];

  return (
    <div className="min-h-screen bg-[#fff] font-[family-name:var(--font-noto-sans-jp)] p-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">加算・制度対応</h1>
        <p className="text-gray-600">請求データの管理と加算要件の自動抽出</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-900">今月の請求額</span>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-blue-900">¥176,000</div>
          <div className="text-xs text-blue-700 mt-1">4名分</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-green-900">承認済み</span>
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-green-900">3</div>
          <div className="text-xs text-green-700 mt-1">件</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 border border-yellow-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-yellow-900">確認待ち</span>
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-yellow-900">1</div>
          <div className="text-xs text-yellow-700 mt-1">件</div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 border border-red-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-red-900">アラート</span>
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z"/>
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-red-900">3</div>
          <div className="text-xs text-red-700 mt-1">件</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Billing List */}
        <div className="col-span-2 space-y-6">
          {/* Month Selector */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <label className="text-sm font-bold text-gray-700">対象月:</label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#0078D7]"
                >
                  <option value="2024-09">2024年9月</option>
                  <option value="2024-08">2024年8月</option>
                  <option value="2024-07">2024年7月</option>
                </select>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-[#0078D7] text-white rounded-full font-bold hover:bg-[#005A9E] transition-colors text-sm">
                  レセコン連動
                </button>
                <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-50 transition-colors text-sm">
                  エクスポート
                </button>
              </div>
            </div>
          </div>

          {/* Billing Table */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">請求データ一覧</h2>
            </div>

            <div className="divide-y divide-gray-100">
              {billingData.map((item, idx) => (
                <div key={idx} className="p-6 hover:bg-blue-50/30 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {item.user[0]}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{item.user}</div>
                        <div className="text-sm text-gray-600">訪問回数: {item.visits}回</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#0078D7]">¥{item.amount.toLocaleString()}</div>
                      <div className={`mt-1 inline-block px-3 py-1 rounded-full text-xs font-bold ${
                        item.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.status === 'approved' ? '承認済み' : '確認待ち'}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-gray-700 mb-2">適用加算:</div>
                    <div className="flex flex-wrap gap-2">
                      {item.bonus.map((bonus, bidx) => (
                        <span key={bidx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">
                          {bonus}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Alerts */}
        <div className="space-y-6">
          {/* Alerts */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">アラート通知</h3>
            <div className="space-y-3">
              {alerts.map((alert, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border ${
                    alert.priority === 'high' ? 'bg-red-50 border-red-200' :
                    alert.priority === 'medium' ? 'bg-yellow-50 border-yellow-200' :
                    'bg-blue-50 border-blue-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      alert.priority === 'high' ? 'bg-red-500' :
                      alert.priority === 'medium' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className={`font-bold text-sm mb-1 ${
                        alert.priority === 'high' ? 'text-red-900' :
                        alert.priority === 'medium' ? 'text-yellow-900' :
                        'text-blue-900'
                      }`}>
                        {alert.user}
                      </div>
                      <div className={`text-xs ${
                        alert.priority === 'high' ? 'text-red-700' :
                        alert.priority === 'medium' ? 'text-yellow-700' :
                        'text-blue-700'
                      }`}>
                        {alert.message}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bonus Requirements */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">加算要件チェック</h3>
            <p className="text-sm text-gray-600 mb-4">
              記録内容から自動で加算要件を抽出します。
            </p>
            <button className="w-full px-4 py-2 bg-purple-50 text-purple-700 rounded-full font-bold hover:bg-purple-100 transition-colors text-sm">
              要件を確認
            </button>
          </div>

          {/* Export Options */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">エクスポート</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-green-50 text-green-700 rounded-full font-bold hover:bg-green-100 transition-colors text-sm text-left flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                CSV形式
              </button>
              <button className="w-full px-4 py-2 bg-red-50 text-red-700 rounded-full font-bold hover:bg-red-100 transition-colors text-sm text-left flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                PDF形式
              </button>
              <button className="w-full px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold hover:bg-blue-100 transition-colors text-sm text-left flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                レセコン形式
              </button>
            </div>
          </div>

          {/* Insurance Expiry */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-orange-900">公費期限管理</div>
                <div className="text-xs text-orange-700">3件の期限が近づいています</div>
              </div>
            </div>
            <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-colors text-sm">
              期限を確認
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}