'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, UserPlus, Download } from 'lucide-react';

// モックデータ
const mockUsers = [
  {
    id: 1,
    name: '佐藤 花子',
    age: 78,
    gender: '女性',
    address: '東京都渋谷区桜丘町1-1',
    phone: '03-1234-5678',
    insurance: '国保',
    riskLevel: 'medium',
    lastVisit: '2024-09-28',
    status: 'active',
    diseases: ['高血圧', '糖尿病'],
  },
  {
    id: 2,
    name: '田中 太郎',
    age: 82,
    gender: '男性',
    address: '東京都新宿区西新宿2-8-1',
    phone: '03-2345-6789',
    insurance: '後期高齢者',
    riskLevel: 'low',
    lastVisit: '2024-09-30',
    status: 'active',
    diseases: ['関節リウマチ'],
  },
  {
    id: 3,
    name: '山田 良子',
    age: 75,
    gender: '女性',
    address: '東京都港区六本木3-2-1',
    phone: '03-3456-7890',
    insurance: '後期高齢者',
    riskLevel: 'high',
    lastVisit: '2024-09-29',
    status: 'active',
    diseases: ['心不全', '高血圧', '脂質異常症'],
  },
  {
    id: 4,
    name: '鈴木 一郎',
    age: 80,
    gender: '男性',
    address: '東京都品川区大崎1-6-1',
    phone: '03-4567-8901',
    insurance: '後期高齢者',
    riskLevel: 'low',
    lastVisit: '2024-09-27',
    status: 'active',
    diseases: ['変形性膝関節症'],
  },
  {
    id: 5,
    name: '伊藤 美咲',
    age: 70,
    gender: '女性',
    address: '東京都目黒区目黒1-4-1',
    phone: '03-5678-9012',
    insurance: '国保',
    riskLevel: 'low',
    lastVisit: '2024-09-30',
    status: 'active',
    diseases: ['骨粗鬆症'],
  },
  {
    id: 6,
    name: '高橋 健二',
    age: 85,
    gender: '男性',
    address: '東京都世田谷区三軒茶屋2-11-22',
    phone: '03-6789-0123',
    insurance: '後期高齢者',
    riskLevel: 'medium',
    lastVisit: '2024-09-26',
    status: 'active',
    diseases: ['COPD', '高血圧'],
  },
  {
    id: 7,
    name: '渡辺 幸子',
    age: 73,
    gender: '女性',
    address: '東京都中野区中野4-10-2',
    phone: '03-7890-1234',
    insurance: '後期高齢者',
    riskLevel: 'low',
    lastVisit: '2024-09-29',
    status: 'active',
    diseases: ['変形性股関節症'],
  },
  {
    id: 8,
    name: '中村 昭夫',
    age: 88,
    gender: '男性',
    address: '東京都杉並区荻窪5-15-13',
    phone: '03-8901-2345',
    insurance: '後期高齢者',
    riskLevel: 'high',
    lastVisit: '2024-09-30',
    status: 'active',
    diseases: ['脳梗塞後遺症', '糖尿病', '高血圧'],
  },
];

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRisk, setSelectedRisk] = useState('all');
  const [selectedInsurance, setSelectedInsurance] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');

  // フィルタリング
  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRisk = selectedRisk === 'all' || user.riskLevel === selectedRisk;
    const matchesInsurance = selectedInsurance === 'all' || user.insurance === selectedInsurance;
    const matchesGender = selectedGender === 'all' || user.gender === selectedGender;

    return matchesSearch && matchesRisk && matchesInsurance && matchesGender;
  });

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'low':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getRiskLabel = (risk: string) => {
    switch (risk) {
      case 'high':
        return '要注意';
      case 'medium':
        return '注意';
      case 'low':
        return '良好';
      default:
        return '不明';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-[family-name:var(--font-noto-sans-jp)]">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">利用者管理</h1>
            <p className="text-gray-600">利用者情報の検索・管理ができます</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              <span className="font-semibold">エクスポート</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <UserPlus className="w-4 h-4" />
              <span className="font-semibold">新規登録</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">利用者総数</p>
              <h3 className="text-3xl font-bold text-gray-900">{mockUsers.length}名</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">要注意</p>
              <h3 className="text-3xl font-bold text-red-600">
                {mockUsers.filter(u => u.riskLevel === 'high').length}名
              </h3>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">注意</p>
              <h3 className="text-3xl font-bold text-yellow-600">
                {mockUsers.filter(u => u.riskLevel === 'medium').length}名
              </h3>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">良好</p>
              <h3 className="text-3xl font-bold text-green-600">
                {mockUsers.filter(u => u.riskLevel === 'low').length}名
              </h3>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg border border-gray-100 p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="利用者名または住所で検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-3 flex-wrap lg:flex-nowrap">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <select
                value={selectedRisk}
                onChange={(e) => setSelectedRisk(e.target.value)}
                className="h-11 pl-9 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none cursor-pointer"
              >
                <option value="all">全てのリスク</option>
                <option value="high">要注意</option>
                <option value="medium">注意</option>
                <option value="low">良好</option>
              </select>
            </div>

            <select
              value={selectedInsurance}
              onChange={(e) => setSelectedInsurance(e.target.value)}
              className="h-11 px-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
            >
              <option value="all">全ての保険</option>
              <option value="国保">国保</option>
              <option value="後期高齢者">後期高齢者</option>
            </select>

            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="h-11 px-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
            >
              <option value="all">全ての性別</option>
              <option value="男性">男性</option>
              <option value="女性">女性</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
          <span className="font-semibold">{filteredUsers.length}件</span>
          <span>の利用者が見つかりました</span>
        </div>
      </div>

      {/* Users List */}
      <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  利用者
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  年齢・性別
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  住所
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  電話番号
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  保険
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  主な疾患
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  リスク
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  最終訪問
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div className="font-semibold text-gray-900">{user.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.age}歳 / {user.gender}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                    {user.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                    {user.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                      {user.insurance}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <div className="flex flex-wrap gap-1">
                      {user.diseases.slice(0, 2).map((disease, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {disease}
                        </span>
                      ))}
                      {user.diseases.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          +{user.diseases.length - 2}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${getRiskColor(user.riskLevel)}`}>
                      {getRiskLabel(user.riskLevel)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {user.lastVisit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      href={`/users/${user.id}`}
                      className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-block"
                    >
                      詳細
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}