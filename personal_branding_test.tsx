import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Circle, RefreshCw } from 'lucide-react';

const BrandingTest = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const sections = [
    {
      title: "1단계: 나다움 정의",
      subtitle: "브랜드는 '나다움'에서 시작됩니다",
      questions: [
        {
          id: 'q1',
          question: '나를 한 문장으로 설명할 수 있나요?',
          options: [
            { value: 3, text: '명확하게 설명할 수 있다' },
            { value: 2, text: '대략적으로는 설명할 수 있다' },
            { value: 1, text: '설명하기 어렵다' },
            { value: 0, text: '전혀 설명할 수 없다' }
          ]
        },
        {
          id: 'q2',
          question: '나를 표현하는 키워드 3가지를 바로 떠올릴 수 있나요?',
          options: [
            { value: 3, text: '3개 이상 명확하게 있다' },
            { value: 2, text: '2개 정도 있다' },
            { value: 1, text: '1개 정도 있다' },
            { value: 0, text: '떠오르지 않는다' }
          ]
        },
        {
          id: 'q3',
          question: '사람들이 나에게 자주 물어보는 질문이나 주제가 있나요?',
          options: [
            { value: 3, text: '명확하게 있고, 그것을 활용하고 있다' },
            { value: 2, text: '있지만 활용하지는 않고 있다' },
            { value: 1, text: '가끔 있는 것 같다' },
            { value: 0, text: '전혀 없다' }
          ]
        }
      ]
    },
    {
      title: "2단계: 브랜딩 방향성",
      subtitle: "0에서 1로 가는 실전 전략",
      questions: [
        {
          id: 'q4',
          question: '내 열정(좋아하는 것), 전문성(잘하는 것), 시장성(필요로 하는 것)이 겹치는 지점을 찾았나요?',
          options: [
            { value: 3, text: '명확하게 찾았고 실행 중이다' },
            { value: 2, text: '어느 정도 찾았지만 확신은 없다' },
            { value: 1, text: '각각은 알지만 겹치는 지점을 못 찾았다' },
            { value: 0, text: '각각도 잘 모르겠다' }
          ]
        },
        {
          id: 'q5',
          question: '내 브랜드를 한 줄로 표현하는 문장이 있나요? (예: "나는 워킹맘들을 위한 N잡 정보를 전달하고 있어요")',
          options: [
            { value: 3, text: '있고, 자주 사용한다' },
            { value: 2, text: '있지만 자주 사용하지는 않는다' },
            { value: 1, text: '만들어야겠다고 생각은 했다' },
            { value: 0, text: '생각해본 적 없다' }
          ]
        },
        {
          id: 'q6',
          question: '브랜딩을 위한 작은 루틴(글쓰기, 콘텐츠 제작 등)을 실천하고 있나요?',
          options: [
            { value: 3, text: '꾸준히 실천 중이다' },
            { value: 2, text: '가끔 실천한다' },
            { value: 1, text: '시작했다가 멈췄다' },
            { value: 0, text: '시작하지 않았다' }
          ]
        }
      ]
    },
    {
      title: "3단계: 콘텐츠 글쓰기",
      subtitle: "기억에 남는 콘텐츠 만들기",
      questions: [
        {
          id: 'q7',
          question: '내 콘텐츠에는 일관된 주제와 말투가 있나요?',
          options: [
            { value: 3, text: '주제와 말투가 명확하다' },
            { value: 2, text: '주제는 있지만 말투가 일관되지 않다' },
            { value: 1, text: '둘 다 일관되지 않다' },
            { value: 0, text: '콘텐츠를 만들지 않는다' }
          ]
        },
        {
          id: 'q8',
          question: '같은 주제를 다양한 방식으로 반복해서 말하고 있나요?',
          options: [
            { value: 3, text: '의도적으로 반복하며 일관성을 만들고 있다' },
            { value: 2, text: '가끔 반복하지만 의도적이지는 않다' },
            { value: 1, text: '매번 다른 주제만 다룬다' },
            { value: 0, text: '콘텐츠를 거의 만들지 않는다' }
          ]
        },
        {
          id: 'q9',
          question: '내 콘텐츠는 정보 전달을 넘어 나만의 경험/감정/의견을 담고 있나요?',
          options: [
            { value: 3, text: '항상 나만의 시각을 담는다' },
            { value: 2, text: '가끔 담는다' },
            { value: 1, text: '정보 전달 위주다' },
            { value: 0, text: '잘 모르겠다' }
          ]
        }
      ]
    },
    {
      title: "4단계: 지속 가능성",
      subtitle: "꾸준함으로 만드는 브랜드",
      questions: [
        {
          id: 'q10',
          question: '나만의 콘텐츠 업로드 템포와 주기가 있나요?',
          options: [
            { value: 3, text: '명확한 주기가 있고 지키고 있다' },
            { value: 2, text: '주기는 있지만 자주 못 지킨다' },
            { value: 1, text: '불규칙하게 올린다' },
            { value: 0, text: '생각해본 적 없다' }
          ]
        },
        {
          id: 'q11',
          question: '나만의 브랜드 키워드 3가지를 정해두고 콘텐츠를 만들고 있나요?',
          options: [
            { value: 3, text: '3가지 키워드를 중심으로 운영 중이다' },
            { value: 2, text: '키워드는 있지만 잘 활용하지 못한다' },
            { value: 1, text: '키워드 없이 만든다' },
            { value: 0, text: '필요성을 못 느꼈다' }
          ]
        },
        {
          id: 'q12',
          question: '브랜딩이 힘들거나 루틴이 무너졌을 때 돌아올 기준점이 있나요?',
          options: [
            { value: 3, text: '명확한 기준점이 있다' },
            { value: 2, text: '대략적인 기준은 있다' },
            { value: 1, text: '무너지면 다시 시작하기 어렵다' },
            { value: 0, text: '생각해본 적 없다' }
          ]
        }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
    const maxScore = 36; // 12 questions × 3 points
    
    const sectionScores = {
      identity: (answers.q1 || 0) + (answers.q2 || 0) + (answers.q3 || 0),
      direction: (answers.q4 || 0) + (answers.q5 || 0) + (answers.q6 || 0),
      content: (answers.q7 || 0) + (answers.q8 || 0) + (answers.q9 || 0),
      sustainability: (answers.q10 || 0) + (answers.q11 || 0) + (answers.q12 || 0)
    };

    return { totalScore, maxScore, sectionScores };
  };

  const getResult = () => {
    const { totalScore, sectionScores } = calculateScore();
    const percentage = (totalScore / 36) * 100;

    if (percentage >= 80) {
      return {
        level: "브랜드 확립 단계",
        emoji: "🌟",
        description: "축하합니다! 당신은 브랜드 정체성이 명확하고 콘텐츠도 꾸준히 발행하고 있습니다. 하지만 여기서 멈추면 '취미'로 끝날 수 있습니다. 이제는 브랜드를 실제 수익으로 연결하는 구체적인 비즈니스 전략이 필요한 시점입니다. 좋은 콘텐츠만으로는 수익이 발생하지 않습니다. 명확한 상품 기획, 고객 확보 전략, 마케팅 퍼널 설계가 있어야 지속 가능한 1인 비즈니스가 완성됩니다.",
        advice: [
          "이제는 브랜드를 수익화할 구체적인 비즈니스 모델이 필요한 시점입니다",
          "MVP(최소 상품) 런칭을 통해 첫 고객을 확보하고 시장 검증을 시작하세요",
          "마케팅 퍼널을 설계하여 지속 가능한 수익 구조를 만들어보세요"
        ],
        nextStep: "💎 솔티프 브랜딩 스타트 PT의 '상품 런칭 실험'과 '퍼널 설계' 단계가 당신에게 필요합니다. 전문가와 함께 브랜드를 실제 비즈니스로 연결해보세요.",
        ctaText: "브랜드 수익화 전략 상담받기"
      };
    } else if (percentage >= 60) {
      return {
        level: "브랜드 성장 단계",
        emoji: "🌱",
        description: "당신은 브랜딩에 대한 이해가 있고 실천도 하고 있습니다. 하지만 콘텐츠를 올릴 때마다 '이게 맞나?' 싶은 순간이 있지 않나요? 일관성이 흔들리고, 반응이 없으면 지치고, 점점 방향성을 잃어가는 느낌... 지금 당신에게 필요한 건 체계입니다. SNS 프로필부터 콘텐츠 카테고리, 발행 루틴까지 명확한 시스템이 있어야 흔들리지 않고 성장할 수 있습니다. 전문가의 피드백 없이 혼자서 계속하면 같은 자리에서 맴돌 수 있습니다.",
        advice: [
          "SNS 프로필과 콘텐츠 전략을 체계적으로 세팅하면 더 빠르게 성장할 수 있습니다",
          "주 2~3회 발행 루틴을 정착시키고 독자 피드백을 받아보세요",
          "타겟 독자를 명확히 정의하고 맞춤 콘텐츠 카테고리를 만들어보세요"
        ],
        nextStep: "💎 솔티프 브랜딩 스타트 PT의 '콘텐츠 기획 실행'과 '퍼스널 브랜딩 실천' 단계로 체계적인 성장이 가능합니다. 8주 동안 전문가의 피드백을 받으며 브랜드를 완성해보세요.",
        ctaText: "체계적인 브랜드 성장 코칭 받기"
      };
    } else if (percentage >= 40) {
      return {
        level: "브랜드 시작 단계",
        emoji: "🌿",
        description: "브랜딩을 시작하고 싶은 마음은 있지만, 막상 '나는 뭘 하는 사람이지?'라는 질문에 명확히 답하기 어렵습니다. 좋아하는 것도 많고, 하고 싶은 것도 많은데 정작 '이게 내 브랜드다'라고 말할 수 있는 게 없습니다. SNS를 시작해도 무슨 말을 해야 할지, 어떤 콘텐츠를 만들어야 할지 매번 고민만 늘어갑니다. 지금 필요한 건 명확한 브랜드 정의입니다. '나는 누구에게, 무엇을, 어떻게 전달하는 사람인가?'가 정리되어야 콘텐츠도 자연스럽게 나옵니다. 혼자 고민하기엔 시간이 너무 오래 걸립니다.",
        advice: [
          "나만의 브랜드 정의문과 핵심 키워드 3~5개를 명확하게 도출해야 합니다",
          "좋아하는 것-잘하는 것-시장이 필요로 하는 것이 겹치는 지점을 찾으세요",
          "콘텐츠 주제와 타겟을 정하고 4주 실행 플랜을 세워보세요"
        ],
        nextStep: "💎 솔티프 브랜딩 스타트 PT는 바로 당신같은 분을 위한 프로그램입니다. '자기탐색 & 방향성 설정'부터 시작해서 8주 만에 브랜드 기획안까지 완성할 수 있습니다.",
        ctaText: "나만의 브랜드 설계 시작하기"
      };
    } else {
      return {
        level: "브랜드 탐색 단계",
        emoji: "🔍",
        description: "지금 당신은 변화가 필요하다는 걸 느끼고 있지만, 정작 '뭘 해야 하지?'라는 막막함 속에 있습니다. 퇴사하고 싶지만 그 다음이 그려지지 않고, 부수입을 만들고 싶지만 뭘 팔아야 할지 모르겠고, SNS를 해야 한다는 건 알지만 무슨 말을 해야 할지 감이 안 옵니다. 이런 상태에서 유튜브나 책만 보며 시간을 보내면 몇 달이 금방 지나갑니다. 지금 필요한 건 혼자 고민하는 시간이 아니라, 전문가의 질문과 체계적인 워크시트를 통해 내 안의 답을 찾아내는 과정입니다. 나의 WHY를 찾고, 삶과 일의 방향성을 정리하는 것부터 시작해야 합니다.",
        advice: [
          "나의 WHY(왜 이 일을 하고 싶은지)를 찾는 것부터 시작해야 합니다",
          "워크시트를 통해 삶과 일의 방향성을 정리하는 시간이 필요합니다",
          "혼자서는 막막할 수 있습니다. 전문가의 질문과 피드백이 큰 도움이 됩니다"
        ],
        nextStep: "💎 솔티프 브랜딩 스타트 PT의 1단계 '자기탐색 & 방향성 설정'으로 시작하세요. 2명의 전문가가 맞춤형 워크북과 1:1 코칭으로 당신만의 길을 함께 찾아드립니다.",
        ctaText: "전문가와 함께 방향 찾기"
      };
    }
  };

  const getSectionFeedback = (score, sectionName) => {
    if (score >= 8) return { status: "강점", color: "text-green-600" };
    if (score >= 5) return { status: "보통", color: "text-yellow-600" };
    return { status: "개선 필요", color: "text-red-600" };
  };

  const isAllAnswered = () => {
    return sections[currentSection].questions.every(q => answers[q.id] !== undefined);
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentSection(0);
    setShowResult(false);
  };

  if (showResult) {
    const result = getResult();
    const { totalScore, maxScore, sectionScores } = calculateScore();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{result.emoji}</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{result.level}</h2>
              <div className="text-xl text-gray-600 mb-4">
                총점: {totalScore}/{maxScore}점 ({Math.round((totalScore/maxScore)*100)}%)
              </div>
              <p className="text-gray-700 text-lg">{result.description}</p>
            </div>

            <div className="mb-8 p-6 bg-blue-50 rounded-xl">
              <h3 className="font-bold text-lg mb-4 text-gray-800">영역별 점수</h3>
              <div className="space-y-3">
                {[
                  { key: 'identity', name: '나다움 정의', score: sectionScores.identity },
                  { key: 'direction', name: '브랜딩 방향성', score: sectionScores.direction },
                  { key: 'content', name: '콘텐츠 글쓰기', score: sectionScores.content },
                  { key: 'sustainability', name: '지속 가능성', score: sectionScores.sustainability }
                ].map(section => {
                  const feedback = getSectionFeedback(section.score, section.name);
                  return (
                    <div key={section.key} className="flex justify-between items-center">
                      <span className="text-gray-700">{section.name}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-indigo-600 h-2 rounded-full transition-all"
                            style={{ width: `${(section.score/9)*100}%` }}
                          />
                        </div>
                        <span className={`font-semibold ${feedback.color}`}>
                          {section.score}/9 ({feedback.status})
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-lg mb-3 text-gray-800">💡 맞춤 조언</h3>
              <ul className="space-y-2">
                {result.advice.map((advice, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{advice}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl mb-6">
              <h3 className="font-bold text-lg mb-2 text-gray-800">🎯 다음 단계</h3>
              <p className="text-gray-700 mb-4">{result.nextStep}</p>
              <div className="bg-white p-4 rounded-lg border-2 border-indigo-200">
                <p className="text-sm text-gray-600 mb-3">
                  💡 8주 만에 브랜드 설계부터 수익화까지 | 2명의 전문가 밀착 코칭 | 맞춤형 워크북 제공
                </p>
                <a
                  href="https://forms.gle/XvZr7PUoGoRV2eBh7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition text-center"
                >
                  {result.ctaText}
                </a>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              다시 진단하기
            </button>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentSection + 1) / sections.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            퍼스널 브랜딩 상태 진단
          </h1>
          <p className="text-gray-600 text-lg">
            나답게 살아가기 위한 브랜딩, 지금 어디쯤 와 있나요?
          </p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>{currentSection + 1} / {sections.length} 단계</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {sections[currentSection].title}
            </h2>
            <p className="text-gray-600">{sections[currentSection].subtitle}</p>
          </div>

          <div className="space-y-8">
            {sections[currentSection].questions.map((question, qIndex) => (
              <div key={question.id} className="border-b border-gray-200 pb-6 last:border-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Q{(currentSection * 3) + qIndex + 1}. {question.question}
                </h3>
                <div className="space-y-3">
                  {question.options.map((option, oIndex) => (
                    <button
                      key={oIndex}
                      onClick={() => handleAnswer(question.id, option.value)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        answers[question.id] === option.value
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {answers[question.id] === option.value ? (
                          <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                        ) : (
                          <Circle className="w-6 h-6 text-gray-400 flex-shrink-0" />
                        )}
                        <span className={`${
                          answers[question.id] === option.value
                            ? 'text-indigo-900 font-medium'
                            : 'text-gray-700'
                        }`}>
                          {option.text}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
              disabled={currentSection === 0}
              className={`px-6 py-3 rounded-xl font-semibold transition ${
                currentSection === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              이전
            </button>
            
            <button
              onClick={handleNext}
              disabled={!isAllAnswered()}
              className={`px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2 ${
                !isAllAnswered()
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {currentSection === sections.length - 1 ? '결과 보기' : '다음'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>💡 모든 질문에 솔직하게 답변해주세요. 정답은 없습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default BrandingTest;