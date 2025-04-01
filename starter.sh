#!/bin/bash

# GitHub에 호스팅하기 위한 기본 파일 구조 생성 스크립트

# 디렉토리 생성
mkdir -p sengpt-guide
cd sengpt-guide

# index.html 파일 생성
cat > index.html << 'EOL'
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>서울특별시교육청 senGPT 활용 가이드</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body class="bg-gray-50">
  <div id="root"></div>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel" src="app.js"></script>
</body>
</html>
EOL

# styles.css 파일 생성
cat > styles.css << 'EOL'
/* senGPT 가이드 애니메이션 CSS */

/* 페이드인 애니메이션 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.4s ease-in-out;
}

/* 확장/축소 애니메이션 */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* 호버 효과 */
.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:bg-blue-50:hover {
  background-color: #eff6ff;
}

.hover\:border-blue-200:hover {
  border-color: #bfdbfe;
}

.hover\:bg-yellow-50:hover {
  background-color: #fefce8;
}

.hover\:border-yellow-200:hover {
  border-color: #fef08a;
}

/* 클릭 효과 - 확장된 섹션 */
.ring-2 {
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #60a5fa;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

/* 카드 스타일 */
.card {
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card-content {
  padding-top: 1.5rem;
}

/* 반응형 디자인을 위한 미디어 쿼리 */
@media (max-width: 768px) {
  .text-2xl {
    font-size: 1.5rem;
  }
  .p-6 {
    padding: 1rem;
  }
  .gap-6 {
    gap: 1rem;
  }
}

/* 포커스 시각적 표시 - 접근성 향상 */
*:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* 터치 장치를 위한 최적화 */
@media (hover: none) {
  .hover\:scale-105:hover {
    transform: none;
  }
}

/* 추가 Tailwind 스타일 확장 */
.bg-blue-50 {
  background-color: #eff6ff;
}

.bg-blue-700 {
  background-color: #1d4ed8;
}

.text-blue-500 {
  color: #3b82f6;
}

.text-blue-600 {
  color: #2563eb;
}

.text-blue-700 {
  color: #1d4ed8;
}

.bg-green-50 {
  background-color: #f0fdf4;
}

.text-green-700 {
  color: #15803d;
}

.bg-yellow-50 {
  background-color: #fefce8;
}

.text-yellow-600 {
  color: #ca8a04;
}

.text-yellow-700 {
  color: #a16207;
}

.border-yellow-200 {
  border-color: #fef08a;
}

.border-blue-200 {
  border-color: #bfdbfe;
}

.border-green-200 {
  border-color: #bbf7d0;
}

.cursor-pointer {
  cursor: pointer;
}
EOL

# README.md 파일 생성
cat > README.md << 'EOL'
# 서울특별시교육청 senGPT 활용 가이드

이 프로젝트는 서울특별시 성북강북교육지원청 소속 교장 및 교감 선생님들을 위한 senGPT 활용 가이드 웹 애플리케이션입니다.

## 소개

본 웹 애플리케이션은 50-60대 사용자를 고려한 직관적인 인터페이스로 설계되었으며, 교육 현장에서 AI 비서를 효과적으로 활용할 수 있는 방법을 안내합니다. 생성형 AI에 대한 이해도가 낮은 사용자도 쉽게 접근할 수 있도록 시각적으로 명확하게 구성되어 있습니다.

## 주요 기능

- **확장 가능한 섹션**: 각 섹션을 클릭하면 더 상세한 정보를 볼 수 있습니다.
- **반응형 디자인**: 데스크톱, 태블릿, 모바일 등 다양한 화면 크기에 최적화되어 있습니다.
- **시각적 피드백**: 호버 효과와 상호작용 요소로 사용자 경험을 향상시켰습니다.
- **외부 자료 링크**: 서울시교육청의 공식 자료에 대한 링크를 제공합니다.

## 설치 및 실행 방법

1. 이 저장소#!/bin/bash

# GitHub에 호스팅하기 위한 기본 파일 구조 생성 스크립트

# 디렉토리 생성
mkdir -p sengpt-guide
cd sengpt-guide

# index.html 파일 생성
cat > index.html << 'EOL'
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>서울특별시교육청 senGPT 활용 가이드</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body class="bg-gray-50">
  <div id="root"></div>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel" src="app.js"></script>
</body>
</html>
EOL

# styles.css 파일 생성
cat > styles.css << 'EOL'
/* senGPT 가이드 애니메이션 CSS */

/* 페이드인 애니메이션 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.4s ease-in-out;
}

/* 확장/축소 애니메이션 */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* 호버 효과 */
.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:bg-blue-50:hover {
  background-color: #eff6ff;
}

.hover\:border-blue-200:hover {
  border-color: #bfdbfe;
}

.hover\:bg-yellow-50:hover {
  background-color: #fefce8;
}

.hover\:border-yellow-200:hover {
  border-color: #fef08a;
}

/* 클릭 효과 - 확장된 섹션 */
.ring-2 {
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #60a5fa;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

/* 카드 스타일 */
.card {
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card-content {
  padding-top: 1.5rem;
}

/* 반응형 디자인을 위한 미디어 쿼리 */
@media (max-width: 768px) {
  .text-2xl {
    font-size: 1.5rem;
  }
  .p-6 {
    padding: 1rem;
  }
  .gap-6 {
    gap: 1rem;
  }
}

/* 포커스 시각적 표시 - 접근성 향상 */
*:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* 터치 장치를 위한 최적화 */
@media (hover: none) {
  .hover\:scale-105:hover {
    transform: none;
  }
}

/* 추가 Tailwind 스타일 확장 */
.bg-blue-50 {
  background-color: #eff6ff;
}

.bg-blue-700 {
  background-color: #1d4ed8;
}

.text-blue-500 {
  color: #3b82f6;
}

.text-blue-600 {
  color: #2563eb;
}

.text-blue-700 {
  color: #1d4ed8;
}

.bg-green-50 {
  background-color: #f0fdf4;
}

.text-green-700 {
  color: #15803d;
}

.bg-yellow-50 {
  background-color: #fefce8;
}

.text-yellow-600 {
  color: #ca8a04;
}

.text-yellow-700 {
  color: #a16207;
}

.border-yellow-200 {
  border-color: #fef08a;
}

.border-blue-200 {
  border-color: #bfdbfe;
}

.border-green-200 {
  border-color: #bbf7d0;
}

.cursor-pointer {
  cursor: pointer;
}
EOL

# README.md 파일 생성
cat > README.md << 'EOL'
# 서울특별시교육청 senGPT 활용 가이드

이 프로젝트는 서울특별시 성북강북교육지원청 소속 교장 및 교감 선생님들을 위한 senGPT 활용 가이드 웹 애플리케이션입니다.

## 소개

본 웹 애플리케이션은 50-60대 사용자를 고려한 직관적인 인터페이스로 설계되었으며, 교육 현장에서 AI 비서를 효과적으로 활용할 수 있는 방법을 안내합니다. 생성형 AI에 대한 이해도가 낮은 사용자도 쉽게 접근할 수 있도록 시각적으로 명확하게 구성되어 있습니다.

## 주요 기능

- **확장 가능한 섹션**: 각 섹션을 클릭하면 더 상세한 정보를 볼 수 있습니다.
- **반응형 디자인**: 데스크톱, 태블릿, 모바일 등 다양한 화면 크기에 최적화되어 있습니다.
- **시각적 피드백**: 호버 효과와 상호작용 요소로 사용자 경험을 향상시켰습니다.
- **외부 자료 링크**: 서울시교육청의 공식 자료에 대한 링크를 제공합니다.

## 설치 및 실행 방법

1. 이 저장소를 클론합니다.
```
git clone https://github.com/yourusername/sengpt-guide.git
```

2. 프로젝트 디렉토리로 이동합니다.
```
cd sengpt-guide
```

3. 로컬 서버를 실행합니다.
간단히 로컬에서 테스트하려면 Node.js의 `http-server`를 사용할 수 있습니다:
```
npx http-server
```
또는 어떤 정적 파일 서버를 사용해도 됩니다.

4. 웹 브라우저에서 `http://localhost:8080`(또는 서버가 알려주는 URL)으로 접속합니다.

## 파일 구성

- `index.html`: 기본 HTML 구조
- `styles.css`: 스타일 및 애니메이션 
- `app.js`: React 컴포넌트 및 기능 구현

## 라이선스

© 2025 안양 박달초 김문정
EOL

# 디렉토리 생성 및 app.js 조각들 저장 준비
mkdir -p js_parts

# app.js 첫 번째 부분 생성
cat > js_parts/app_part1.js << 'EOL'
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
EOL

# app.js 두 번째 부분 생성
cat > js_parts/app_part2.js << 'EOL'
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
EOL

# app.js 세 번째 부분 생성
cat > js_parts/app_part3.js << 'EOL'
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
EOL

# app.js 네 번째 부분 생성
cat > js_parts/app_part4.js << 'EOL'
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
              </div>
            </div>
          )}
        </section>
EOL

# app.js 다섯 번째 부분 생성
cat > js_parts/app_part5.js << 'EOL'
        {/* 활용 사례 및 팁 섹션 */}
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
        </section>

        {/* 참고 자료 섹션 */}
        <section 
          className={`bg-white rounded-lg shadow-m

# app.js 여섯 번째 부분 생성
cat > js_parts/app_part6.js << 'EOL'
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
EOL

# 파일 조각들 합치기
cat js_parts/app_part*.js > app.js

# 불필요한 디렉토리 제거
rm -rf js_parts

echo "모든 파일이 성공적으로 생성되었습니다!"
echo "필요한 파일 목록:"
echo "- index.html (HTML 기본 구조)"
echo "- styles.css (CSS 스타일)"
echo "- app.js (React 애플리케이션 코드)"
echo "- README.md (프로젝트 설명)"

echo "GitHub Pages에 호스팅하려면 다음 단계를 따르세요:"
echo "1. GitHub 계정에 새 저장소 생성"
echo "2. 파일들을 저장소에 푸시"
echo "3. 저장소 설정 > Pages에서 GitHub Pages 활성화"