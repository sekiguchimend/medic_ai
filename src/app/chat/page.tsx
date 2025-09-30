'use client';

import { useState } from 'react';

export default function Chat() {
  const [selectedRoom, setSelectedRoom] = useState<string>('佐藤花子');

  const rooms = [
    { name: '佐藤花子', lastMessage: '次回訪問時の注意点を確認', time: '10分前', unread: 2, type: 'user' },
    { name: 'チームA', lastMessage: '今日のミーティングは15時から', time: '30分前', unread: 0, type: 'team' },
    { name: '田中太郎', lastMessage: '血圧の記録を更新しました', time: '1時間前', unread: 1, type: 'user' },
    { name: '緊急対応チーム', lastMessage: '対応完了しました', time: '2時間前', unread: 0, type: 'team' },
  ];

  const messages = [
    { sender: '山田看護師', content: '佐藤花子さんの次回訪問は明日の10時です', time: '10:30', own: false },
    { sender: 'あなた', content: '了解しました。前回の血糖値の推移を確認したいです', time: '10:32', own: true },
    { sender: '鈴木看護師', content: '前回は空腹時128でした。添付ファイルで詳細をご確認ください', time: '10:35', own: false },
    { sender: 'あなた', content: 'ありがとうございます。インスリンの量は変更なしで良さそうですね', time: '10:40', own: true },
  ];

  return (
    <div className="fixed top-[80px] left-60 right-0 bottom-0 bg-[#fff] font-[family-name:var(--font-noto-sans-jp)]">
      <div className="h-full bg-white overflow-hidden">
        <div className="grid grid-cols-4 h-full">
          {/* Left Sidebar - Room List */}
          <div className="col-span-1 border-r border-gray-200 flex flex-col">
            {/* Search */}
            <div className="p-4 border-b border-gray-200">
              <input
                type="search"
                placeholder="チャットを検索..."
                className="w-full px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#0078D7]"
              />
            </div>

            {/* Room List */}
            <div className="flex-1 overflow-y-auto">
              {rooms.map((room, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedRoom(room.name)}
                  className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${
                    selectedRoom === room.name ? 'bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                      room.type === 'user' ? 'bg-gradient-to-br from-blue-400 to-blue-600' : 'bg-gradient-to-br from-green-400 to-green-600'
                    }`}>
                      {room.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-bold text-[#323232] text-sm truncate">{room.name}</div>
                        {room.unread > 0 && (
                          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                            {room.unread}
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-gray-600 truncate">{room.lastMessage}</div>
                      <div className="text-xs text-gray-400 mt-1">{room.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* New Chat Button */}
            <div className="p-4 border-t border-gray-200">
              <button className="w-full px-4 py-2 bg-[#0078D7] text-white rounded-full font-bold hover:bg-[#005A9E] transition-colors text-sm">
                + 新規チャット
              </button>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="col-span-3 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {selectedRoom[0]}
                </div>
                <div>
                  <div className="font-bold text-[#323232]">{selectedRoom}</div>
                  <div className="text-xs text-gray-600">ケース共有ルーム</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.own ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] ${msg.own ? 'order-2' : 'order-1'}`}>
                    {!msg.own && (
                      <div className="text-xs text-gray-600 mb-1 ml-1">{msg.sender}</div>
                    )}
                    <div className={`p-4 rounded-2xl ${
                      msg.own ? 'bg-[#0078D7] text-white rounded-tr-sm' : 'bg-gray-100 text-[#323232] rounded-tl-sm'
                    }`}>
                      <div className="text-sm">{msg.content}</div>
                    </div>
                    <div className={`text-xs text-gray-500 mt-1 ${msg.own ? 'text-right mr-1' : 'ml-1'}`}>
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))}

              {/* AI Suggestion */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-purple-900 mb-1">AIサジェスト</div>
                    <div className="text-sm text-purple-800">
                      過去の記録から、佐藤花子さんの前回血糖値は空腹時128mg/dL、食後2時間値は178mg/dLでした。
                      <button className="text-purple-600 underline ml-1">詳細を表示</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="メッセージを入力..."
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#0078D7]"
                />
                <button className="w-10 h-10 bg-[#0078D7] rounded-full hover:bg-[#005A9E] flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}