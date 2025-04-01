const { useState } = React;

// 카드 컴포넌트
const Card = ({ children, className = "" }) => {
  return (
    <div className={`border border-gray-300 rounded-lg shadow-sm ${className}`}>
      <div className="py-5 px-6">{children}</div>
    </div>
  );
};

// CardContent 컴포넌트
const CardContent = ({ children }) => {
  return <div className="pt-4">{children}</div>;
};

// 섹션 컴포넌트 - 코드 재사용성 개선
const Section = ({ title, isExpanded, onToggle, children }) => {
  return (
    <section 
      className={`bg-white rounded-lg shadow-md p-6 mb-6 transition-all duration-300 ${
        isExpanded ? 'ring-2 ring-blue-500' : 'hover:shadow-lg cursor-pointer'
      }`}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
    >
      <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
        {title}
        <span className="ml-3 text-sm text-blue-500">{isExpanded ? '(접기)' : '(더 보기)'}</span>
      </h2>
      {children}
    </section>
  );
};

// 메인 어플리케이션 컴포넌트
const SenGPTGuide = () => {
  // 각 섹션의 확장 상태를 관리하는 state
  const [expandedSection, setExpandedSection] = useState(null);

  // 섹션 클릭 핸들러
  const toggleSection = (sectionName) => {
    if (expandedSection === sectionName) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionName);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* 헤더 */}
        <header className="bg-blue-700 text-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">서울특별시교육청 senGPT 활용 가이드</h1>
              <p className="text-lg md:text-xl">교장/교감 선생님을 위한 AI 비서 활용법</p>
            </div>
            <div className="mt-4 md:mt-0">
              <img 
                src="https://wrks.ai/logo/img/wrks_logo_white.png" 
                alt="웍스AI 로고" 
                className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white p-2"
                loading="lazy"
              />
            </div>
          </div>
        </header>

        {/* 소개 섹션 */}
        <Section 
          title="senGPT란?" 
          isExpanded={expandedSection === 'intro'} 
          onToggle={() => toggleSection('intro')}
        >
          <div className="text-lg mb-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <strong>서울시교육청의 업무용 AI 비서</strong>로, 서울시내 교직원에게 제공되는 
            생성형 AI 서비스입니다. OpenAI의 최신 GPT-4 모델을 기반으로 하며, 
            <span className="bg-yellow-100 px-1 mx-1">무제한 무료</span>로 이용 가능합니다.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Card className="bg-blue-50 border-blue-200">
              <h3 className="text-xl font-bold text-blue-700 mb-2">💼 교육 행정 업무 효율화</h3>
              <p className="text-lg">문서 작성, 회의록 정리, 가정통신문 작성 등 행정 업무 부담을 줄여줍니다.</p>
            </Card>
            <Card className="bg-green-50 border-green-200">
              <h3 className="text-xl font-bold text-green-700 mb-2">📚 교육청 전용 지식</h3>
              <p className="text-lg">학생부 작성, 학적 업무, 법령 등 교육청 자료를 학습해 정확한 정보를 제공합니다.</p>
            </Card>
          </div>

          {/* 확장된 내용 */}
          {expandedSection === 'intro' && (
            <div className="mt-6 border-t border-gray-200 pt-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-blue-600 mb-3">주요 특징</h3>
              <ul className="space-y-4 ml-6 list-disc text-lg">
                <li>
                  <span className="font-semibold">교육청 전용 AI 지식:</span> 
                  <p>교육 관련 법령, 학생부 작성 요령 등을 학습했으며 출처와 함께 답변합니다.</p>
                </li>
                <li>
                  <span className="font-semibold">다양한 "비서" 기능:</span> 
                  <p>회의록 작성, 문서 검토, 데이터 분석 등 상황에 맞는 AI 비서를 선택할 수 있습니다.</p>
                </li>
                <li>
                  <span className="font-semibold">멀티모달 기능:</span> 
                  <p>텍스트 답변 외에도 '그림 그리기' 기능으로 학교 홍보물 이미지 등을 만들 수 있습니다.</p>
                </li>
              </ul>
            </div>
          )}
        </Section>

        {/* 주요 기능 섹션 */}
        <Section 
          title="주요 기능" 
          isExpanded={expandedSection === 'features'} 
          onToggle={() => toggleSection('features')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-400">
              <div className="text-3xl mb-2">📝</div>
              <h3 className="text-xl font-bold mb-2">다양한 비서 기능</h3>
              <p className="text-lg">회의록 작성, 개조식 내용정리, 문서 검토 등 업무별 맞춤 AI 비서 제공</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-400">
              <div className="text-3xl mb-2">🔍</div>
              <h3 className="text-xl font-bold mb-2">문서 검토 기능</h3>
              <p className="text-lg">PDF, 워드, PPT 파일을 올려 내용 질의응답, 요약 등 빠른 자료 파악</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-purple-400">
              <div className="text-3xl mb-2">🖼️</div>
              <h3 className="text-xl font-bold mb-2">이미지 생성</h3>
              <p className="text-lg">학교 홍보 포스터, 행사 안내 등 '그림 그리기' 기능으로 간편하게 제작</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-400">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="text-xl font-bold mb-2">데이터 분석</h3>
              <p className="text-lg">엑셀 파일 업로드로 데이터 분석, 계산, 보고서 작성 자동화 지원</p>
            </div>
          </div>

          {/* 확장된 내용 */}
          {expandedSection === 'features' && (
            <div className="mt-6 border-t border-gray-200 pt-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-blue-600 mb-4">비서 기능 자세히 보기</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-blue-700">「개조식 내용정리」 비서</h4>
                  <p className="mt-2 text-lg">긴 문서를 요점 위주로 개조식으로 정리해 핵심만 빠르게 파악할 수 있습니다.</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-blue-700">「회의록 작성」 비서</h4>
                  <p className="mt-2 text-lg">회의 내용을 입력하면 참석자, 안건, 논의사항, 결정사항으로 체계적 정리해줍니다.</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-blue-700">「문서 검토」 비서</h4>
                  <p className="mt-2 text-lg">최대 512MB 크기의 문서 파일을 분석해 내용 요약과 질의응답을 제공합니다.</p>
                </div>
              </div>
            </div>
          )}
        </Section>

        {/* 시작하기 섹션 */}
        <Section 
          title="시작하기" 
          isExpanded={expandedSection === 'getting-started'} 
          onToggle={() => toggleSection('getting-started')}
        >
          <div className="space-y-4">
            <div className="flex items-start bg-gray-50 p-4 rounded-lg">
              <div className="bg-blue-100 text-blue-700 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0 text-xl">1</div>
              <div>
                <h3 className="text-xl font-bold">계정 가입</h3>
                <p className="mt-1 text-lg">
                  <a href="https://wrks.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">웍스AI 공식 사이트(wrks.ai)</a>에 접속 후
                  서울시교육청 공식 이메일(@sen.go.kr)로 가입하세요.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-gray-50 p-4 rounded-lg">
              <div className="bg-blue-100 text-blue-700 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0 text-xl">2</div>
              <div>
                <h3 className="text-xl font-bold">비서 선택</h3>
                <p className="mt-1 text-lg">
                  로그인 후 "웍스 공식 비서"와 "서울시교육청 전용 비서" 중에서 선택하세요.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-gray-50 p-4 rounded-lg">
              <div className="bg-blue-100 text-blue-700 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0 text-xl">3</div>
              <div>
                <h3 className="text-xl font-bold">대화 시작</h3>
                <p className="mt-1 text-lg">
                  선택한 비서와 채팅을 시작하고 원하는 질문이나 업무 지원을 요청하세요.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-300">
            <h3 className="text-lg font-bold text-yellow-700 mb-2">💡 도움말</h3>
            <p className="text-lg">
              인증 메일이 오지 않는다면, SEN 이메일이 휴면 상태인지 확인하세요. 
              웹메일에 먼저 접속해 계정을 활성화하면 됩니다.
            </p>
          </div>

          {/* 확장된 내용 */}
          {expandedSection === 'getting-started' && (
            <div className="mt-6 border-t border-gray-200 pt-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-blue-600 mb-4">기본 인터페이스 이해</h3>
              
              <div>
                <p className="text-lg mb-3">
                  로그인 성공 시 서울시교육청 전용 웍스AI 대시보드에서 다음 항목을 볼 수 있습니다:
                </p>
                <ul className="space-y-3 ml-6 list-disc text-lg">
                  <li>
                    <span className="font-semibold">웍스 공식 비서:</span> 내용 정리, 회의록 작성, 문서 검토 등 기본 업무 지원 비서
                  </li>
                  <li>
                    <span className="font-semibold">서울시교육청 전용 비서:</span> 교육 관련 법령, 학사업무 등 교육청 매뉴얼 반영 비서
                  </li>
                  <li>
                    <span className="font-semibold">나만의 비서:</span> 사용자가 직접 새로운 비서를 만들어 활용 가능
                  </li>
                </ul>
              </div>
              
              <div className="mt-5 bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-700">비용 및 보안 안내</h4>
                <p className="mt-2 text-lg">
                  <strong>senGPT는 모든 대화가 무료</strong>이며, 교육청 전용 공간에서 이뤄지므로 
                  <strong>보안이 확보된 상태</strong>에서 안심하고 활용하실 수 있습니다.
                </p>
              </div>
            </div>
          )}
        </Section>

        {/* 주요 활용 사례 */}
        <Section 
          title="교육 현장 활용 사례" 
          isExpanded={expandedSection === 'use-cases'} 
          onToggle={() => toggleSection('use-cases')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card className="border-blue-200 bg-blue-50">
              <h3 className="text-xl font-bold mb-2">학부모 통신문 작성</h3>
              <p className="text-lg">학교 행사 안내나 가정 협조를 구하는 통신문을 정중하고 이해하기 쉽게 작성합니다.</p>
            </Card>
            <Card className="border-green-200 bg-green-50">
              <h3 className="text-xl font-bold mb-2">회의록 자동 정리</h3>
              <p className="text-lg">회의 내용을 입력하면 주요 논의사항과 결정사항을 항목별로 정리해 드립니다.</p>
            </Card>
            <Card className="border-purple-200 bg-purple-50">
              <h3 className="text-xl font-bold mb-2">공문 내용 요약</h3>
              <p className="text-lg">길고 복잡한 공문서의 핵심 내용만 추출해 빠른 업무 파악을 도와드립니다.</p>
            </Card>
            <Card className="border-red-200 bg-red-50">
              <h3 className="text-xl font-bold mb-2">연설문/인사말 작성</h3>
              <p className="text-lg">학교 행사나 졸업식 등에서 필요한 연설문을 상황에 맞게 작성합니다.</p>
            </Card>
          </div>

          {/* 확장된 내용 */}
          {expandedSection === 'use-cases' && (
            <div className="mt-6 border-t border-gray-200 pt-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-blue-600 mb-4">교육 현장 활용 데이터</h3>
              
              <div>
                <p className="text-lg bg-gray-50 p-3 rounded-lg">
                  2023년 설문조사 결과: 교원의 <strong>88.9%</strong>가 AI에 관심, 
                  <strong>90.5%</strong>가 "교사 역할 수행에 도움이 된다"고 응답, 
                  활용 희망 분야 1위는 <strong>행정업무 처리(82.2%)</strong>
                </p>
                
                <h4 className="text-lg font-bold text-blue-700 mt-4">구체적인 활용 사례</h4>
                <ul className="mt-2 space-y-2 ml-6 list-disc text-lg">
                  <li>초등학교 교사들: <strong>생태전환교육 프로그램 계획서</strong> 작성으로 시간 절약</li>
                  <li>고등학교 교감: <strong>학교 운영계획 요약본</strong> 작성으로 교사들의 이해 촉진</li>
                  <li>학년부장 교사: <strong>학부모 연수 안내문</strong> 초안 작성으로 업무 효율화</li>
                </ul>
              </div>
            </div>
          )}
        </Section>

        {/* 참고 자료 섹션 */}
        <Section 
          title="참고 자료" 
          isExpanded={expandedSection === 'references'} 
          onToggle={() => toggleSection('references')}
        >
          <ul className="space-y-3">
            <li className="bg-gray-50 p-3 rounded-lg hover:bg-blue-50 transition-all">
              <a 
                href="https://www.ssem.or.kr/job/schMngmt/schAff/cmmEdcDta/cmmEdcDtaView.do?dataSn=261113&courseDataSe=P&secKey=NMTAcHe5nYqp7p7JJw3hvRK%2FBwIl3JdORxaJlKu7WPA%3D" 
                className="text-blue-600 hover:underline flex items-center text-lg" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bg-blue-100 rounded-full p-2 mr-3">📄</span>
                서울시교육청 senGPT 공식 이용 매뉴얼 (PDF)
              </a>
            </li>
            <li className="bg-gray-50 p-3 rounded-lg hover:bg-blue-50 transition-all">
              <a 
                href="https://docs.wrks.ai" 
                className="text-blue-600 hover:underline flex items-center text-lg" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bg-blue-100 rounded-full p-2 mr-3">📘</span>
                웍스AI 사용자 가이드
              </a>
            </li>
            <li className="bg-gray-50 p-3 rounded-lg hover:bg-blue-50 transition-all">
              <a 
                href="https://docs.wrks.ai/use-cases" 
                className="text-blue-600 hover:underline flex items-center text-lg" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bg-blue-100 rounded-full p-2 mr-3">💡</span>
                질문 예시 및 대화 팁
              </a>
            </li>
          </ul>
        </Section>

        {/* 유용한 문서 작성 템플릿 섹션 */}
        <Section 
          title="유용한 문서 작성 템플릿" 
          isExpanded={expandedSection === 'templates'} 
          onToggle={() => toggleSection('templates')}
        >
          <p className="mb-6 text-lg bg-blue-50 p-4 rounded-lg">
            아래 예시를 복사하여 senGPT에 붙여넣고 필요에 맞게 수정하여 사용하세요.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-400 hover:bg-blue-50">
              <h3 className="text-xl font-bold mb-2">학부모 통신문 작성</h3>
              <p className="text-lg italic">클릭하면 템플릿이 표시됩니다</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-400 hover:bg-green-50">
              <h3 className="text-xl font-bold mb-2">회의록 작성/요약</h3>
              <p className="text-lg italic">클릭하면 템플릿이 표시됩니다</p>
            </div>
          </div>
          
          {/* 확장된 내용 */}
          {expandedSection === 'templates' && (
            <div className="mt-6 border-t border-gray-200 pt-6 animate-fadeIn">
              <div className="bg-blue-50 p-5 rounded-lg mb-4">
                <h3 className="text-xl font-bold text-blue-700 mb-3">📝 학부모 통신문 작성</h3>
                <div className="bg-white p-4 rounded border border-blue-200">
                  <p className="mt-2 p-3 bg-gray-50 rounded-lg text-gray-800 text-lg">
                    "당신은 <strong>초등학교 교장</strong>입니다. 다음 주 개최되는 <strong>학부모 총회 안내장</strong>을 작성하세요. 
                    <strong>일시, 장소, 주요 의제</strong>를 포함하고, 학부모님들께 <strong>참석 협조를 구하는 정중한 어투</strong>로 써주세요."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 p-5 rounded-lg">
                <h3 className="text-xl font-bold text-green-700 mb-3">📊 회의록 작성/요약</h3>
                <div className="bg-white p-4 rounded border border-green-200">
                  <p className="mt-2 p-3 bg-gray-50 rounded-lg text-gray-800 text-lg">
                    "지금부터 제가 말하는 것은 <strong>학교 운영위원회 회의 내용</strong>입니다. 이를 토대로 <strong>회의록</strong>을 작성해주세요. 
                    <strong>회의 일시/장소, 참석자, 논의 안건, 결정 사항</strong> 순으로 정리하고, 주요 발언은 요약해서 적어주세요."
                  </p>
                </div>
              </div>
            </div>
          )}
        </Section>

        {/* 푸터 */}
        <footer className="bg-gray-200 rounded-lg p-6 text-center text-gray-600 animate-fadeIn shadow-sm mt-8">
          <p className="text-lg">© 2024 서울특별시교육청</p>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="https://wrks.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-md">웍스AI 바로가기</a>
            <a href="https://docs.wrks.ai/sen" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-md">senGPT 이용안내</a>
            <a href="https://www.ssem.or.kr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-md">서울교육포털</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

// React DOM 렌더링
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SenGPTGuide />);