'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Edit, Phone, Mail, MapPin, Calendar, AlertCircle, Activity, Pill, FileText, Hospital } from 'lucide-react';

// モックデータ
const mockUserDetails: Record<string, any> = {
  '1': {
    id: 1,
    name: '佐藤 花子',
    nameKana: 'サトウ ハナコ',
    age: 78,
    gender: '女性',
    birthDate: '1945-03-15',
    address: '東京都渋谷区桜丘町1-1',
    phone: '03-1234-5678',
    mobile: '090-1234-5678',
    email: 'hanako.sato@example.com',
    insurance: {
      type: '国保',
      number: '12345678',
      validUntil: '2025-03-31',
    },
    riskLevel: 'medium',
    lastVisit: '2024-09-28',
    status: 'active',
    diseases: [
      { name: '高血圧', since: '2015-04', status: '治療中', severity: 'medium' },
      { name: '糖尿病（2型）', since: '2018-07', status: '治療中', severity: 'medium' },
      { name: '脂質異常症', since: '2016-02', status: '治療中', severity: 'low' },
    ],
    medicalHistory: [
      { year: '2020', event: '白内障手術（右眼）' },
      { year: '2019', event: '胆石症手術' },
      { year: '2015', event: '高血圧と診断' },
    ],
    medications: [
      {
        name: 'アムロジピン',
        dosage: '5mg',
        frequency: '1日1回 朝食後',
        purpose: '高血圧治療',
        startDate: '2015-04-10',
      },
      {
        name: 'メトホルミン',
        dosage: '500mg',
        frequency: '1日2回 朝夕食後',
        purpose: '糖尿病治療',
        startDate: '2018-07-15',
      },
      {
        name: 'アトルバスタチン',
        dosage: '10mg',
        frequency: '1日1回 夕食後',
        purpose: '脂質異常症治療',
        startDate: '2016-02-20',
      },
    ],
    vitalRecords: [
      {
        date: '2024-09-28',
        bloodPressure: '145/85',
        pulse: 78,
        temperature: 36.5,
        weight: 58.2,
        bloodSugar: 135,
        note: '血圧やや高め、食事指導実施',
      },
      {
        date: '2024-09-25',
        bloodPressure: '138/82',
        pulse: 75,
        temperature: 36.6,
        weight: 58.5,
        bloodSugar: 128,
        note: '状態安定',
      },
      {
        date: '2024-09-21',
        bloodPressure: '142/88',
        pulse: 80,
        temperature: 36.4,
        weight: 58.3,
        bloodSugar: 142,
        note: '血糖値やや高め、運動指導実施',
      },
    ],
    assessments: [
      {
        date: '2024-09-28',
        assessor: '山田看護師',
        category: 'ADL評価',
        score: '85/100',
        detail: '日常生活動作はほぼ自立。階段昇降に軽度の介助が必要。',
      },
      {
        date: '2024-09-15',
        assessor: '田中PT',
        category: 'リハビリ評価',
        score: '良好',
        detail: '下肢筋力が改善傾向。自宅内歩行は安定している。',
      },
      {
        date: '2024-09-01',
        assessor: '佐々木医師',
        category: '医学的評価',
        score: '-',
        detail: '血糖コントロールは概ね良好。血圧管理を継続。',
      },
    ],
    hospitalizations: [
      {
        admissionDate: '2020-06-10',
        dischargeDate: '2020-06-15',
        hospital: '渋谷総合病院',
        department: '眼科',
        reason: '白内障手術',
        outcome: '良好に回復',
      },
      {
        admissionDate: '2019-09-05',
        dischargeDate: '2019-09-12',
        hospital: '渋谷総合病院',
        department: '外科',
        reason: '胆石症手術',
        outcome: '良好に回復',
      },
    ],
  },
  '2': {
    id: 2,
    name: '田中 太郎',
    nameKana: 'タナカ タロウ',
    age: 82,
    gender: '男性',
    birthDate: '1941-08-22',
    address: '東京都新宿区西新宿2-8-1',
    phone: '03-2345-6789',
    mobile: '090-2345-6789',
    email: 'taro.tanaka@example.com',
    insurance: {
      type: '後期高齢者',
      number: '23456789',
      validUntil: '2025-08-31',
    },
    riskLevel: 'low',
    lastVisit: '2024-09-30',
    status: 'active',
    diseases: [
      { name: '関節リウマチ', since: '2010-05', status: '治療中', severity: 'medium' },
      { name: '変形性膝関節症', since: '2012-11', status: '経過観察', severity: 'low' },
    ],
    medicalHistory: [
      { year: '2012', event: '変形性膝関節症と診断' },
      { year: '2010', event: '関節リウマチと診断' },
    ],
    medications: [
      {
        name: 'メトトレキサート',
        dosage: '8mg',
        frequency: '週1回',
        purpose: '関節リウマチ治療',
        startDate: '2010-05-20',
      },
      {
        name: 'ロキソプロフェン',
        dosage: '60mg',
        frequency: '1日3回 毎食後',
        purpose: '疼痛緩和',
        startDate: '2012-11-10',
      },
    ],
    vitalRecords: [
      {
        date: '2024-09-30',
        bloodPressure: '130/80',
        pulse: 72,
        temperature: 36.8,
        weight: 65.8,
        bloodSugar: null,
        note: '状態良好',
      },
      {
        date: '2024-09-27',
        bloodPressure: '128/78',
        pulse: 70,
        temperature: 36.7,
        weight: 65.5,
        bloodSugar: null,
        note: '関節痛の訴えなし',
      },
    ],
    assessments: [
      {
        date: '2024-09-30',
        assessor: '鈴木PT',
        category: 'リハビリ評価',
        score: '良好',
        detail: '関節可動域の改善が見られる。継続してリハビリを実施。',
      },
    ],
    hospitalizations: [],
  },
};

