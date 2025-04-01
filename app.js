const { useState } = React;

// 카드 컴포넌트
const Card = ({ children, className = "" }) => {
  return (
    <div className={`border border-gray-200 rounded-lg ${className}`}>
      <div className="pt-6 px-4 pb-4">{children}</div>
    </div>
  );
};

// CardContent 컴포넌트
const CardContent = ({ children }) => {
  return <div className="pt-6">{children}</div>;
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
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* 헤더 */}
        <header className="bg-blue-700 text-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold mb-2">서울특별시교육청 senGPT 활용 가이드</h1>
              <p className="text-lg md:text-xl">교장/교감 선생님을 위한 AI 비서 활용법</p>
            </div>
            <div className="mt-4 md:mt-0">
              <img 
                src="https://via.placeholder.com/150" 
                alt="senGPT 로고" 
                className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white p-2"
              />
            </div>
          </div>
        </header>

        {/* 소개 섹션 */}
        <section 
          className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 ${expandedSection === 'intro' ? 'ring-2 ring-blue-400' : 'hover:shadow-lg cursor-pointer'}`}
          onClick={() => toggleSection('intro')}
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
            senGPT란?
            <span className="ml-2 text-sm text-blue-500">{expandedSection === 'intro' ? '(접기)' : '(더 보기)'}</span>
          </h2>
          <p className="text-lg mb-4">
            <span className="font-bold">서울시교육청의 업무용 AI 비서</span>로, 서울시내 약 7만 명 교직원에게 제공되는 
            생성형 AI 서비스입니다. OpenAI의 최신 GPT-4 모델(GPT-4o)을 기반으로 하며, 
            교직원들은 <span className="bg-yellow-100 px-1">무제한 무료</span>로 대화를 이용할 수 있습니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Card className="bg-blue-50 border-blue-200 transition-transform duration-200 hover:scale-105">
              <CardContent>
                <h3 className="text-xl font-bold text-blue-700 mb-2">💼 교육 행정 업무 효율화</h3>
                <p>문서 작성, 회의록 정리, 가정통신문 초안 작성 등 다양한 행정 업무를 도와 업무 부담을 경감합니다.</p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-200 transition-transform duration-200 hover:scale-105">
              <CardContent>
                <h3 className="text-xl font-bold text-green-700 mb-2">📚 서울교육청 전용 지식</h3>
                <p>학생부 작성 요령, 학적 업무, 각종 법령 등 교육청 자료를 학습한 AI가 출처와 함께 답변합니다.</p>
              </CardContent>
            </Card>
          </div>

          {/* 확장된 내용 */}
          {expandedSection === 'intro' && (
            <div className="mt-6 border-t border-gray-200 pt-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-blue-600 mb-3">senGPT의 핵심 목표</h3>
              <p className="mb-4">
                senGPT의 핵심 목표는 교사·행정직원의 문서 작성과 행정 업무를 도와 <strong>업무 효율을 높이는 것</strong>입니다. 
                이는 교직원들이 행정 부담에서 벗어나 보다 중요한 교육 활동에 집중할 수 있도록 지원하는 디지털 조력자 역할을 합니다.
              </p>
              
              <h3 className="text-xl font-bold text-blue-600 mb-3 mt-5">주요 특징</h3>
              <ul className="space-y-4 ml-6 list-disc">
                <li>
                  <span className="font-semibold">서울교육청 전용 AI 지식 베이스:</span> 
                  <p className="mt-1">초·중등교육법, 학생부 작성 요령, 학적 업무 매뉴얼 등을 학습한 비서들은 관련 질문에 답하면서 출처 자료를 함께 제시합니다.</p>
                  <p className="text-sm text-yellow-600 mt-1">※ 다만 출처가 표시되더라도 AI 답변이 항상 정확한 것은 아니므로, 최종 결정을 위해서는 원본 매뉴얼을 직접 확인해야 합니다.</p>
                </li>
                <li>
                  <span className="font-semibold">다양한 "비서" 기능 제공:</span> 
                  <p className="mt-1">업무 상황별로 미리 준비된 AI 비서들(개조식 내용정리, 회의록 작성, 문서 검토 등)이 있어 각 비서의 특성에 맞는 도움을 받을 수 있습니다.</p>
                </li>
                <li>
                  <span className="font-semibold">멀티모달 활용:</span> 
                  <p className="mt-1">텍스트 답변뿐 아니라 '그림 그리기' 기능을 통해 학교 홍보 포스터 이미지와 같은 시각적 콘텐츠도 생성할 수 있습니다.</p>
                </li>
              </ul>
              
              <div className="mt-5 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-700">더 알아보기</h4>
                <p className="text-sm mt-2">
                  자세한 내용은 <a href="https://lilys.ai/notes/604716" target="_blank" className="text-blue-600 hover:underline">서울특별시교육청 senGPT 구축 사례(표철민 AI3 대표)</a>를 참고하세요.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* 주요 기능 섹션 */}
        <section 
          className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 ${expandedSection === 'features' ? 'ring-2 ring-blue-400' : 'hover:shadow-lg cursor-pointer'}`}
          onClick={() => toggleSection('features')}
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
            주요 기능
            <span className="ml-2 text-sm text-blue-500">{expandedSection === 'features' ? '(접기)' : '(더 보기)'}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 transition-all duration-200 hover:bg-blue-50 hover:border-blue-200">
              <div className="text-3xl mb-2">📝</div>
              <h3 className="text-xl font-bold mb-2">다양한 비서 기능</h3>
              <p>회의록 작성, 개조식 내용정리, 문서 검토, 데이터 분석 등 업무별 맞춤 AI 비서를 선택해 활용할 수 있습니다.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 transition-all duration-200 hover:bg-blue-50 hover:border-blue-200">
              <div className="text-3xl mb-2">🔍</div>
              <h3 className="text-xl font-bold mb-2">문서 검토 능력</h3>
              <p>PDF, 워드, 파워포인트 파일을 업로드하여 내용 질의응답, 요약 등을 할 수 있어 방대한 자료를 빠르게 파악합니다.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 transition-all duration-200 hover:bg-blue-50 hover:border-blue-200">
              <div className="text-3xl mb-2">✏️</div>
              <h3 className="text-xl font-bold mb-2">나만의 비서 생성</h3>
              <p>자주 사용하는 업무에 맞춘 AI 비서를 직접 만들고 설정하여 반복 작업의 효율을 높일 수 있습니다.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 transition-all duration-200 hover:bg-blue-50 hover:border-blue-200">
              <div className="text-3xl mb-2">🖼️</div>
              <h3 className="text-xl font-bold mb-2">이미지 생성</h3>
              <p>학교 홍보 포스터, 행사 안내 이미지 등을 '그림 그리기' 기능으로 간편하게 생성할 수 있습니다.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 transition-all duration-200 hover:bg-blue-50 hover:border-blue-200">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="text-xl font-bold mb-2">데이터 분석</h3>
              <p>엑셀 파일을 업로드하여 데이터 분석, 계산, 보고서 작성 등을 도와주는 기능을 활용할 수 있습니다.</p>
            </div>
          </div>

          {/* 확장된 내용 */}
          {expandedSection === 'features' && (
            <div className="mt-6 border-t border-gray-200 pt-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-blue-600 mb-4">비서 기능 상세 설명</h3>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-blue-700">「개조식 내용정리」 비서</h4>
                  <p className="mt-2">긴 문서를 요점 위주로 개조식 정리해주는 비서입니다. 공문, 보고서 등 길고 복잡한 문서의 핵심만을 빠르게 파악하고자 할 때 유용합니다.</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-blue-700">「회의록 작성」 비서</h4>
                  <p className="mt-2">회의 내용을 입력하면 자동으로 회의록 초안을 작성해주는 비서입니다. 참석자, 안건, 논의 사항, 결정 사항 등을 체계적으로 정리합니다.</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-blue-700">「문서 검토」 비서</h4>
                  <p className="mt-2">PDF, 워드(DOCX), 파워포인트(PPTX) 파일 등을 업로드하여 내용에 대해 질문하거나 요약받을 수 있습니다. 최대 512MB 크기의 파일을 분석할 수 있어 방대한 공문이나 보고서를 빠르게 파악할 수 있습니다.</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-blue-700">「데이터 분석」 비서</h4>
                  <p className="mt-2">엑셀 파일을 올려 계산이나 데이터 편집을 수행합니다. 학생 성적 분석, 예산 계산, 각종 통계 작업 등을 도와줍니다.</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-blue-700">「파워포인트 기획」 비서</h4>
                  <p className="mt-2">입력한 자료를 토대로 PPT 기획안 초안까지 자동 생성해줍니다. 학교 발표 자료, 회의 자료 등을 준비할 때 활용할 수 있습니다.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-blue-600 mb-4 mt-8">맞춤형 비서 생성 방법</h3>
              <p className="mb-4">
                비서 설정 시 <strong>"문서 검토" 능력</strong>을 켜두면 PDF, PPTX, DOCX 등의 파일을 업로드해 그 내용에 대한 질의응답이나 요약을 할 수 있고, 
                <strong>"숫자 분석" 능력</strong>을 켜두면 ChatGPT의 코드 해석 기능을 활용해 엑셀 데이터 처리나 통계 계산도 수행할 수 있습니다.
              </p>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-bold text-yellow-700">참고사항</h4>
                <p className="mt-2">
                  현재 HWPX 한글 파일은 지원하지 않지만, 향후 지원 예정입니다. 필요에 따라 해당 능력들을 켜거나 꺼서 비서가 파일을 참조할지 여부를 조절할 수 있습니다.
                </p>
              </div>
              
              <div className="mt-5 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-700">더 알아보기</h4>
                <p className="text-sm mt-2">
                  자세한 기능 설명은 <a href="https://docs.wrks.ai/sen" target="_blank" className="text-blue-600 hover:underline">서울시교육청 senGPT 이용안내 | Wrks</a>를 참조하세요.
                </p>
              </div>
            </div>
          )}
        </section>
{/* 시작하기 섹션 */}
        <section 
          className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 ${expandedSection === 'getting-started' ? 'ring-2 ring-blue-400' : 'hover:shadow-lg cursor-pointer'}`}
          onClick={() => toggleSection('getting-started')}
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
            시작하기
            <span className="ml-2 text-sm text-blue-500">{expandedSection === 'getting-started' ? '(접기)' : '(더 보기)'}</span>
          </h2>
          <div className="space-y-4">
            <div className="flex items-start transition-all duration-200 hover:bg-gray-50 p-2 rounded-lg">
              <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 mt-1 flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold">계정 가입</h3>
                <p className="mt-1">
                  <a href="https://wrks.ai" className="text-blue-600 hover:underline" target="_blank">웍스AI 공식 사이트(wrks.ai)</a>에 접속한 후 우측 상단의 "이메일로 시작하기"를 클릭하세요. 
                  서울시교육청 공식 이메일(@sen.go.kr)로 가입하고 인증 메일을 확인합니다.
                </p>
              </div>
            </div>
            <div className="flex items-start transition-all duration-200 hover:bg-gray-50 p-2 rounded-lg">
              <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 mt-1 flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold">비서 선택</h3>
                <p className="mt-1">
                  로그인 후 웍스AI 대시보드에서 원하는 비서를 선택합니다. 
                  "웍스 공식 비서"와 "서울시교육청 전용 비서" 중에서 업무에 맞는 AI를 고르세요.
                </p>
              </div>
            </div>
            <div className="flex items-start transition-all duration-200 hover:bg-gray-50 p-2 rounded-lg">
              <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 mt-1 flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold">대화 시작</h3>
                <p className="mt-1">
                  선택한 비서와 채팅을 시작합니다. 원하는 질문이나 작업을 입력하면 AI가 응답합니다. 
                  맥락을 유지한 채 추가 질문도 가능합니다.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="text-lg font-bold text-yellow-700 mb-2">💡 도움말</h3>
            <p>
              인증 메일이 오지 않는다면, SEN 이메일 계정이 휴면 상태인지 확인하세요. 
              오랫동안 웹메일을 사용하지 않은 경우 웹메일에 먼저 접속해 계정을 활성화하면 됩니다.
            </p>
          </div>

          {/* 확장된 내용 */}
          {expandedSection === 'getting-started' && (
            <div className="mt-6 border-t border-gray-200 pt-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-blue-600 mb-4">상세 가입 및 사용 방법</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-blue-700">계정 가입 상세 절차</h4>
                  <ol className="mt-3 space-y-3 ml-6 list-decimal">
                    <li>
                      <a href="https://wrks.ai" target="_blank" className="text-blue-600 hover:underline">웍스AI 공식 사이트</a>에 접속합니다.
                    </li>
                    <li>
                      우측 상단의 "이메일로 시작하기" 버튼을 클릭합니다.
                    </li>
                    <li>
                      "회원가입" 탭을 선택하고 본인의 서울시교육청 공식 이메일(@sen.go.kr) 주소와 비밀번호를 설정합니다.
                    </li>
                    <li>
                      SEN 웹메일에 로그인하여 받은 인증 메일의 "이메일 인증" 버튼을 클릭합니다.
                    </li>
                    <li>
                      인증 완료 후 다시 웍스AI 사이트로 돌아가 "로그인" 탭에서 방금 가입한 SEN 이메일과 비밀번호로 로그인합니다.
                    </li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-blue-700">기본 인터페이스 이해</h4>
                  <p className="mt-2">
                    로그인 성공 시 서울시교육청 전용 웍스AI 대시보드에 접속됩니다. 처음 화면에서는 다음과 같은 구성을 확인할 수 있습니다:
                  </p>
                  <ul className="mt-3 space-y-3 ml-6 list-disc">
                    <li>
                      <span className="font-semibold">웍스 공식 비서:</span> 일반 기업/기관 공통으로 제공되는 AI 도구들로, 내용 정리, 회의록 작성, 문서 검토, 데이터 분석, PPT 기획 등 업무 지원용 기본 비서들이 포함되어 있습니다.
                    </li>
                    <li>
                      <span className="font-semibold">서울시교육청 전용 비서:</span> 교육청 특화 비서들로, 교육 관련 법령 질의, 학사업무 도움 등 서울교육청 최신 매뉴얼을 반영한 AI들이 있습니다.
                    </li>
                    <li>
                      <span className="font-semibold">나만의 비서:</span> 화면 우측 하단의 "나만의 비서 만들기" 버튼을 클릭하면 사용자가 임의로 새로운 비서를 생성할 수 있습니다.
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-blue-700">GPT 모델 선택</h4>
                  <p className="mt-2">
                    senGPT 환경에는 기본적으로 OpenAI GPT-3.5 수준의 모델이 적용된 <strong>"티키타카 장인"</strong> 비서와, 
                    더 성능이 높은 <strong>GPT-4 기반</strong>의 <strong>"신중한 똑쟁이"</strong> 비서 등이 있습니다.
                  </p>
                  <p className="mt-2">
                    일반적인 작업은 티키타카 장인으로도 가능하지만, 보다 깊이 있는 답변이나 고품질 생성을 원할 경우 
                    신중한 똑쟁이 비서(GPT-4o)를 선택하면 됩니다.
                  </p>
                </div>
              </div>
              
              <div className="mt-5 bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-700">보안 및 비용 안내</h4>
                <p className="mt-2">
                  <strong>senGPT에서 이루어지는 모든 대화는 무료</strong>이며, 민감한 대화 내용이라도 교육청 전용 공간에서 이뤄지므로 
                  <strong>보안</strong>이 확보된 상태에서 안심하고 활용하실 수 있습니다.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* 주요 활용 사례 */}
        <section 
          className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 ${expandedSection === 'use-cases' ? 'ring-2 ring-blue-400' : 'hover:shadow-lg cursor-pointer'}`}
          onClick={() => toggleSection('use-cases')}
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
            교육 현장 활용 사례
            <span className="ml-2 text-sm text-blue-500">{expandedSection === 'use-cases' ? '(접기)' : '(더 보기)'}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-gray-200 transition-all duration-200 hover:shadow-lg hover:border-blue-200">
              <CardContent>
                <h3 className="text-xl font-bold mb-2">학부모 통신문 작성</h3>
                <p>학교 행사를 안내하거나 가정 협조를 구하는 통신문을 작성할 때, senGPT가 정중하고 이해하기 쉬운 가정통신문 초안을 만들어 줍니다.</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200 transition-all duration-200 hover:shadow-lg hover:border-blue-200">
              <CardContent>
                <h3 className="text-xl font

