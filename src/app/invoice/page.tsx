'use client';

import { useState } from 'react';

export default function Invoice() {
  const [selectedMonth, setSelectedMonth] = useState('2024-09');

  const invoiceData = [
    { user: '佐藤花子', visits: 8, subtotal: 40000, insurance: 36000, copay: 4000, status: 'paid' },
    { user: '田中太郎', visits: 6, subtotal: 35000, insurance: 31500, copay: 3500, status: 'pending' },
    { user: '山田良子', visits: 10, subtotal: 50000, insurance: 45000, copay: 5000, status: 'paid' },
    { user: '鈴木一郎', visits: 7, subtotal: 38000, insurance: 34200, copay: 3800, status: 'paid' },
    { user: '伊藤美咲', visits: 5, subtotal: 30000, insurance: 27000, copay: 3000, status: 'pending' },
  ];

  const stats = {
    totalRevenue: 193000,
    insurancePortion: 173700,
    copayPortion: 19300,
    paidCount: 3,
    pendingCount: 2,
  };

  return (
    <div className="min-h-screen bg-[#fff] font-[family-name:var(--font-noto-sans-jp)] p-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">請求管理</h1>
        <p className="text-gray-600">月次請求とレセプト管理</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
          <div className="text-sm font-medium text-blue-900 mb-2">総請求額</div>
          <div className="text-3xl font-bold text-blue-900">¥{stats.totalRevenue.toLocaleString()}</div>
          <div className="text-xs text-blue-700 mt-1">2024年9月分</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
          <div className="text-sm font-medium text-green-900 mb-2">保険請求額</div>
          <div className="text-3xl font-bold text-green-900">¥{stats.insurancePortion.toLocaleString()}</div>
          <div className="text-xs text-green-700 mt-1">90%</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
          <div className="text-sm font-medium text-purple-900 mb-2">自己負担額</div>
          <div className="text-3xl font-bold text-purple-900">¥{stats.copayPortion.toLocaleString()}</div>
          <div className="text-xs text-purple-700 mt-1">10%</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
          <div className="text-sm font-medium text-green-900 mb-2">入金済み</div>
          <div className="text-3xl font-bold text-green-900">{stats.paidCount}</div>
          <div className="text-xs text-green-700 mt-1">件</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 border border-yellow-200">
          <div className="text-sm font-medium text-yellow-900 mb-2">未入金</div>
          <div className="text-3xl font-bold text-yellow-900">{stats.pendingCount}</div>
          <div className="text-xs text-yellow-700 mt-1">件</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Invoice List */}
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
                  レセプト作成
                </button>
                <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-50 transition-colors text-sm">
                  一括エクスポート
                </button>
              </div>
            </div>
          </div>

          {/* Invoice Table */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">請求一覧</h2>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-gray-100 bg-gray-50 text-xs font-bold text-gray-700 uppercase">
              <div className="col-span-3">利用者名</div>
              <div className="col-span-2">訪問回数</div>
              <div className="col-span-2">保険請求</div>
              <div className="col-span-2">自己負担</div>
              <div className="col-span-2">合計</div>
              <div className="col-span-1">状態</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-100">
              {invoiceData.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-blue-50/30 transition-colors cursor-pointer"
                >
                  <div className="col-span-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {item.user[0]}
                    </div>
                    <span className="font-semibold text-gray-900">{item.user}</span>
                  </div>
                  <div className="col-span-2 flex items-center text-gray-700">
                    {item.visits}回
                  </div>
                  <div className="col-span-2 flex items-center text-gray-900 font-medium">
                    ¥{item.insurance.toLocaleString()}
                  </div>
                  <div className="col-span-2 flex items-center text-gray-900 font-medium">
                    ¥{item.copay.toLocaleString()}
                  </div>
                  <div className="col-span-2 flex items-center text-[#0078D7] font-bold">
                    ¥{item.subtotal.toLocaleString()}
                  </div>
                  <div className="col-span-1 flex items-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      item.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.status === 'paid' ? '入金済' : '未入金'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Table Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-gray-700">合計</span>
                <div className="flex gap-8">
                  <div className="text-right">
                    <div className="text-xs text-gray-600">保険請求</div>
                    <div className="text-lg font-bold text-gray-900">
                      ¥{stats.insurancePortion.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-600">自己負担</div>
                    <div className="text-lg font-bold text-gray-900">
                      ¥{stats.copayPortion.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-600">総額</div>
                    <div className="text-lg font-bold text-[#0078D7]">
                      ¥{stats.totalRevenue.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Actions */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">クイックアクション</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-3 bg-blue-50 text-blue-700 rounded-xl font-bold hover:bg-blue-100 transition-colors text-sm text-left flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                請求書発行
              </button>
              <button className="w-full px-4 py-3 bg-green-50 text-green-700 rounded-xl font-bold hover:bg-green-100 transition-colors text-sm text-left flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                入金記録
              </button>
              <button className="w-full px-4 py-3 bg-purple-50 text-purple-700 rounded-xl font-bold hover:bg-purple-100 transition-colors text-sm text-left flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                月次レポート
              </button>
            </div>
          </div>

          {/* Payment Status */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">入金状況</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">入金済み</span>
                <span className="text-lg font-bold text-green-600">{stats.paidCount}件</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${(stats.paidCount / (stats.paidCount + stats.pendingCount)) * 100}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">未入金: {stats.pendingCount}件</span>
                <span className="text-gray-600">
                  {Math.round((stats.paidCount / (stats.paidCount + stats.pendingCount)) * 100)}%
                </span>
              </div>
            </div>
          </div>

          {/* Export Options */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">エクスポート形式</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-red-50 text-red-700 rounded-xl font-bold hover:bg-red-100 transition-colors text-sm text-left flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                PDF請求書
              </button>
              <button className="w-full px-4 py-2 bg-green-50 text-green-700 rounded-xl font-bold hover:bg-green-100 transition-colors text-sm text-left flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                CSVデータ
              </button>
              <button className="w-full px-4 py-2 bg-blue-50 text-blue-700 rounded-xl font-bold hover:bg-blue-100 transition-colors text-sm text-left flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                レセプトデータ
              </button>
            </div>
          </div>

          {/* Monthly Trend */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
            <h3 className="text-sm font-bold text-blue-900 mb-3">月次推移</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-blue-800">前月比</span>
                <span className="text-blue-900 font-bold">+8.5%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-blue-800">年間累計</span>
                <span className="text-blue-900 font-bold">¥1,735,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}