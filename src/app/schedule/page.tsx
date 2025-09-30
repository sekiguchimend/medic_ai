'use client';

import { useState } from 'react';

export default function Schedule() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 8, 30)); // Sept 30, 2024

  const schedule = [
    { id: 1, time: '09:00', user: '佐藤花子', address: '東京都渋谷区1-2-3', duration: '60分', status: 'scheduled' },
    { id: 2, time: '10:30', user: '田中太郎', address: '東京都新宿区4-5-6', duration: '45分', status: 'scheduled' },
    { id: 3, time: '12:00', user: '山田良子', address: '東京都目黒区7-8-9', duration: '60分', status: 'completed' },
    { id: 4, time: '14:00', user: '鈴木一郎', address: '東京都品川区10-11-12', duration: '45分', status: 'scheduled' },
    { id: 5, time: '15:30', user: '伊藤美咲', address: '東京都港区13-14-15', duration: '60分', status: 'scheduled' },
  ];

  const staff = [
    { name: '山田太郎', role: '看護師', visits: 5 },
    { name: '佐藤花子', role: '看護師', visits: 4 },
    { name: '鈴木次郎', role: '理学療法士', visits: 3 },
  ];

  return (
    <div className="min-h-screen bg-[#fff] font-[family-name:var(--font-noto-sans-jp)] p-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">スケジュール管理</h1>
        <p className="text-gray-600">訪問予定とスタッフのスケジュールを管理できます</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Schedule */}
        <div className="col-span-2 space-y-6">
          {/* Calendar Header */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h2 className="text-2xl font-bold text-gray-900">2024年9月30日</h2>
                <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-[#0078D7] text-white rounded-full font-bold hover:bg-[#005A9E] transition-colors text-sm">
                  + 訪問追加
                </button>
                <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-50 transition-colors text-sm">
                  ルート最適化
                </button>
              </div>
            </div>

            {/* Mini Calendar */}
            <div className="grid grid-cols-7 gap-2">
              {['日', '月', '火', '水', '木', '金', '土'].map((day, idx) => (
                <div key={idx} className="text-center text-xs font-bold text-gray-500 py-2">
                  {day}
                </div>
              ))}
              {Array.from({ length: 35 }, (_, i) => {
                const day = i - 3;
                const isToday = day === 30;
                const isCurrentMonth = day > 0 && day <= 30;
                return (
                  <div
                    key={i}
                    className={`text-center py-2 text-sm rounded-lg cursor-pointer transition-colors ${
                      isToday ? 'bg-[#0078D7] text-white font-bold' :
                      isCurrentMonth ? 'hover:bg-gray-100 text-gray-700' :
                      'text-gray-300'
                    }`}
                  >
                    {isCurrentMonth ? day : ''}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">本日の訪問予定</h3>
            <div className="space-y-3">
              {schedule.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${
                    item.status === 'completed'
                      ? 'bg-green-50 border-green-200'
                      : 'bg-blue-50 border-blue-200 hover:bg-blue-100'
                  }`}
                >
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                      item.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                    } text-white`}>
                      {item.time.split(':')[0]}
                      <span className="text-xs">:{item.time.split(':')[1]}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">{item.user}</div>
                    <div className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      {item.address}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="text-sm font-medium text-gray-700">{item.duration}</div>
                  </div>
                  <div className="flex-shrink-0">
                    {item.status === 'completed' ? (
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ) : (
                      <button className="px-4 py-2 bg-white border border-blue-300 text-blue-700 rounded-full text-xs font-bold hover:bg-blue-50 transition-colors">
                        開始
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">訪問ルート（Googleマップ連動）</h3>
              <button className="text-sm text-[#0078D7] font-bold hover:underline">
                マップで開く →
              </button>
            </div>
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p className="text-gray-500 text-sm">地図を表示</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Staff */}
        <div className="space-y-6">
          {/* Stats */}
          <div className="bg-gradient-to-br from-[#0078D7] to-[#005A9E] rounded-lg p-6 text-white">
            <div className="text-sm font-medium mb-2 opacity-90">本日の訪問数</div>
            <div className="text-4xl font-bold mb-1">5</div>
            <div className="text-sm opacity-80">総移動時間: 約2時間</div>
          </div>

          {/* Staff List */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">スタッフ配置</h3>
            <div className="space-y-3">
              {staff.map((person, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {person.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{person.name}</div>
                      <div className="text-xs text-gray-600">{person.role}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-[#0078D7]">{person.visits}</div>
                    <div className="text-xs text-gray-500">件</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">クイックアクション</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-3 bg-blue-50 text-blue-700 rounded-xl font-bold hover:bg-blue-100 transition-colors text-sm text-left flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                訪問を追加
              </button>
              <button className="w-full px-4 py-3 bg-green-50 text-green-700 rounded-xl font-bold hover:bg-green-100 transition-colors text-sm text-left flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                シフト調整
              </button>
              <button className="w-full px-4 py-3 bg-purple-50 text-purple-700 rounded-xl font-bold hover:bg-purple-100 transition-colors text-sm text-left flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                月次レポート
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}