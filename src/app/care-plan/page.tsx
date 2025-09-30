'use client';

import { useState } from 'react';

export default function CarePlan() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const carePlans = [
    { id: 1, name: '佐藤花子', age: 78, condition: '糖尿病・高血圧', priority: 'high', lastUpdate: '2024-09-28' },
    { id: 2, name: '田中太郎', age: 82, condition: '心不全', priority: 'high', lastUpdate: '2024-09-27' },
    { id: 3, name: '山田良子', age: 75, condition: '認知症', priority: 'medium', lastUpdate: '2024-09-25' },
    { id: 4, name: '鈴木一郎', age: 80, condition: 'COPD', priority: 'medium', lastUpdate: '2024-09-24' },
    { id: 5, name: '伊藤美咲', age: 68, condition: '脳梗塞後遺症', priority: 'low', lastUpdate: '2024-09-20' },
  ];

  return (
    <div className="min-h-screen bg-[#fff] font-[family-name:var(--font-noto-sans-jp)] p-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">看護計画</h1>
        <p className="text-gray-600">利用者ごとの看護計画を管理・作成できます</p>
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-[#0078D7] text-white rounded-full font-bold hover:bg-[#005A9E] transition-colors">
            + 新規計画作成
          </button>
          <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-50 transition-colors">
            AI提案を受ける
          </button>
        </div>
        <div className="flex gap-3">
          <select className="px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#0078D7]">
            <option>すべての優先度</option>
            <option>高</option>
            <option>中</option>
            <option>低</option>
          </select>
          <input
            type="search"
            placeholder="利用者を検索..."
            className="px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#0078D7] w-64"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 border border-red-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-red-900">高優先度</span>
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-red-900">2</div>
          <div className="text-xs text-red-700 mt-1">計画</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 border border-yellow-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-yellow-900">中優先度</span>
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-yellow-900">2</div>
          <div className="text-xs text-yellow-700 mt-1">計画</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-green-900">低優先度</span>
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-green-900">1</div>
          <div className="text-xs text-green-700 mt-1">計画</div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-900">今月更新</span>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-blue-900">5</div>
          <div className="text-xs text-blue-700 mt-1">計画</div>
        </div>
      </div>

      {/* Care Plans List */}
      <div className="bg-white rounded-lg border border-gray-200">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-100 bg-gray-50 rounded-t-lg">
          <div className="col-span-3 text-xs font-bold text-gray-700 uppercase">利用者名</div>
          <div className="col-span-2 text-xs font-bold text-gray-700 uppercase">年齢</div>
          <div className="col-span-3 text-xs font-bold text-gray-700 uppercase">主な疾患</div>
          <div className="col-span-2 text-xs font-bold text-gray-700 uppercase">優先度</div>
          <div className="col-span-2 text-xs font-bold text-gray-700 uppercase">最終更新</div>
        </div>

        {/* Table Rows */}
        {carePlans.map((plan) => (
          <div
            key={plan.id}
            className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-50 hover:bg-blue-50/30 transition-colors cursor-pointer"
            onClick={() => setSelectedUser(plan.name)}
          >
            <div className="col-span-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {plan.name[0]}
              </div>
              <span className="font-semibold text-gray-900">{plan.name}</span>
            </div>
            <div className="col-span-2 flex items-center text-gray-700">
              {plan.age}歳
            </div>
            <div className="col-span-3 flex items-center text-gray-700">
              {plan.condition}
            </div>
            <div className="col-span-2 flex items-center">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                plan.priority === 'high' ? 'bg-red-100 text-red-700' :
                plan.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                'bg-green-100 text-green-700'
              }`}>
                {plan.priority === 'high' ? '高' : plan.priority === 'medium' ? '中' : '低'}
              </span>
            </div>
            <div className="col-span-2 flex items-center text-sm text-gray-600">
              {plan.lastUpdate}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8" onClick={() => setSelectedUser(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="bg-[#0078D7] px-8 py-6 text-white flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{selectedUser}の看護計画</h2>
                <p className="text-sm text-white/80 mt-1">最終更新: 2024-09-28</p>
              </div>
              <button
                onClick={() => setSelectedUser(null)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(80vh-120px)]">
              <div className="space-y-6">
                {/* Goals */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">看護目標</h3>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <p className="text-gray-800">血糖値の安定化と低血糖発作の予防</p>
                  </div>
                </div>

                {/* Problems */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">看護課題</h3>
                  <div className="space-y-2">
                    {['血糖コントロール不良', '食事療法の理解不足', '低血糖リスク'].map((problem, idx) => (
                      <div key={idx} className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                        <p className="text-gray-800">• {problem}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interventions */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">介入内容</h3>
                  <div className="space-y-2">
                    {[
                      '毎日の血糖測定と記録',
                      '食事内容の確認と指導',
                      '低血糖時の対応方法の確認',
                      '服薬管理の支援'
                    ].map((intervention, idx) => (
                      <div key={idx} className="bg-green-50 rounded-xl p-4 border border-green-200 flex items-center gap-3">
                        <input type="checkbox" className="w-5 h-5 text-green-600" />
                        <p className="text-gray-800">{intervention}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}