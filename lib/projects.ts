export type Impact = {
  value: string;
  suffix?: string;
  trend?: "up" | "down" | "neutral";
  label: string;
};

export type Project = {
  id: string;
  title: { kr: string; en: string };
  summary: string;
  tags: string[];
  lede: string;
  meta: { period: string; role: string; team: string; stack: string };
  problem: string;
  approach: string[];
  impact: Impact[];
  reflections: string;
  detailTags: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: { kr: "SKT Air / NewPoc", en: "SKT Air / NewPoc" },
    summary:
      "SK텔레콤 신규 서비스 구축부터 운영까지 병행. HTML/CSS 기반 UI 개발, 신규 구축 단계부터 현재 운영 단계까지 담당.",
    tags: ["Scss", "Responsive", "WebView"],
    lede: "SK텔레콤의 신규 서비스 NewPoc 구축을 시작으로, Air 서비스 운영까지 이어진 프로젝트. 소개 영역은 반응형으로, 앱 내 웹뷰 영역은 별도 환경으로 구분하여 개발하며 구축과 운영을 병행하고 있습니다.",
    meta: {
      period: "2025.07 — 현재",
      role: "UI/UX 개발",
      team: "SK텔레콤",
      stack: "HTML · Scss · Figma · Git",
    },
    problem:
      "신규 서비스 NewPoc의 UI 구축을 시작으로, Air 서비스 운영 단계까지 연속적으로 대응해야 했습니다. 소개 페이지(반응형)와 앱 내 웹뷰 영역을 구분하여 각각의 환경에 맞게 구현하면서 일관된 품질을 유지하는 것이 핵심 과제였습니다.",
    approach: [
      "소개 영역: 반응형 레이아웃 기반 HTML/Scss 퍼블리싱",
      "웹뷰 영역: 앱 환경에 최적화된 별도 구조로 개발",
      "NewPoc 신규 구축 (2025.07 ~ 2025.09) → Air 운영 전환 (2025.10 ~ 현재)",
      "Figma 디자인 기준 화면 구현 및 디자인 협업",
      "Git을 통한 소스 형상 관리",
    ],
    impact: [
      { value: "구축→운영", label: "전 단계 담당" },
      { value: "현재", label: "운영 진행 중" },
      { value: "SK텔레콤", label: "클라이언트" },
    ],
    reflections:
      "신규 구축부터 운영까지 하나의 흐름으로 이어지는 경험을 통해, 초기 설계의 유연성이 운영 단계의 대응력을 얼마나 좌우하는지 체감하고 있습니다.",
    detailTags: ["HTML", "Scss", "Figma", "Git", "Responsive", "Cross-browsing"],
  },
  {
    id: "02",
    title: { kr: "바이널씨 디자인 시스템", en: "Vinyl C Design System" },
    summary:
      "디자인팀과 함께 Figma Variables 기반 토큰 구조 설계. React + Tailwind 환경에서 변수·토큰 체계를 정의하고, 사이드 프로젝트로 Figma 플러그인을 출시.",
    tags: ["React", "Tailwind", "Design Tokens"],
    lede: "바이널씨 디자인팀과 협업하여 Figma Variables 기반의 디자인 토큰 구조를 설계하고, React + Tailwind 라이브러리 환경과의 연결 체계를 함께 정의한 사내 디자인 시스템 프로젝트. 이후 관련 Figma 플러그인을 사이드 프로젝트로 출시했습니다.",
    meta: {
      period: "2026.04 — 현재",
      role: "FE Lead",
      team: "바이널씨 (디자인 × FE)",
      stack: "React · Tailwind CSS · Figma Variables · Git",
    },
    problem:
      "디자인과 개발이 각자의 방식으로 컬러·타이포·간격 값을 관리하고 있어 싱크가 맞지 않는 경우가 빈번했습니다. Figma의 Variables 기능을 활용해 디자인 레이어 계층 구조를 정의하고, 이를 코드 토큰과 연결하는 단일 소스 체계를 만드는 것이 과제였습니다.",
    approach: [
      "Figma Variables 기반 디자인 토큰 계층 구조 설계 — Primitive · Semantic · Component 레이어",
      "디자인팀과 함께 컬러·타이포·스페이싱 변수 체계 합의 및 정의",
      "Tailwind CSS config와 토큰 변수 구조를 연결해 디자인·코드 단일 소스화",
      "React 컴포넌트 라이브러리에 토큰 시스템 적용",
      "사이드 프로젝트로 Figma 플러그인 개발 및 출시",
    ],
    impact: [
      { value: "Figma", suffix: " Plugin", label: "출시" },
      { value: "디자인·코드", label: "토큰 단일 소스화" },
      { value: "3", label: "토큰 계층 정의" },
    ],
    reflections:
      "디자인 시스템은 결국 디자이너와 개발자가 같은 언어로 이야기할 수 있게 만드는 일이었습니다. 변수 이름 하나를 합의하는 과정이 코드를 짜는 것보다 훨씬 중요하다는 것을 이 프로젝트에서 배웠습니다.",
    detailTags: ["React", "Tailwind CSS", "Figma Variables", "Design Tokens", "Figma Plugin", "Git"],
  },
  {
    id: "03",
    title: { kr: "현대오토에버 GME 브랜드 웹사이트 개편", en: "Hyundai AutoEver GME Brand Website" },
    summary:
      "현대오토에버 GME 브랜드 웹사이트 개편. HTML/CSS 기반 단일 페이지 마크업 작업.",
    tags: ["Scss", "Mixin", "Cross-browsing"],
    lede: "현대오토에버 GME 브랜드 웹사이트 개편 프로젝트. 기존 에이전시의 작업 구색에 맞추면서 Scss 믹스인·함수화를 적극 활용해 스타일 구조를 체계적으로 구성하고 브랜드 아이덴티티를 정확히 구현했습니다.",
    meta: {
      period: "2025.05 — 2025.07",
      role: "UI/UX 개발",
      team: "현대오토에버",
      stack: "HTML · Scss · Figma · Git",
    },
    problem:
      "기존 에이전시가 작업해온 코드 구조와 스타일 체계를 파악하고 그 맥락에 맞춰 개편 작업을 이어가야 했습니다. 브랜드 아이덴티티를 반영하면서도 일관성을 유지하는 것이 핵심이었습니다.",
    approach: [
      "기존 에이전시 작업 구조 분석 및 코드 컨텍스트 파악",
      "Scss 믹스인·함수화를 적극 활용해 스타일 재사용성과 유지보수성 확보",
      "브랜드 톤앤매너에 맞는 스타일 정밀 구현",
      "크로스브라우징 대응 및 반응형 레이아웃 처리",
      "Git을 통한 소스 형상 관리",
    ],
    impact: [
      { value: "단일 페이지", label: "브랜드 웹사이트" },
      { value: "현대오토에버", label: "클라이언트" },
      { value: "2", suffix: "개월", label: "구축 기간" },
    ],
    reflections:
      "단기 프로젝트였지만 브랜드 개편이라는 특성상 디테일이 중요했습니다. 정해진 기간 안에 높은 완성도를 내는 집중력을 요하는 작업이었습니다.",
    detailTags: ["HTML", "Scss", "Mixin", "Figma", "Git", "Cross-browsing", "브랜드"],
  },
  {
    id: "04",
    title: { kr: "LG CNS 싱글렉스타운 운영", en: "LG CNS Singlex Town" },
    summary:
      "LG CNS 스마트 주거 플랫폼 운영. React 기반 입주민·관리자 서비스 화면 개발 및 유지보수.",
    tags: ["React", "TypeScript", "운영"],
    lede: "LG CNS의 스마트 주거 단지 통합 플랫폼 싱글렉스타운 운영. React 기반으로 입주민 서비스, 시설 관리, 커뮤니티 등 다양한 기능 화면의 개발과 유지보수를 PL로 담당했습니다.",
    meta: {
      period: "2024.05 — 2025.05",
      role: "PL (Project Lead)",
      team: "LG CNS",
      stack: "React · TypeScript · Figma · Git",
    },
    problem:
      "스마트 주거 단지의 입주민 서비스, 시설 예약, 커뮤니티, 관리자 기능을 하나의 플랫폼으로 운영해야 했습니다. 지속적인 기능 추가와 유지보수가 이루어지는 장기 운영 프로젝트로, 코드 품질과 일관성을 유지하는 것이 핵심 과제였습니다.",
    approach: [
      "React 컴포넌트 구조 설계 및 기능 화면 개발",
      "입주민 서비스·시설 예약·커뮤니티 등 다양한 도메인 화면 구현",
      "운영 이슈 대응 및 기능 고도화 지속 진행",
      "Figma 디자인 기준 협업 및 화면 구현",
      "PL로서 일정·품질·이슈 관리 전반 담당",
    ],
    impact: [
      { value: "React", label: "프론트엔드 전체" },
      { value: "PL", label: "리드 담당" },
      { value: "LG CNS", label: "클라이언트" },
    ],
    reflections:
      "대기업 SI 환경에서 PL로 장기 운영 프로젝트를 이끌며, 안정적인 코드 구조와 운영 대응력을 동시에 갖추는 것이 얼마나 중요한지 실감했습니다.",
    detailTags: ["React", "TypeScript", "Figma", "Git", "운영", "스마트시티"],
  },
  {
    id: "05",
    title: { kr: "위런 구축 (바이널씨)", en: "WeRun" },
    summary:
      "러너들을 위한 러닝 트래킹 하이브리드 앱. Vue.js 기반 웹뷰 영역 담당, PL로 애자일 방식 지속 고도화.",
    tags: ["Vue.js", "Hybrid App", "WebView"],
    lede: "바이널씨에서 구축한 러닝 트래킹 하이브리드 앱 위런. GPS 코스 트래킹과 함께 뛰기 기능을 갖춘 서비스의 웹뷰 영역을 Vue.js로 구현하고, PL로서 개발사와 협업하며 애자일 방식으로 지속 고도화했습니다.",
    meta: {
      period: "2022.01 — 2024.05",
      role: "PL (Project Lead)",
      team: "바이널씨 × 개발사",
      stack: "Vue.js · HTML · Scss · Figma · Git",
    },
    problem:
      "러너들이 혼자가 아닌 함께 달릴 수 있는 경험을 앱으로 제공해야 했습니다. 개발사와의 하이브리드 앱 협업 구조 안에서 웹뷰 영역의 컴포넌트 설계와 품질을 일관되게 유지하는 것이 핵심 과제였습니다.",
    approach: [
      "Vue.js 기반 웹뷰 컴포넌트 구조 설계 및 구현",
      "GPS 코스 트래킹, 함께 뛰기 등 핵심 기능 화면 개발",
      "개발사와의 하이브리드 앱 협업 — 네이티브·웹뷰 인터페이스 조율",
      "애자일 스프린트 방식으로 기능 단위 지속 고도화",
      "Figma 기반 디자인 협업, Git 형상 관리",
      "PL로서 일정·이슈·품질 관리 전반 담당",
    ],
    impact: [
      { value: "2", suffix: "년+", label: "장기 운영·고도화" },
      { value: "Vue.js", label: "웹뷰 전체 구현" },
      { value: "하이브리드 앱", label: "앱스토어 출시" },
    ],
    reflections:
      "PA에서 PL로 역할이 확장된 첫 프로젝트였습니다. 일정과 품질을 동시에 관리하면서, 컴포넌트 단위로 잘 설계된 구조가 장기 고도화에서 얼마나 중요한지 직접 경험했습니다.",
    detailTags: ["Vue.js", "HTML", "Scss", "Figma", "Git", "WebView", "Hybrid App"],
  },
  {
    id: "06",
    title: { kr: "러너블 웹뷰 구축 (JTBC)", en: "Learnable WebView" },
    summary:
      "JTBC × 바이널씨. 러너블 앱 웹뷰 영역 구축. 퍼블리싱 가이드 수립 및 Figma 기반 협업.",
    tags: ["Scss", "JavaScript", "WebView"],
    lede: "JTBC와 바이널씨가 함께한 러너블 서비스의 웹뷰 영역 구축. 퍼블리싱 가이드를 수립하고 Figma를 통해 디자인·기획과 협업하며 화면 페이지를 제작했습니다.",
    meta: {
      period: "2021.07 — 2021.09",
      role: "Publisher",
      team: "JTBC × 바이널씨",
      stack: "HTML · Scss · JavaScript · Figma · Git",
    },
    problem:
      "신규 서비스 런칭에 맞춰 앱 내 웹뷰 영역의 퍼블리싱 가이드와 화면 전체를 구축해야 했습니다. 디자인·기획과 긴밀하게 협업하면서도 일관성 있는 화면 품질을 유지하는 것이 과제였습니다.",
    approach: [
      "웹뷰 영역에 적합한 퍼블리싱 가이드 수립",
      "Figma를 협업 도구로 활용, 디자인·기획과 실시간 소통",
      "Git을 이용한 소스 및 이슈 등록·관리",
      "화면 페이지 전반 작업 — 신규 서비스 전체 화면 구현",
    ],
    impact: [
      { value: "웹뷰 전체", label: "구축 담당" },
      { value: "Figma", label: "디자인 협업" },
      { value: "JTBC", label: "클라이언트" },
    ],
    reflections:
      "Figma와 Git을 활용한 체계적인 협업을 경험한 프로젝트였습니다. 퍼블리싱 가이드를 직접 수립하며 단순 화면 구현을 넘어 기준을 만드는 역할의 가치를 느꼈습니다.",
    detailTags: ["HTML", "Scss", "JavaScript", "Figma", "Git", "WebView"],
  },
  {
    id: "07",
    title: { kr: "삼성카드 약관 고도화", en: "Samsung Card Terms Upgrade" },
    summary:
      "카드 약관 개정에 따른 약관 페이지 전면 고도화. 디자인 가이드 기반 스타일 재정의.",
    tags: ["Scss", "A11y", "CMS"],
    lede: "삼성카드 카드약관 개정 변경에 대응한 약관 페이지 고도화 작업. 기존 디자인 가이드에 맞춰 스타일을 전면 재정의하고 일관성 있는 약관 UI를 구현했습니다.",
    meta: {
      period: "2021.04 — 2021.05",
      role: "Publisher",
      team: "삼성카드",
      stack: "HTML · Scss · Figma · SVN",
    },
    problem:
      "카드 약관 개정으로 인해 기존 약관 페이지의 디자인과 구조를 전면 재정비해야 했습니다. 사내 내부망 환경에서 작업이 이루어져 정해진 가이드 내에서 정확한 구현이 요구되었습니다.",
    approach: [
      "기존 카드 약관 디자인 가이드 분석 및 스타일 재정의",
      "개정된 약관 내용에 맞는 페이지 구조 재설계",
      "사내 내부망 환경에서 SVN을 통한 형상 관리",
      "Figma 디자인 파일 기준으로 정밀한 화면 구현",
    ],
    impact: [
      { value: "약관 전면", label: "스타일 재정의" },
      { value: "삼성카드", label: "클라이언트" },
      { value: "금융권", label: "프로젝트" },
    ],
    reflections:
      "사내 내부망 환경이라는 제약 속에서 주어진 가이드만으로 정확하게 구현하는 능력을 키운 프로젝트였습니다. 꼼꼼한 디테일 작업과 형상 관리 습관이 이때부터 자리잡았습니다.",
    detailTags: ["HTML", "Scss", "A11y", "Figma", "SVN", "금융"],
  },
  {
    id: "08",
    title: { kr: "티월드 운영", en: "T World Operation" },
    summary:
      "SK텔레콤 티월드 웹·모바일 전 채널 운영. 개인화 MY FEED 신규 카드 페이지 제작.",
    tags: ["Scss", "JSX", "Cross-browsing"],
    lede: "SK텔레콤 티월드의 웹·모바일 전 채널 운영 업무. 요금제·상품 페이지 전반을 관리하며, 개인화 기능인 MY FEED 신규 카드 페이지를 직접 제작했습니다.",
    meta: {
      period: "2019.12 — 2020.03",
      role: "Publisher",
      team: "SK텔레콤",
      stack: "HTML · Scss · JSX · Figma · Git",
    },
    problem:
      "대규모 통신사 서비스의 웹·모바일 전 채널을 운영하며, 요금제·상품 등 수시로 바뀌는 콘텐츠를 빠르고 정확하게 반영해야 했습니다. 동시에 개인화 기능(MY FEED) 신규 UI 제작도 병행되었습니다.",
    approach: [
      "티월드 웹·모바일 전 채널 운영 — 요금제, 상품 등 콘텐츠 업데이트 대응",
      "Scss 기반 스타일 구조로 유지보수 효율 확보",
      "개인화 MY FEED 신규 카드 페이지 UI 설계 및 퍼블리싱",
      "JSX 환경에서 컴포넌트 단위 마크업 작업",
    ],
    impact: [
      { value: "웹+모바일", label: "전 채널 운영" },
      { value: "MY FEED", label: "신규 페이지 제작" },
      { value: "SK텔레콤", label: "클라이언트" },
    ],
    reflections:
      "대규모 서비스의 운영 업무를 통해 빠른 대응력과 안정적인 작업 흐름의 중요성을 배웠습니다. JSX 환경에서의 작업은 이후 React 개발로 이어지는 전환점이 되었습니다.",
    detailTags: ["HTML", "Scss", "JSX", "Figma", "Git", "Cross-browsing", "운영"],
  },
  {
    id: "09",
    title: { kr: "스토리24 구축", en: "Story24" },
    summary:
      "YES24 통합 모바일 디지털 콘텐츠 플랫폼 구축. 전자책·북클럽·웹소설·채널예스를 하나의 앱으로.",
    tags: ["Scss", "JavaScript", "Mobile Web"],
    lede: "YES24가 선보인 통합 모바일 디지털 콘텐츠 플랫폼 스토리24 구축. 전자책, 북클럽, 웹소설, 채널예스 등 분산된 콘텐츠를 단일 서비스로 연결하는 모바일 웹 퍼블리싱을 담당했습니다.",
    meta: {
      period: "2019.05 — 2019.09",
      role: "Publisher",
      team: "YES24",
      stack: "HTML · Scss · JavaScript · Figma · Git",
    },
    problem:
      "전자책, 북클럽, 웹소설, 채널예스 등 YES24의 디지털 콘텐츠가 각각 분리되어 있어 사용자 경험이 파편화된 상태였습니다. 이를 하나의 모바일 앱으로 통합하면서 콘텐츠 생산·소비·공유 전 과정을 아우르는 플랫폼 UI 구축이 필요했습니다.",
    approach: [
      "콘텐츠 카테고리별 모바일 웹 UI 퍼블리싱 — 전자책, 웹소설, 북클럽 등",
      "앱 내 웹뷰 환경에 최적화된 화면 구성",
      "사용자 콘텐츠 라이프사이클(생산·소비·공유)을 아우르는 UX 구현",
      "모바일 해상도 대응 및 터치 인터랙션 최적화",
    ],
    impact: [
      { value: "통합", label: "디지털 콘텐츠 플랫폼" },
      { value: "모바일 웹", label: "전 화면 담당" },
      { value: "YES24", label: "클라이언트" },
    ],
    reflections:
      "콘텐츠 소비 중심의 모바일 플랫폼을 구축하며 사용자 흐름과 UI 일관성의 중요성을 체감했습니다. 앱 내 웹뷰 환경에서의 퍼블리싱 경험이 이후 웹뷰 프로젝트들의 기반이 되었습니다.",
    detailTags: ["HTML", "Scss", "JavaScript", "Figma", "Git", "Mobile Web", "WebView"],
  },
  {
    id: "10",
    title: { kr: "국민카드 운영", en: "Kookmin Card Operation" },
    summary:
      "국민카드 운영 고도화. CMS 기반 금융 서비스 화면 운영 및 개선 작업.",
    tags: ["Scss", "CMS", "Cross-browsing"],
    lede: "국민카드 서비스의 운영 고도화 업무 담당. 금융권 특성에 맞춘 CMS 기반 환경에서 화면 운영 및 개선 작업을 진행했습니다.",
    meta: {
      period: "2018.03 — 2019.03",
      role: "Publisher",
      team: "국민카드",
      stack: "HTML · Scss · CMS · Figma · SVN",
    },
    problem:
      "금융권 서비스 특성상 보안과 안정성이 최우선이었습니다. CMS 기반 환경에서 정해진 운영 프로세스를 준수하면서 빠르게 화면 변경에 대응해야 했습니다.",
    approach: [
      "CMS 기반 운영 환경에서 화면 수정 및 콘텐츠 업데이트 대응",
      "금융 서비스 디자인 가이드에 맞춰 스타일 일관성 유지",
      "운영 이슈 접수 및 빠른 대응 체계 유지",
      "SVN을 통한 소스 형상 관리",
    ],
    impact: [
      { value: "CMS", label: "기반 운영" },
      { value: "금융권", label: "프로젝트" },
      { value: "국민카드", label: "클라이언트" },
    ],
    reflections:
      "금융권 운영 프로젝트를 통해 안정성과 정확성을 최우선으로 하는 작업 방식을 익혔습니다. CMS 환경에서의 운영 경험이 이후 대규모 서비스 운영의 기반이 되었습니다.",
    detailTags: ["HTML", "Scss", "CMS", "Figma", "SVN", "금융", "운영"],
  },
  {
    id: "11",
    title: { kr: "현대자동차 상용 글로벌", en: "Hyundai Commercial Global" },
    summary:
      "현대자동차 상용차 글로벌 반응형 홈페이지 구축. 컴포넌트 모듈화 디자인 가이드 기반 퍼블리싱.",
    tags: ["JavaScript", "Responsive", "Cross-browsing"],
    lede: "현대자동차 상용차 글로벌 반응형 홈페이지 퍼블리싱. 컴포넌트 단위로 모듈화된 디자인 가이드를 기준으로 화면설계서와 디자인 스케치에 맞춰 일관성 있는 화면을 구현했습니다.",
    meta: {
      period: "2017.10 — 2017.12",
      role: "Publisher",
      team: "현대오토에버",
      stack: "HTML · CSS · JavaScript · SVN",
    },
    problem:
      "글로벌 사용자를 대상으로 한 반응형 홈페이지로, 다양한 해상도와 브라우저 환경에서 일관된 화면을 구현해야 했습니다. 컴포넌트 모듈화 디자인 가이드를 정확히 준수하면서 화면설계서와 스케치 파일 기준으로 퍼블리싱이 이루어져야 했습니다.",
    approach: [
      "컴포넌트 모듈화 디자인 가이드에 맞춰 퍼블리싱 구조 수립",
      "화면설계서·디자인 스케치 파일 기준으로 화면 페이지 작업",
      "반응형 레이아웃 구현 — 다양한 해상도 대응",
      "SVN을 통한 소스 형상 관리 및 사내 배포 시스템 활용",
    ],
    impact: [
      { value: "글로벌", label: "반응형 홈페이지" },
      { value: "2", suffix: "개월", label: "구축 기간" },
      { value: "현대오토에버", label: "클라이언트" },
    ],
    reflections:
      "처음으로 글로벌 규모의 프로젝트에 참여하며, 컴포넌트 모듈화 설계의 중요성과 체계적인 디자인 가이드를 따르는 퍼블리싱의 가치를 처음 체감한 프로젝트였습니다.",
    detailTags: ["HTML", "CSS", "JavaScript", "Responsive", "Cross-browsing", "SVN"],
  },
];

export function getProject(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}
