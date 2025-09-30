'use client';

import { useState } from 'react';

export default function RecordsPage() {
  const [selectedTab, setSelectedTab] = useState('records');
  const [selectedRecord, setSelectedRecord] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  const records = [
    { id: 1, name: '佐藤花子', age: 78, date: '2024-09-30 14:30', status: 'draft', category: '訪問看護', content: 'バイタルサイン測定、服薬確認、体調確認を実施。血圧138/82、脈拍78、体温36.5℃。' },
    { id: 2, name: '田中太郎', age: 82, date: '2024-09-30 10:15', status: 'completed', category: '訪問看護', content: '血糖値測定、インスリン投与、食事指導を実施。' },
    { id: 3, name: '山田良子', age: 75, date: '2024-09-29 16:45', status: 'completed', category: '訪問看護', content: '褥瘡処置、ポジショニング指導を実施。' },
    { id: 4, name: '鈴木一郎', age: 80, date: '2024-09-29 09:30', status: 'completed', category: '訪問看護', content: '呼吸リハビリテーション、SpO2測定を実施。' },
    { id: 5, name: '伊藤美咲', age: 68, date: '2024-09-28 15:20', status: 'completed', category: '訪問看護', content: 'リハビリテーション、関節可動域訓練を実施。' },
  ];

  const reports = [
    { type: '訪問看護報告書', period: '2024年9月', users: 15, status: 'generated', date: '2024-09-30' },
    { type: '訪問看護計画書', period: '2024年9月', users: 15, status: 'generated', date: '2024-09-30' },
    { type: '訪問看護記録書Ⅱ', period: '2024年9月', users: 8, status: 'pending', date: '-' },
    { type: '精神科訪問看護記録書', period: '2024年9月', users: 3, status: 'pending', date: '-' },
    { type: '訪問看護療養費明細書', period: '2024年9月', users: 15, status: 'generated', date: '2024-09-29' },
  ];

  return (
    <div className="min-h-screen bg-[#fff] font-[family-name:var(--font-noto-sans-jp)] p-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">記録・報告</h1>
        <p className="text-gray-600">音声入力から自動記録化、報告書の生成まで</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">本日の記録</span>
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">8</div>
          <div className="text-xs text-gray-500 mt-1">件</div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">完了</span>
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">7</div>
          <div className="text-xs text-gray-500 mt-1">件</div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">作成中</span>
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">1</div>
          <div className="text-xs text-gray-500 mt-1">件</div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">報告書</span>
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">5</div>
          <div className="text-xs text-gray-500 mt-1">種類</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Voice Input & Records */}
        <div className="col-span-2 space-y-6">
          {/* Voice Input Card */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">音声入力</h2>
                <p className="text-sm text-gray-600">音声で記録を入力すると自動的に文字化されます</p>
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
            </div>

            <div className="flex items-center justify-center py-8">
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                  isRecording ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  isRecording ? 'bg-gray-800' : 'bg-white border-2 border-gray-200'
                }`}>
                  {isRecording ? (
                    <div className="w-6 h-6 bg-white rounded"></div>
                  ) : (
                    <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                    </svg>
                  )}
                </div>
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-700 font-medium">
                {isRecording ? '録音中... タップで停止' : 'タップして録音開始'}
              </p>
              {isRecording && (
                <div className="mt-4 p-3 bg-gray-100 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-700">「本日、佐藤花子様を訪問。バイタルサイン測定を実施...」</p>
                </div>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setSelectedTab('records')}
                className={`flex-1 px-6 py-4 font-bold text-sm transition-colors ${
                  selectedTab === 'records'
                    ? 'text-[#0078D7] border-b-2 border-[#0078D7]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                看護記録
              </button>
              <button
                onClick={() => setSelectedTab('reports')}
                className={`flex-1 px-6 py-4 font-bold text-sm transition-colors ${
                  selectedTab === 'reports'
                    ? 'text-[#0078D7] border-b-2 border-[#0078D7]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                報告書
              </button>
              <button
                onClick={() => setSelectedTab('check')}
                className={`flex-1 px-6 py-4 font-bold text-sm transition-colors ${
                  selectedTab === 'check'
                    ? 'text-[#0078D7] border-b-2 border-[#0078D7]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                チェック機能
              </button>
            </div>

            {/* Records Tab */}
            {selectedTab === 'records' && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <select className="px-3 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#0078D7]">
                      <option>すべて</option>
                      <option>作成中</option>
                      <option>完了</option>
                    </select>
                    <input
                      type="search"
                      placeholder="利用者を検索..."
                      className="px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#0078D7] w-64"
                    />
                  </div>
                  <button className="px-4 py-2 bg-[#0078D7] text-white rounded-full font-bold hover:bg-[#005A9E] transition-colors text-sm">
                    + 新規作成
                  </button>
                </div>

                <div className="space-y-3">
                  {records.map((record) => (
                    <div
                      key={record.id}
                      className="p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer border border-gray-200"
                      onClick={() => setSelectedRecord(record.name)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                            {record.name[0]}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">{record.name}</div>
                            <div className="text-sm text-gray-600">{record.age}歳 · {record.category}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block ${
                            record.status === 'draft' ? 'bg-gray-200 text-gray-700' : 'bg-gray-900 text-white'
                          }`}>
                            {record.status === 'draft' ? '作成中' : '完了'}
                          </div>
                          <div className="text-xs text-gray-500">{record.date}</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-700 line-clamp-2 ml-15">
                        {record.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reports Tab */}
            {selectedTab === 'reports' && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-gray-600">様式ごとに自動生成された報告書</p>
                  <button className="px-4 py-2 bg-[#0078D7] text-white rounded-full font-bold hover:bg-[#005A9E] transition-colors text-sm">
                    一括生成
                  </button>
                </div>

                <div className="space-y-3">
                  {reports.map((report, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer border border-gray-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                            </svg>
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">{report.type}</div>
                            <div className="text-sm text-gray-600">{report.period} · {report.users}名分</div>
                            {report.status === 'generated' && (
                              <div className="text-xs text-gray-500 mt-1">生成日: {report.date}</div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            report.status === 'generated' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {report.status === 'generated' ? '生成済み' : '未生成'}
                          </span>
                          {report.status === 'generated' && (
                            <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-bold hover:bg-gray-300 transition-colors">
                              ダウンロード
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Check Tab */}
            {selectedTab === 'check' && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-gray-600">記録の品質チェックと改善提案</p>
                  <button className="px-4 py-2 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-colors text-sm">
                    チェック実行
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-gray-600 uppercase">記載漏れ</span>
                      <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">3</div>
                    <div className="text-xs text-gray-600 font-medium">要確認</div>
                  </div>

                  <div className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-gray-600 uppercase">誤字・脱字</span>
                      <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">5</div>
                    <div className="text-xs text-gray-600 font-medium">修正推奨</div>
                  </div>

                  <div className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-gray-600 uppercase">記載不足</span>
                      <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11 15h2v2h-2zm0-8h2v6h-2zm1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">2</div>
                    <div className="text-xs text-gray-600 font-medium">追記推奨</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-white border border-gray-300 rounded-xl shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 mb-1">佐藤花子 - バイタルサイン記録</div>
                        <div className="text-sm text-gray-600">体温の記載がありません。必須項目です。</div>
                      </div>
                      <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-bold hover:bg-gray-300 transition-colors">
                        修正
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-gray-300 rounded-xl shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 mb-1">田中太郎 - 看護記録</div>
                        <div className="text-sm text-gray-600">「測定」が「側定」になっています。</div>
                      </div>
                      <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-bold hover:bg-gray-300 transition-colors">
                        確認
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-gray-900 mb-1">自動チェック機能が有効です</div>
                      <div className="text-sm text-gray-600">記録保存時に自動的にチェックが実行され、問題があれば通知されます</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Quick Actions */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">最近の活動</h3>
            <div className="space-y-3">
              {[
                { user: '山田看護師', action: '記録を作成', time: '10分前', icon: '📝' },
                { user: '佐藤看護師', action: '報告書を生成', time: '30分前', icon: '📄' },
                { user: 'システム', action: '自動チェック完了', time: '1時間前', icon: '✅' },
              ].map((activity, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="text-2xl">{activity.icon}</div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-900">{activity.user}</div>
                    <div className="text-xs text-gray-600">{activity.action}</div>
                  </div>
                  <div className="text-xs text-gray-500">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Templates */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">記録テンプレート</h3>
            <div className="space-y-2">
              {['訪問看護記録', 'バイタル測定', '服薬管理', '褥瘡処置', 'リハビリ記録'].map((template, idx) => (
                <button
                  key={idx}
                  className="w-full px-4 py-3 bg-gray-50 text-gray-700 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm text-left border border-gray-200"
                >
                  {template}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-900 mb-4">今月の統計</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">総記録数</span>
                <span className="text-lg font-bold text-gray-900">245</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">音声入力</span>
                <span className="text-lg font-bold text-gray-900">187</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">報告書生成</span>
                <span className="text-lg font-bold text-gray-900">42</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8" onClick={() => setSelectedRecord(null)}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="bg-[#0078D7] px-8 py-6 text-white flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{selectedRecord}の看護記録</h2>
                <p className="text-sm text-white/80 mt-1">2024-09-30 14:30</p>
              </div>
              <button
                onClick={() => setSelectedRecord(null)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8 overflow-y-auto max-h-[calc(80vh-120px)]">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">バイタルサイン</h3>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="text-xs text-gray-600 mb-1">血圧</div>
                      <div className="text-lg font-bold text-gray-900">138/82</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="text-xs text-gray-600 mb-1">脈拍</div>
                      <div className="text-lg font-bold text-gray-900">78 bpm</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="text-xs text-gray-600 mb-1">体温</div>
                      <div className="text-lg font-bold text-gray-900">36.5°C</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="text-xs text-gray-600 mb-1">SpO2</div>
                      <div className="text-lg font-bold text-gray-900">97%</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">実施内容</h3>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-gray-800">バイタルサイン測定、服薬確認、体調確認を実施。血圧138/82、脈拍78、体温36.5℃。特に異常なし。</p>
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