<h3 className="text-xl font-bold mb-2">회의록 자동 정리</h3>
                <p>회의가 끝난 후 주요 논의사항과 결정사항을 텍스트로 정리하여 입력하면, 항목별로 깔끔하게 정리된 회의록 초안을 얻을 수 있습니다.</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200 transition-all duration-200 hover:shadow-lg hover:border-blue-200">
              <CardContent>
                <h3 className="text-xl font-bold mb-2">공문 내용 요약</h3>
                <p>교육청이나 교육지원청에서 받은 길고 복잡한 공문서를 이해해야 할 때, 핵심만 뽑아 요약본을 제공받아 신속한 업무 파악이 가능합니다.</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200 transition-all duration-200 hover:shadow-lg hover:border-blue-200">
              <CardContent>
                <h3 className="text-xl font-bold mb-2">연설문/인사말 작성</h3>
                <p>학교 행사나 졸업식 등에서 필요한 연설문이나 인사말을 상황과 청중에 맞게 작성해 줍니다.</p>
              </CardContent>
            </Card>
          </div>

          {/* 확장된 내용 */}
          {expandedSection === 'use-cases' && (
            <div className="mt-6 border-t border-gray-200 pt-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-blue-600 mb-4">교육 현장 실제 활용 사례 및 예시</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-blue-700">국내 교육기관 활용 현황</h4>
                  <p className="mt-2">
                    2023년 서울시교육청이 실시한 설문조사에 따르면, 응답한 교원 5217명 중 <strong>88.9%</strong>가 챗GPT 등 AI에 관심이 있다고 답했고, 
                    <strong>70.1%</strong>는 이미 사용 경험이 있다고 했습니다. 특히 <strong>90.5%</strong>에 달하는 다수 교원이 
                    "챗GPT가 교사의 역할 수행에 도움이 된다"고 보았으며, 활용을 원하는 분야 1위로 <strong>행정업무 처리(82.2%)</strong>를 꼽았습니다.
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-bold text-gray-700">구체적인 활용 예시</h5>
                    <ul className="mt-2 space-y-2 ml-6 list-disc">
                      <li>한 초등학교에서는 교사들이 챗GPT를 통해 저학년 대상 <strong>생태전환교육 프로그램 계획서</strong> 등 업무 관련 문서를 작성하여 시간을 절약했습니다.</li>
                      <li>서울의 한 고등학교 교감선생님은 senGPT로 <strong>학교 운영계획 요약본</strong>을 뽑아 교사들에게 공유함으로써 이해를 도왔습니다.</li>
                      <li>학년부장 교사는 <strong>학부모 연수 안내문</strong>을 AI 초안으로 만들어 시간을 절약했습니다.</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-blue-700">해외 학교 사례</h4>
                  <p className="mt-2">
                    해외 학교 관리자들도 행정 업무에 AI를 적극 도입하고 있습니다. 미국의 한 교육 전문 매체 보도에 따르면, 
                    <strong>여러 학교의 교장들이 챗GPT와 같은 AI 챗봇을 활용해 번거로운 행정 업무를 "아웃소싱"하는 추세</strong>가 나타나고 있습니다.
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-bold text-gray-700">주요 활용 사례</h5>
                    <ul className="mt-2 space-y-2 ml-6 list-disc">
                      <li>화가 난 학부모에게 보내는 어려운 이메일 초안 작성</li>
                      <li>마련하기 까다로운 시간표 조정</li>
                      <li>최신 교육 트렌드에 맞춘 교사 연수 프로그램 계획</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 참고 자료 섹션 */}
        <section 
          className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 ${expandedSection === 'references' ? 'ring-2 ring-blue-400' : 'hover:shadow-lg cursor-pointer'}`}
          onClick={() => toggleSection('references')}
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
            참고 자료
            <span className="ml-2 text-sm text-blue-500">{expandedSection === 'references' ? '(접기)' : '(더 보기)'}</span>
          </h2>
          <ul className="space-y-3">
            <li className="transition-all duration-200 hover:bg-blue-50 p-2 rounded-lg">
              <a 
                href="https://www.ssem.or.kr/job/schMngmt/schAff/cmmEdcDta/cmmEdcDtaView.do?dataSn=261113&courseDataSe=P&secKey=NMTAcHe5nYqp7p7JJw3hvRK%2FBwIl3JdORxaJlKu7WPA%3D" 
                className="text-blue-600 hover:underline flex items-center" 
                target="_blank"
              >
                <span className="bg-gray-100 rounded-full p-1 mr-2">📄</span>
                서울시교육청 senGPT 공식 이용 매뉴얼 (PDF)
              </a>
            </li>
            <li className="transition-all duration-200 hover:bg-blue-50 p-2 rounded-lg">
              <a 
                href="https://docs.wrks.ai" 
                className="text-blue-600 hover:underline flex items-center" 
                target="_blank"
              >
                <span className="bg-gray-100 rounded-full p-1 mr-2">📘</span>
                웍스AI 사용자 가이드
              </a>
            </li>
            <li className="transition-all duration-200 hover:bg-blue-50 p-2 rounded-lg">
              <a 
                href="https://docs.wrks.ai/use-cases" 
                className="text-blue-600 hover:underline flex items-center" 
                target="_blank"
              >
                <span className="bg-gray-100 rounded-full p-1 mr-2">💡</span>
                질문 예시 및 대화 팁
              </a>
            </li>
            <li className="transition-all duration-200 hover:bg-blue-50 p-2 rounded-lg">
              <a 
                href="https://lilys.ai/notes/604716" 
                className="text-blue-600 hover:underline flex items-center" 
                target="_blank"
              >
                <span className="bg-gray-100 rounded-full p-1 mr-2">🎥</span>
                서울특별시교육청 senGPT 구축 사례 (표철민 AI3 대표 발표)
              </a>
            </li>
          </ul>

          {/* 확장된 내용 */}
          {expandedSection === 'references' && (
            <div className="mt-6 border-t border-gray-200 pt-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-blue-600 mb-4">추가 학습 자료</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-blue-700">서울특별시교육청 교원 연수 영상</h4>
                  <p className="mt-2">
                    2023년 서울시교육청 교육연수원에서 진행한 「교장·교감·장학사를 위한 GPT와 미래교육 활용 특강」 영상입니다.
                    생성형 AI의 등장 배경부터 학교 현장에서의 활용 시연까지 폭넓게 다루고 있습니다.
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    유튜브에서 "교장 교감 GPT 특강 서울교육청"으로 검색하면 시청하실 수 있습니다.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-blue-700">언론 보도 자료</h4>
                  <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-bold text-gray-700">교원 설문조사 결과 기사</h5>
                    <p className="mt-2">
                      뉴스핌 보도: <a href="https://www.newspim.com/news/view/20230406000541" target="_blank" className="text-blue-600 hover:underline">「서울 교사 90% '챗GPT, 행정업무·학습활동 도움 된다'」</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 유용한 문서 작성 템플릿 섹션 */}
        <section 
          className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 ${expandedSection === 'templates' ? 'ring-2 ring-blue-400' : 'hover:shadow-lg cursor-pointer'}`}
          onClick={() => toggleSection('templates')}
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
            유용한 문서 작성 템플릿
            <span className="ml-2 text-sm text-blue-500">{expandedSection === 'templates' ? '(접기)' : '(더 보기)'}</span>
          </h2>
          
          <p className="mb-6">
            교육 현장에서 바로 활용할 수 있는 생성형 AI 프롬프트 템플릿입니다. 
            아래 예시를 참고하여 본인 업무에 맞게 변형해 사용해보세요.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 transition-all duration-200 hover:bg-blue-50 hover:border-blue-200">
              <h3 className="text-lg font-bold mb-2">학부모 통신문 작성</h3>
              <p className="text-sm italic">클릭하면 템플릿이 표시됩니다</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 transition-all duration-200 hover:bg-blue-50 hover:border-blue-200">
              <h3 className="text-lg font-bold mb-2">회의록 작성/요약</h3>
              <p className="text-sm italic">클릭하면 템플릿이 표시됩니다</p>
            </div>
          </div>
          
          {/* 확장된 내용 */}
          {expandedSection === 'templates' && (
            <div className="mt-6 border-t border-gray-200 pt-6 animate-fadeIn">
              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-3">📝 학부모 통신문 작성</h3>
                <div className="bg-white p-4 rounded border border-blue-200">
                  <p className="font-medium text-blue-800">프롬프트 템플릿:</p>
                  <p className="mt-2 p-3 bg-gray-50 rounded text-gray-800">
                    "당신은 <strong>초등학교 교장</strong>입니다. 다음 주 개최되는 <strong>학부모 총회 안내장</strong>을 작성하세요. 
                    <strong>일시, 장소, 주요 의제</strong>를 포함하고, 학부모님들께 <strong>참석 협조를 구하는 정중한 어투</strong>로 써주세요."
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg mt-4">
                <h3 className="text-xl font-bold text-blue-700 mb-3">📊 회의록 작성/요약</h3>
                <div className="bg-white p-4 rounded border border-blue-200">
                  <p className="font-medium text-blue-800">프롬프트 템플릿:</p>
                  <p className="mt-2 p-3 bg-gray-50 rounded text-gray-800">
                    "지금부터 제가 말하는 것은 <strong>학교 운영위원회 회의 내용</strong>입니다. 이를 토대로 <strong>회의록</strong>을 작성해주세요. 
                    <strong>회의 일시/장소, 참석자, 논의 안건, 결정 사항</strong> 순으로 정리하고, 주요 발언은 요약해서 적어주세요."
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 푸터 */}
        <footer className="bg-gray-100 rounded-lg p-6 text-center text-gray-600 animate-fadeIn">
          <p className="text-sm">© 2025 안양 박달초 김문정</p>
          <p className="text-xs mt-1">본 가이드는 서울특별시 성북강북교육지원청 소속 교장 및 교감 선생님들을 위한 교육 자료입니다.</p>
          <div className="flex justify-center mt-3 space-x-4">
            <a href="https://wrks.ai" target="_blank" className="text-blue-600 hover:underline text-xs">웍스AI 바로가기</a>
            <a href="https://docs.wrks.ai/sen" target="_blank" className="text-blue-600 hover:underline text-xs">senGPT 이용안내</a>
            <a href="https://www.ssem.or.kr" target="_blank" className="text-blue-600 hover:underline text-xs">서울교육포털</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

// React DOM 렌더링
const rootElement = document.getElementById("root");
ReactDOM.render(<SenGPTGuide />, rootElement);