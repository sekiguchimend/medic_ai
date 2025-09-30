'use client';

import { useState, useRef, useEffect } from 'react';

const API_KEY = 'AIzaSyDUn1XyEQvIyjmtE5855chDqvzD9CVCkcM';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function MedicalDataPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '医療データ支援AIです。症状や疾患について質問してください。診断のサポートや医学的な情報提供をいたします。',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [availableModels, setAvailableModels] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // コンポーネントマウント時にAPIキーとモデルを確認
  useEffect(() => {
    const checkApiKey = async () => {
      console.log('='.repeat(80));
      console.log('🔍 API診断開始');
      console.log('='.repeat(80));

      console.log('📌 ステップ1: APIキーの確認');
      console.log('APIキー:', API_KEY);
      console.log('APIキー長:', API_KEY.length);
      console.log('APIキー最初の10文字:', API_KEY.substring(0, 10));

      console.log('\n📌 ステップ2: モデルリストのフェッチ開始');
      const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;
      console.log('リクエストURL:', url);

      try {
        console.log('\n📌 ステップ3: HTTPリクエスト送信中...');
        const response = await fetch(url);

        console.log('\n📌 ステップ4: レスポンス受信');
        console.log('ステータスコード:', response.status);
        console.log('ステータステキスト:', response.statusText);
        console.log('レスポンスOK:', response.ok);
        console.log('レスポンスヘッダー:', Object.fromEntries(response.headers.entries()));

        const data = await response.json();
        console.log('\n📌 ステップ5: レスポンスボディ解析');
        console.log('レスポンス全体:', JSON.stringify(data, null, 2));

        if (response.ok) {
          console.log('\n✅ APIキー検証成功!');

          if (data.models && Array.isArray(data.models)) {
            console.log('\n📌 ステップ6: 利用可能なモデル一覧');
            console.log('モデル数:', data.models.length);

            data.models.forEach((model: any, index: number) => {
              console.log(`\n[モデル ${index + 1}]`);
              console.log('  名前:', model.name);
              console.log('  表示名:', model.displayName);
              console.log('  説明:', model.description);
              console.log('  サポートメソッド:', model.supportedGenerationMethods);
            });

            const models = data.models.map((m: any) => m.name);
            setAvailableModels(models);

            const generateModels = data.models.filter((m: any) =>
              m.supportedGenerationMethods?.includes('generateContent')
            );

            console.log('\n📌 ステップ7: generateContentサポートモデル');
            console.log('対応モデル数:', generateModels.length);
            generateModels.forEach((model: any) => {
              console.log('  -', model.name);
            });

            if (generateModels.length > 0) {
              const recommendedModel = generateModels[0].name;
              console.log('\n🎯 推奨モデル:', recommendedModel);

              setMessages([
                {
                  role: 'assistant',
                  content: `✅ AI準備完了！\n\n使用モデル: ${generateModels[0].displayName}\n利用可能なモデル数: ${generateModels.length}個\n\n症状や疾患について質問してください。`,
                },
              ]);
            } else {
              console.log('\n❌ generateContentをサポートするモデルが見つかりません');
              setMessages([
                {
                  role: 'assistant',
                  content: '⚠️ generateContentをサポートするモデルが見つかりませんでした。APIキーの権限を確認してください。',
                },
              ]);
            }
          } else {
            console.log('\n❌ レスポンスにmodelsが含まれていません');
            console.log('レスポンス構造:', Object.keys(data));
          }
        } else {
          console.log('\n❌ APIキー検証失敗');
          console.log('エラー詳細:', data);

          let errorMessage = 'APIキーエラー\n\n';

          if (data.error) {
            errorMessage += `エラーコード: ${data.error.code}\n`;
            errorMessage += `メッセージ: ${data.error.message}\n`;
            errorMessage += `ステータス: ${data.error.status}\n\n`;

            if (data.error.code === 400) {
              errorMessage += '💡 解決方法:\n';
              errorMessage += '1. APIキーが正しいか確認\n';
              errorMessage += '2. Google AI StudioでAPIキーを再生成\n';
              errorMessage += '3. Gemini APIが有効化されているか確認';
            } else if (data.error.code === 403) {
              errorMessage += '💡 解決方法:\n';
              errorMessage += '1. APIキーの権限を確認\n';
              errorMessage += '2. 請求先アカウントが設定されているか確認\n';
              errorMessage += '3. APIの使用制限を確認';
            }
          }

          errorMessage += '\n\n🔗 APIキー取得: https://makersuite.google.com/app/apikey';

          setMessages([
            {
              role: 'assistant',
              content: errorMessage,
            },
          ]);
        }
      } catch (error) {
        console.log('\n❌❌❌ 致命的エラー発生 ❌❌❌');
        console.log('エラータイプ:', error instanceof Error ? error.constructor.name : typeof error);
        console.log('エラーメッセージ:', error instanceof Error ? error.message : String(error));
        console.log('エラースタック:', error instanceof Error ? error.stack : 'N/A');

        setMessages([
          {
            role: 'assistant',
            content: `🚨 ネットワークエラー\n\n${error instanceof Error ? error.message : String(error)}\n\n原因:\n- インターネット接続の問題\n- CORSエラー\n- ファイアウォール設定\n\nコンソールを確認してください。`,
          },
        ]);
      }

      console.log('\n' + '='.repeat(80));
      console.log('🔍 API診断終了');
      console.log('='.repeat(80));
    };

    checkApiKey();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // 利用可能なモデルから選択、なければデフォルト
      let modelToUse = 'gemini-2.5-flash-preview-09-2025';

      if (availableModels.length > 0) {
        // generateContent をサポートするモデルを探す
        const generateModels = availableModels.filter(m =>
          m.includes('generateContent')
        );

        if (generateModels.length > 0) {
          // models/gemini-pro:generateContent から gemini-pro を抽出
          const modelName = generateModels[0].split(':')[0].replace('models/', '');
          modelToUse = modelName;
          console.log('Using model:', modelToUse);
        }
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/${modelToUse.startsWith('models/') ? modelToUse : 'models/' + modelToUse}:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `あなたは訪問看護の医療支援AIです。以下の質問に対して、医学的に正確で分かりやすく回答してください。ただし、最終的な診断は医師が行うべきであることを明記してください。\n\n質問: ${userMessage}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();

      console.log('API Response:', data);

      if (!response.ok) {
        console.error('API Error Status:', response.status);
        console.error('API Error Data:', data);
        const errorMsg = data.error?.message || `APIエラー (${response.status})`;
        throw new Error(errorMsg);
      }

      if (!data.candidates || data.candidates.length === 0) {
        console.error('No candidates in response:', data);
        throw new Error('AIからの応答がありませんでした。別の質問をお試しください。');
      }

      const aiResponse = data.candidates[0]?.content?.parts?.[0]?.text;

      if (!aiResponse) {
        console.error('Empty AI response:', data.candidates[0]);
        throw new Error('AIからの応答が空でした');
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Full Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'ネットワークエラーが発生しました';
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: `申し訳ございません。${errorMessage}\n\nもう一度お試しいただくか、別の質問をしてください。` },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="h-screen flex flex-col bg-white font-[family-name:var(--font-noto-sans-jp)]">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4">
        <h1 className="text-xl font-bold text-gray-900">医療データ支援AI</h1>
        <p className="text-sm text-gray-500 mt-1">症状や疾患について質問できます</p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-[#0078D7] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  AI
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                  message.role === 'user'
                    ? 'bg-[#0078D7] text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <div className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</div>
              </div>
              {message.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  You
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-4 justify-start">
              <div className="w-8 h-8 rounded-full bg-[#0078D7] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                AI
              </div>
              <div className="bg-gray-100 rounded-2xl px-5 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 px-6 py-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-3 items-end">
            <div className="flex-1 relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="症状や疾患について質問してください..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#0078D7] focus:border-transparent"
                rows={1}
                style={{
                  minHeight: '52px',
                  maxHeight: '200px',
                }}
              />
            </div>
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className={`px-5 py-3 rounded-xl font-medium transition-colors ${
                input.trim() && !isLoading
                  ? 'bg-[#0078D7] text-white hover:bg-[#005A9E]'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            このAIは参考情報を提供するものであり、医師の診断に代わるものではありません
          </p>
        </div>
      </div>

      {/* Quick Questions */}
      {messages.length === 1 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="max-w-3xl w-full px-6 pointer-events-auto">
            <div className="grid grid-cols-2 gap-3 mt-8">
              {[
                '高血圧の管理方法について教えてください',
                '糖尿病患者の食事指導のポイントは？',
                '褥瘡の予防とケアについて',
                '認知症の方への対応方法',
              ].map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => setInput(question)}
                  className="p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl text-left text-sm text-gray-700 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}