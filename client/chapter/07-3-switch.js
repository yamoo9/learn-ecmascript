/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

// single (const|let|var) 패턴
const MORNING = '아침',
      LUNCH = '점심',
      DINNER = '저녁',
      NIGHT = '밤',
      LATE_NIGHT = '심야',
      DAWN = '새벽';

let thisTime = LATE_NIGHT;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// switch(thisTime) {
//   case MORNING: console.log('뉴스 기사 글을 읽는다.'); break;
//   case LUNCH: console.log('자주 가는 식당에 가서 식사를 한다.'); break;
//   case DINNER: console.log('동네 한바퀴를 조깅한다.'); break;
//   case NIGHT: console.log('친구에게 전화를 걸어 수다를 떤다.'); break;
//   case LATE_NIGHT:
//   case DAWN: console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'); break;
// }

/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다.');
}
else if (thisTime === LUNCH) {
  console.log('뉴스 기사 글을 읽는다.');
}
else if (thisTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
}
else if (thisTime === NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
}
else {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}

/* switch vs. if -------------------------------------------------------- */

// 조건에 따라 코드를 처리하는 구문
// switch 문은 조건이 다양한 경우
// if 문은 쓰고 싶을 때

// 전달 값: 0 ~ 6
// 반환 값: '일' ~ '토'
// 요일을 반환하는 함수
function getDayOfWeek(dayValue) {
  let resultDay = '';
  switch (dayValue) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
    default:
      throw new TypeError('전달 가능한 값은 0~6 사이 정수여야 합니다.');
  }
}

// let result = getDayOfWeek(7);
// console.log(result);

// 주말인지 아닌지 여부를 반환하는 함수
function isWeekand(dayValue) {
  let today = getDayOfWeek(dayValue);
  return today.includes('일') || today.includes('토');
}

function getRandom(n) {
  return Math.round(Math.random() * n);
}

