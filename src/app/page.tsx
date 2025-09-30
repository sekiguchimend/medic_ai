'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const folderData: Record<string, any> = {
    '重要記録': {
      title: '重要記録',
      files: [
        { name: '佐藤花子_緊急連絡先.pdf', date: '2024-09-28', size: '1.2 MB' },
        { name: '田中太郎_医療同意書.pdf', date: '2024-09-27', size: '2.5 MB' },
        { name: '山田良子_介護保険証.pdf', date: '2024-09-25', size: '1.8 MB' },
        { name: '鈴木一郎_薬剤情報提供書.pdf', date: '2024-09-24', size: '3.1 MB' },
        { name: '伊藤美咲_診療情報提供書.pdf', date: '2024-09-20', size: '2.2 MB' },
      ],
    },
    '訪問記録': {
      title: '訪問記録',
      files: [
        { name: '2024年9月_訪問記録一覧.xlsx', date: '2024-09-30', size: '4.5 MB' },
        { name: '佐藤花子_訪問記録_0928.docx', date: '2024-09-28', size: '1.5 MB' },
        { name: '田中太郎_訪問記録_0927.docx', date: '2024-09-27', size: '1.3 MB' },
        { name: '山田良子_訪問記録_0926.docx', date: '2024-09-26', size: '1.6 MB' },
        { name: '鈴木一郎_訪問記録_0925.docx', date: '2024-09-25', size: '1.4 MB' },
        { name: '伊藤美咲_訪問記録_0924.docx', date: '2024-09-24', size: '1.7 MB' },
      ],
    },
    '研修資料': {
      title: '研修資料',
      files: [
        { name: '2024年度_新人研修カリキュラム.pdf', date: '2024-09-15', size: '8.5 MB' },
        { name: '感染対策マニュアル_最新版.pdf', date: '2024-09-10', size: '6.2 MB' },
        { name: '褥瘡予防ケア_研修動画.mp4', date: '2024-09-05', size: '125 MB' },
        { name: '緊急時対応マニュアル.pdf', date: '2024-09-01', size: '4.8 MB' },
        { name: '医療機器取扱説明書.pdf', date: '2024-08-28', size: '12.3 MB' },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-[#fff] font-[family-name:var(--font-noto-sans-jp)] p-8">
      {/* Quick Access Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider">QUICK ACCESS</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {/* Priority Folder - Blue */}
          <div className="relative group cursor-pointer" onClick={() => setSelectedFolder('重要記録')}>
            {/* Folder Tab */}
            <div className="absolute top-0 left-0 w-20 h-5 bg-[#1a73e8] rounded-t-lg"></div>
            {/* Folder Body */}
            <div className="bg-[#1a73e8] rounded-2xl rounded-tl-none p-6 text-white relative overflow-hidden mt-3 hover:bg-[#1557b0] transition-colors">
              <div className="mb-4">
                <div className="text-xs font-medium mb-3 opacity-90">SHARED WITH</div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white/30 border-2 border-[#1a73e8] flex items-center justify-center">
                      <span className="text-xs font-medium">佐</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <div className="text-xs font-medium mb-1 opacity-90">FOLDER</div>
                <div className="text-sm font-bold">重要記録</div>
              </div>
              <div className="absolute bottom-4 right-4">
                <svg className="w-8 h-8 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Folder 2 */}
          <div className="relative group cursor-pointer" onClick={() => setSelectedFolder('訪問記録')}>
            {/* Folder Tab */}
            <div className="absolute top-0 left-0 w-20 h-5 bg-gray-200 rounded-t-lg"></div>
            {/* Folder Body */}
            <div className="bg-gray-50 rounded-2xl rounded-tl-none p-6 hover:bg-gray-100 transition-colors mt-3">
              <div className="mb-4">
                <div className="text-xs font-medium text-gray-500 mb-3">SHARED WITH</div>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-white flex items-center justify-center text-white">
                      <span className="text-xs font-medium">田</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <div className="text-xs font-medium text-gray-500 mb-1">FOLDER</div>
                <div className="text-sm font-bold text-gray-900">訪問記録</div>
              </div>
            </div>
          </div>

          {/* Folder 3 */}
          <div className="relative group cursor-pointer" onClick={() => setSelectedFolder('研修資料')}>
            {/* Folder Tab */}
            <div className="absolute top-0 left-0 w-20 h-5 bg-gray-200 rounded-t-lg"></div>
            {/* Folder Body */}
            <div className="bg-gray-50 rounded-2xl rounded-tl-none p-6 hover:bg-gray-100 transition-colors mt-3">
              <div className="mb-4">
                <div className="text-xs font-medium text-gray-500 mb-3">SHARED WITH</div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500 border-2 border-white flex items-center justify-center text-white">
                      <span className="text-xs font-medium">山</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <div className="text-xs font-medium text-gray-500 mb-1">FOLDER</div>
                <div className="text-sm font-bold text-gray-900">研修資料</div>
              </div>
            </div>
          </div>

          {/* Card 4 - Document */}
          <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors relative cursor-pointer mt-3">
            <div className="absolute top-4 right-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-red-500 border-2 border-white flex items-center justify-center text-white">
                <span className="text-xs font-medium">鈴</span>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-3">
              <div className="w-6 h-6 bg-[#1a73e8] rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-gray-900 leading-tight">
                  看護計画サマリー
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-xs text-gray-500">LAST MODIFIED</div>
              <div className="text-xs font-medium text-gray-700">Sept 5, 2019 - 04:45 AM</div>
            </div>
          </div>
        </div>
      </div>

      {/* All Files Section */}
      <div>
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">ALL FILES</h2>

        <div className="bg-white">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-gray-100 text-xs font-medium text-gray-500 uppercase tracking-wider">
            <div className="col-span-5">NAME</div>
            <div className="col-span-2">OWNER</div>
            <div className="col-span-2">LAST MODIFIED</div>
            <div className="col-span-2">FILE SIZE</div>
            <div className="col-span-1"></div>
          </div>

          {/* Table Rows */}
          {[
            { icon: '📄', color: 'blue', name: '佐藤花子_訪問記録.docx', owner: '山田', date: 'Sept 5, 2019 - 12:47 AM', size: '25 MB' },
            { icon: '📊', color: 'green', name: '田中太郎_看護計画.xlsx', owner: '佐藤', date: 'Sept 5, 2019 - 10:43 PM', size: '5.5 MB' },
            { icon: '📄', color: 'red', name: '山田良子_バイタル記録.pdf', owner: '鈴木', date: 'Jul 22, 2019 - 08:43 AM', size: '25 MB' },
            { icon: '📄', color: 'blue', name: '鈴木一郎_服薬管理リスト.docx', owner: '田中', date: 'Jul 13, 2019 - 12:43 AM', size: '25 MB' },
            { icon: '🖼️', color: 'orange', name: '伊藤美咲_ケア写真.jpg', owner: '山田', date: 'Jul 13, 2019 - 08:43 AM', size: '12 MB', highlight: true },
            { icon: '🖼️', color: 'orange', name: '高橋健二_状態記録.jpg', owner: '佐藤', date: 'Jul 13, 2019 - 08:43 AM', size: '15 MB' },
          ].map((file, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-50 hover:bg-blue-50/30 transition-colors ${
                file.highlight ? 'bg-blue-50/50' : ''
              }`}
            >
              <div className="col-span-5 flex items-center gap-3">
                <div className={`w-6 h-6 rounded flex items-center justify-center text-sm ${
                  file.color === 'blue' ? 'bg-blue-100' :
                  file.color === 'green' ? 'bg-green-100' :
                  file.color === 'red' ? 'bg-red-100' :
                  'bg-orange-100'
                }`}>
                  {file.icon}
                </div>
                <span className="text-sm font-medium text-gray-900">{file.name}</span>
              </div>
              <div className="col-span-2 flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border border-white flex items-center justify-center">
                    <span className="text-[10px] font-medium text-white">{file.owner[0]}</span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 flex items-center">
                <span className="text-xs text-gray-600">{file.date}</span>
              </div>
              <div className="col-span-2 flex items-center">
                <span className="text-xs text-gray-600">{file.size}</span>
              </div>
              <div className="col-span-1 flex items-center justify-end gap-2">
                <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedFolder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8" onClick={() => setSelectedFolder(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="bg-[#1a73e8] px-8 py-6 text-white flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{folderData[selectedFolder].title}</h2>
                <p className="text-sm text-white/80 mt-1">{folderData[selectedFolder].files.length}個のファイル</p>
              </div>
              <button
                onClick={() => setSelectedFolder(null)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(80vh-120px)]">
              <div className="space-y-2">
                {folderData[selectedFolder].files.map((file: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{file.name}</div>
                        <div className="text-sm text-gray-500 mt-1">{file.date} · {file.size}</div>
                      </div>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-[#1a73e8] text-white text-sm font-medium rounded-lg hover:bg-[#1557b0]">
                      開く
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}