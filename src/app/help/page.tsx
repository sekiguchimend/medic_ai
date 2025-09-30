'use client';

import { useState } from 'react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    { question: '利用者情報の登録方法は？', category: '利用者管理', answer: '利用者管理ページから「+ 新規利用者追加」をクリックし、必要情報を入力してください。' },
    { question: '訪問記録の音声入力はどう使う？', category: '記録・報告', answer: '記録ページで音声入力ボタンをクリックし、マイクに向かって話すだけで自動で記録が作成されます。' },
    { question: 'スケジュールのルート最適化とは？', category: 'スケジュール', answer: '訪問先の住所をもとに、最短ルートを自動計算し、効率的な訪問順序を提案します。' },
    { question: 'AIリスク予測の精度は？', category: '医療データ', answer: '過去のバイタルデータと疾患情報から、統計的手法で健康リスクを予測します。' },
    { question: '公費期限アラートの設定方法は？', category: '加算・制度', answer: '設定ページで通知設定を有効にすると、期限の30日前からアラートが表示されます。' },
  ];

  const manuals = [
    { title: '基本操作ガイド', description: 'システムの基本的な使い方を説明します', icon: '📘' },
    { title: '利用者管理マニュアル', description: '利用者情報の登録・編集方法', icon: '👥' },
    { title: '記録作成マニュアル', description: '訪問記録の作成と報告書生成', icon: '📝' },
    { title: '看護計画マニュアル', description: '看護計画の作成と更新方法', icon: '📋' },
    { title: 'スケジュール管理マニュアル', description: '訪問予定の管理とルート最適化', icon: '📅' },
    { title: 'API連携マニュアル', description: '外部サービスとの連携設定', icon: '🔗' },
  ];

  return (
    <div className="min-h-screen bg-[#fff] font-[family-name:var(--font-noto-sans-jp)] p-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">ヘルプ・サポート</h1>
        <p className="text-gray-600">操作マニュアルとよくある質問</p>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="search"
            placeholder="ヘルプを検索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 text-lg focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Quick Links */}
        <div className="col-span-1 space-y-6">
          {/* Contact Support */}
          <div className="bg-gradient-to-br from-[#0078D7] to-[#005A9E] rounded-lg p-6 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">チャットサポート</h3>
            <p className="text-sm text-white/80 mb-4">
              平日 9:00-18:00<br />
              お困りのことがあればお気軽にご相談ください
            </p>
            <button className="w-full px-4 py-2 bg-white text-[#0078D7] rounded-full font-bold hover:bg-white/90 transition-colors text-sm">
              チャットを開始
            </button>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">クイックリンク</h3>
            <div className="space-y-2">
              <a href="#" className="block p-3 bg-blue-50 text-blue-700 rounded-xl font-bold hover:bg-blue-100 transition-colors text-sm">
                初めての方へ
              </a>
              <a href="#" className="block p-3 bg-green-50 text-green-700 rounded-xl font-bold hover:bg-green-100 transition-colors text-sm">
                動画チュートリアル
              </a>
              <a href="#" className="block p-3 bg-purple-50 text-purple-700 rounded-xl font-bold hover:bg-purple-100 transition-colors text-sm">
                リリースノート
              </a>
              <a href="#" className="block p-3 bg-orange-50 text-orange-700 rounded-xl font-bold hover:bg-orange-100 transition-colors text-sm">
                フィードバック送信
              </a>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">システム状況</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Webサービス</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">正常</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">API連携</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">正常</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">データベース</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">正常</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Main Content */}
        <div className="col-span-2 space-y-6">
          {/* Manuals */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">操作マニュアル</h2>
            <div className="grid grid-cols-2 gap-4">
              {manuals.map((manual, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer"
                >
                  <div className="text-3xl mb-2">{manual.icon}</div>
                  <div className="font-bold text-gray-900 mb-1">{manual.title}</div>
                  <div className="text-sm text-gray-600">{manual.description}</div>
                  <div className="mt-3 text-sm text-[#0078D7] font-bold">
                    マニュアルを見る →
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">よくある質問（FAQ）</h2>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#0078D7] rounded-full flex items-center justify-center text-white text-xs font-bold">
                      Q
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 mb-1">{faq.question}</div>
                      <div className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                        {faq.category}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mt-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      A
                    </div>
                    <div className="flex-1 text-sm text-gray-700">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 text-sm text-[#0078D7] font-bold hover:underline">
              すべてのFAQを表示
            </button>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-3">お問い合わせ先</h3>
            <div className="space-y-2 text-sm text-blue-800">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>support@medicsaas.example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>03-1234-5678 (平日 9:00-18:00)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}