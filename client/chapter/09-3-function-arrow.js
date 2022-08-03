/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

// 함수 식 → 화살표 함수 식
// const calculateTotal = (first, ...restArgs) => {
const calculateTotal = (...prices) =>
  prices.reduce((total, price) => total + price, 0);

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 화살표 함수 this vs. 일반 함수(문|식)의 this
// - 화살표 함수 내부의 this는 상위 컨텍스트를 참조
// - 모듈 파일 내에 작성된 화살표 함수의 this는 undefined, 일반 JS 파일(웹 브라우저 환경) 내에서는 window 객체
// - 일반 함수(문|식)의 this는 함수를 실행시킨 주체(대상)를 참조
// - 일반 함수(문|식) 안에서는 arguments 객체를 활용할 수 있으나, 화살표 함수는 못함
// - 객체의 메서드로 화살표 함수를 쓰면 안된다!!!
// - 객체의 메서드 내부에서는 화살표 함수를 사용하는 것이 좋다.

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
const pow = (numeric, powerCount) => {
  let result = 1;
  for (let i = powerCount; i > 0; --i) result *= numeric;
  return result;
};

const powExpression = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((result) => numeric * result, 1);

// pow(2, 3); // 2 * 2 * 2 = 8
// pow(2, 5); // 2 * 2 * 2 * 2 * 2 = 32

// repeat(text: string, repeatCount: number): string;
const repeat = (text, repeatCount) => {
  let result = '';
  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }
  return result;
};

const repeatExpression = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((result) => result + text, '');

repeat('hello 😃', 3); // 'hello 😃' * 3 = 'hello 😃hello 😃hello 😃'