export default function UserDetailPage() {
  const params = useParams();
  const userId = params?.id as string;
  const user = mockUserDetails[userId];

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">利用者が見つかりません</h1>
          <Link href="/users" className="text-blue-600 hover:underline">
            利用者一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

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
      {/* Header */}
      <div className="mb-6">
        <Link
          href="/users"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-semibold">利用者一覧に戻る</span>
        </Link>

        <div className="flex items-start justify-between">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              {user.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                <span className={`px-3 py-1 text-sm font-bold rounded-full ${getRiskColor(user.riskLevel)}`}>
                  {getRiskLabel(user.riskLevel)}
                </span>
              </div>
              <p className="text-gray-600 mb-1">{user.nameKana}</p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>{user.age}歳 / {user.gender}</span>
                <span>生年月日: {user.birthDate}</span>
                <span>最終訪問: {user.lastVisit}</span>
              </div>
            </div>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Edit className="w-4 h-4" />
            <span className="font-semibold">編集</span>
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* 基本情報 */}
          <div className="bg-white rounded-lg border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                基本情報
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-semibold text-gray-600 block mb-2">住所</label>
                  <p className="text-gray-900">{user.address}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600 block mb-2">電話番号</label>
                  <div className="flex items-center gap-2 text-gray-900">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="font-mono">{user.phone}</span>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600 block mb-2">携帯電話</label>
                  <div className="flex items-center gap-2 text-gray-900">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="font-mono">{user.mobile}</span>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600 block mb-2">メールアドレス</label>
                  <div className="flex items-center gap-2 text-gray-900">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span>{user.email}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">保険情報</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-600 block mb-2">保険種別</label>
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">
                      {user.insurance.type}
                    </span>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600 block mb-2">保険番号</label>
                    <p className="text-gray-900 font-mono">{user.insurance.number}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600 block mb-2">有効期限</label>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{user.insurance.validUntil}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 疾患・既往歴 */}
          <div className="bg-white rounded-lg border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                疾患・既往歴
              </h2>
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold text-gray-900 mb-4">現在の疾患</h3>
              <div className="space-y-3 mb-6">
                {user.diseases.map((disease: any, index: number) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-gray-900">{disease.name}</h4>
                      <span className={`px-2 py-1 text-xs font-semibold rounded ${
                        disease.severity === 'high' ? 'bg-red-100 text-red-700' :
                        disease.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {disease.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      診断時期: {disease.since}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-base font-bold text-gray-900 mb-4 pt-6 border-t border-gray-100">既往歴</h3>
              <div className="space-y-2">
                {user.medicalHistory.map((history: any, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded">
                      {history.year}年
                    </span>
                    <span className="text-gray-900">{history.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 薬剤情報 */}
          <div className="bg-white rounded-lg border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Pill className="w-5 h-5 text-purple-600" />
                薬剤情報
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {user.medications.map((med: any, index: number) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{med.name}</h4>
                        <p className="text-sm text-purple-600 font-semibold">{med.purpose}</p>
                      </div>
                      <span className="px-3 py-1 bg-white text-purple-700 text-sm font-bold rounded-full shadow-sm">
                        {med.dosage}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-gray-600">服用方法: </span>
                        <span className="text-gray-900 font-semibold">{med.frequency}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">開始日: </span>
                        <span className="text-gray-900 font-semibold">{med.startDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 検査データ／バイタル記録 */}
          <div className="bg-white rounded-lg border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Activity className="w-5 h-5 text-green-600" />
                検査データ／バイタル記録
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">日付</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">血圧</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">脈拍</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">体温</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">体重</th>
                    {user.vitalRecords.some((r: any) => r.bloodSugar) && (
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">血糖値</th>
                    )}
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">備考</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {user.vitalRecords.map((record: any, index: number) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{record.date}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-mono">{record.bloodPressure}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-mono">{record.pulse} bpm</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-mono">{record.temperature}°C</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-mono">{record.weight} kg</td>
                      {user.vitalRecords.some((r: any) => r.bloodSugar) && (
                        <td className="px-6 py-4 text-sm text-gray-900 font-mono">
                          {record.bloodSugar ? `${record.bloodSugar} mg/dL` : '-'}
                        </td>
                      )}
                      <td className="px-6 py-4 text-sm text-gray-600">{record.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* アセスメント履歴 */}
          <div className="bg-white rounded-lg border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-600" />
                アセスメント履歴
              </h2>
            </div>
            <div className="p-6 space-y-4">
              {user.assessments.map((assessment: any, index: number) => (
                <div key={index} className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-gray-900">{assessment.category}</h4>
                      <p className="text-sm text-gray-600 mt-1">評価者: {assessment.assessor} | 日付: {assessment.date}</p>
                    </div>
                    {assessment.score && (
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-bold rounded-full">
                        {assessment.score}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700">{assessment.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 入退院履歴 */}
          <div className="bg-white rounded-lg border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Hospital className="w-5 h-5 text-indigo-600" />
                入退院履歴
              </h2>
            </div>
            <div className="p-6">
              {user.hospitalizations.length === 0 ? (
                <p className="text-gray-500 text-center py-8">入退院履歴はありません</p>
              ) : (
                <div className="space-y-4">
                  {user.hospitalizations.map((hosp: any, index: number) => (
                    <div key={index} className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-gray-900">{hosp.hospital}</h4>
                          <p className="text-sm text-indigo-600 font-semibold">{hosp.department}</p>
                        </div>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
                          {hosp.outcome}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm mb-2">
                        <div>
                          <span className="text-gray-600">入院日: </span>
                          <span className="text-gray-900 font-semibold">{hosp.admissionDate}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">退院日: </span>
                          <span className="text-gray-900 font-semibold">{hosp.dischargeDate}</span>
                        </div>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">理由: </span>
                        <span className="text-gray-900">{hosp.reason}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Quick Info */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-white rounded-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">クイック情報</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-sm font-semibold text-gray-700">活性疾患数</span>
                <span className="text-xl font-bold text-blue-600">{user.diseases.length}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <span className="text-sm font-semibold text-gray-700">服用薬剤数</span>
                <span className="text-xl font-bold text-purple-600">{user.medications.length}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-sm font-semibold text-gray-700">バイタル記録</span>
                <span className="text-xl font-bold text-green-600">{user.vitalRecords.length}件</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <span className="text-sm font-semibold text-gray-700">アセスメント</span>
                <span className="text-xl font-bold text-orange-600">{user.assessments.length}件</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">最近の活動</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">訪問実施</p>
                  <p className="text-xs text-gray-600">{user.lastVisit}</p>
                </div>
              </div>
              {user.vitalRecords[0] && (
                <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">バイタル測定</p>
                    <p className="text-xs text-gray-600">{user.vitalRecords[0].date}</p>
                  </div>
                </div>
              )}
              {user.assessments[0] && (
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">アセスメント実施</p>
                    <p className="text-xs text-gray-600">{user.assessments[0].date}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">クイックアクション</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm">
                訪問記録を入力
              </button>
              <button className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-sm">
                バイタル記録
              </button>
              <button className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-sm">
                看護計画作成
              </button>
              <button className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-sm">
                スケジュール登録
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}