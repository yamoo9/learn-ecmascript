

/* --------------------------------------------------------------------- */
/* Variables                                                             */
/* --------------------------------------------------------------------- */


/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ------------ */

// - 갯수 별 상품 가격 계산하기
// - 구매 제품 가격의 총 합
// - 1년 기준 일자 수
// - 구매 결제 여부
// - 구매 결제 내역
// - 브랜드 접두사
// - 오늘의 운세
// - 상품 정보


/* variables ------------------------------------------------------------ */

// [x] kebab-case
// [ ] snake_case
let calc_of_price_quantity;
// [ ] camelCase
let calcOfPriceQuantity;
// [ ] PascalCase (TitleCase) // class, component
let CalcOfPriceQuantity;

let totalPrice;

/* constant variables --------------------------------------------------- */

// 상수 이름 작명 규칙
// ALL_CAPS = static (코드 실행 전에 어떤 값이 들어올 지 알고 있음)
// camelCase = dynamic (코드 실행 중 어떤 값이 들어올 지 알 수 없음)

const BRAND_PREFIX = 'EUID';
const DAYS_PER_YEAR = 365;

const recievedBrandPrefix = require('brand-prefix'); // node.js 환경 코드 작성 예시
const calcurateProductPrice = function() {
  return // 값
};


// 클라이언트 <--> 서버
// 요청     <--> 응답
// 요청 상태(states)

// pending 아무것도 안 함
// loading 요청(로딩 중, 대기)
// fulfiled, resolved 응답(성공)
// rejected 응답(실패)

// Redux

const PENDING = 'api/pending';
const LOADING = 'api/loading';
const FULFILLED = 'api/resolved';
const REJECTED  = 'api/rejected';