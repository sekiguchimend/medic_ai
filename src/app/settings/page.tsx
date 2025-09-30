'use client';

import { useState } from 'react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('users');

  const users = [
    { name: '山田太郎', email: 'yamada@example.com', role: '管理者', status: 'active' },
    { name: '佐藤花子', email: 'sato@example.com', role: '看護師', status: 'active' },
    { name: '鈴木次郎', email: 'suzuki@example.com', role: '理学療法士', status: 'active' },
    { name: '田中三郎', email: 'tanaka@example.com', role: '看護師', status: 'inactive' },
  ];

  const apiConnections = [
    { name: 'ノウビー連携', status: 'connected', lastSync: '2024-09-30 10:00' },
    { name: 'Googleカレンダー', status: 'connected', lastSync: '2024-09-30 09:30' },
    { name: 'レセコン連携', status: 'disconnected', lastSync: '-' },
  ];

  return (
    <div className="min-h-screen bg-[#fff] font-[family-name:var(--font-noto-sans-jp)] p-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">設定・管理者メニュー</h1>
        <p className="text-gray-600">システム設定とユーザー管理</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg border border-gray-200 mb-6">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('users')}
            className={`px-6 py-4 font-bold text-sm transition-colors ${
              activeTab === 'users'
                ? 'text-[#0078D7] border-b-2 border-[#0078D7]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            ユーザー管理
          </button>
          <button
            onClick={() => setActiveTab('import')}
            className={`px-6 py-4 font-bold text-sm transition-colors ${
              activeTab === 'import'
                ? 'text-[#0078D7] border-b-2 border-[#0078D7]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            データ管理
          </button>
          <button
            onClick={() => setActiveTab('api')}
            className={`px-6 py-4 font-bold text-sm transition-colors ${
              activeTab === 'api'
                ? 'text-[#0078D7] border-b-2 border-[#0078D7]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            API連携
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-6 py-4 font-bold text-sm transition-colors ${
              activeTab === 'security'
                ? 'text-[#0078D7] border-b-2 border-[#0078D7]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            セキュリティ
          </button>
        </div>
      </div>

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">スタッフ一覧</h2>
              <button className="px-4 py-2 bg-[#0078D7] text-white rounded-full font-bold hover:bg-[#005A9E] transition-colors text-sm">
                + 新規ユーザー追加
              </button>
            </div>

            <div className="divide-y divide-gray-100">
              {users.map((user, idx) => (
                <div key={idx} className="p-6 hover:bg-blue-50/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {user.name[0]}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-600">{user.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right mr-4">
                        <div className="text-sm font-medium text-gray-700">{user.role}</div>
                        <div className={`text-xs mt-1 ${
                          user.status === 'active' ? 'text-green-600' : 'text-gray-400'
                        }`}>
                          {user.status === 'active' ? 'アクティブ' : '無効'}
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-bold hover:bg-gray-200 transition-colors text-sm">
                        編集
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Role Management */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">権限管理</h3>
            <div className="grid grid-cols-3 gap-4">
              {['管理者', '看護師', '理学療法士'].map((role, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="font-bold text-gray-900 mb-2">{role}</div>
                  <div className="text-sm text-gray-600">
                    {role === '管理者' && 'すべての機能にアクセス可能'}
                    {role === '看護師' && '記録・計画・スケジュール管理'}
                    {role === '理学療法士' && '記録・スケジュール閲覧'}
                  </div>
                  <button className="mt-3 text-sm text-[#0078D7] font-bold hover:underline">
                    権限を編集
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Import/Export Tab */}
      {activeTab === 'import' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">データインポート</h2>
            <p className="text-sm text-gray-600 mb-4">
              利用者情報をCSV形式で一括インポートできます
            </p>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#0078D7] transition-colors cursor-pointer">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <div className="text-sm font-medium text-gray-700 mb-1">
                クリックしてファイルを選択
              </div>
              <div className="text-xs text-gray-500">
                または、ドラッグ&ドロップ
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="px-4 py-2 bg-[#0078D7] text-white rounded-full font-bold hover:bg-[#005A9E] transition-colors text-sm">
                インポート実行
              </button>
              <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-50 transition-colors text-sm">
                テンプレートをダウンロード
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">データエクスポート</h2>
            <p className="text-sm text-gray-600 mb-4">
              利用者情報や記録データをエクスポートできます
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <div className="font-bold text-gray-900">利用者情報</div>
                  <div className="text-sm text-gray-600">全利用者の基本情報</div>
                </div>
                <button className="px-4 py-2 bg-green-50 text-green-700 rounded-full font-bold hover:bg-green-100 transition-colors text-sm">
                  エクスポート
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <div className="font-bold text-gray-900">訪問記録</div>
                  <div className="text-sm text-gray-600">期間を指定してエクスポート</div>
                </div>
                <button className="px-4 py-2 bg-green-50 text-green-700 rounded-full font-bold hover:bg-green-100 transition-colors text-sm">
                  エクスポート
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <div className="font-bold text-gray-900">看護計画</div>
                  <div className="text-sm text-gray-600">全利用者の看護計画</div>
                </div>
                <button className="px-4 py-2 bg-green-50 text-green-700 rounded-full font-bold hover:bg-green-100 transition-colors text-sm">
                  エクスポート
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* API Tab */}
      {activeTab === 'api' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">外部サービス連携</h2>
            <div className="space-y-3">
              {apiConnections.map((api, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${
                      api.status === 'connected' ? 'bg-green-500' : 'bg-gray-400'
                    }`}></div>
                    <div>
                      <div className="font-bold text-gray-900">{api.name}</div>
                      <div className="text-sm text-gray-600">
                        最終同期: {api.lastSync}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {api.status === 'connected' ? (
                      <>
                        <button className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold hover:bg-blue-100 transition-colors text-sm">
                          同期
                        </button>
                        <button className="px-4 py-2 bg-red-50 text-red-700 rounded-full font-bold hover:bg-red-100 transition-colors text-sm">
                          切断
                        </button>
                      </>
                    ) : (
                      <button className="px-4 py-2 bg-green-50 text-green-700 rounded-full font-bold hover:bg-green-100 transition-colors text-sm">
                        接続
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <div>
                <div className="font-bold text-blue-900 mb-1">API連携について</div>
                <div className="text-sm text-blue-800">
                  外部サービスとの連携により、データの自動同期や機能拡張が可能です。セキュリティ設定を確認の上、ご利用ください。
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">セキュリティ設定</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <div className="font-bold text-gray-900">2段階認証</div>
                  <div className="text-sm text-gray-600">ログイン時の追加認証</div>
                </div>
                <div className="w-12 h-6 bg-[#0078D7] rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <div className="font-bold text-gray-900">自動ログアウト</div>
                  <div className="text-sm text-gray-600">30分間操作がない場合</div>
                </div>
                <div className="w-12 h-6 bg-[#0078D7] rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <div className="font-bold text-gray-900">アクセスログ記録</div>
                  <div className="text-sm text-gray-600">すべてのアクセスを記録</div>
                </div>
                <div className="w-12 h-6 bg-[#0078D7] rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">アクセスログ</h2>
            <div className="space-y-2">
              {[
                { user: '山田太郎', action: 'ログイン', time: '2024-09-30 10:30', ip: '192.168.1.1' },
                { user: '佐藤花子', action: '記録編集', time: '2024-09-30 10:15', ip: '192.168.1.2' },
                { user: '鈴木次郎', action: 'ログイン', time: '2024-09-30 09:45', ip: '192.168.1.3' },
              ].map((log, idx) => (
                <div key={idx} className="p-3 bg-gray-50 rounded-lg text-sm">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-gray-900">{log.user} - {log.action}</div>
                    <div className="text-gray-500">{log.time}</div>
                  </div>
                  <div className="text-gray-600 text-xs mt-1">IP: {log.ip}</div>
                </div>
              ))}
            </div>
            <button className="mt-4 text-sm text-[#0078D7] font-bold hover:underline">
              すべてのログを表示
            </button>
          </div>
        </div>
      )}
    </div>
  );
}