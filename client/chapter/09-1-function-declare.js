/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

function getOneOrZero() {
  return Math.random() * 1 > 0.5 ? 1 : 0;
}

// 함수 선언
// 매개 변수 (parameter)
function calcuratePrice(
  priceA,
  priceB,
  priceC = getOneOrZero(),
  priceD = getOneOrZero()
) {
  if (!priceA || !priceB) {
    throw new TypeError(
      'priceA 또는 priceB 매개변수는 필수로 전달될 숫자 값이 필요합니다.'
    );
  }

  // 함수 값 반환
  return priceA + priceB + priceC + priceD;
}

// 함수 호출
// 전달 인자 (argument)
// 매개 변수 (parameter) vs. 전달 인자 (argument)
let total = calcuratePrice(10000, 8900, 1360, 2100);
// console.log(`총 합 = ${total}`);
total = calcuratePrice(21500, 3200, 9800, 4700);
// console.log(`총 합 = ${total}`);
total = calcuratePrice(3800, 15200, -500, 80200);
// console.log(`총 합 = ${total}`);
total = calcuratePrice(560, 5000, 27100, 10200);
// console.log(`총 합 = ${total}`);
total = calcuratePrice(9000, -2500);

console.log(total);
// console.log(`총 합 = ${total}`);

// 외부(전역 포함), 지역 변수
// 함수 내부는 외부와 분리되는 지역이 형성 됨
// 함수의 매개변수는 지역 변수일까요? 외부의 변수일까요?

// 매개 변수 기본 값

// 좋은 함수 작성 여건
// - 재사용성이 좋아야 한다.
// - 함수 코드는 가독성이 좋아야 한다. (이름과 매개변수 이름이 직관적이어야 한다.)
// - 함수 내부에는 가급적 한 개의 로직만 처리하는 것이 권장된다.

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
// rem(48); // '3rem'
// rem(48, 10); // '4.8rem'
// rem('102px', 10); // '10.2rem'
function rem(pxValue, base = 16) {
  typeof pxValue === 'string' && (pxValue = parseFloat(pxValue, 10));
  return `${pxValue / base}rem`;
}

console.assert(rem(48) === '3rem');
console.assert(rem(48, 10) === '4.8rem');
console.assert(rem('102px', 10) === '10.2rem');
console.assert(rem('102.234px', 10) === '10.2234rem');
