/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
// let vs. const
const calculateTotal = function () {
  // 함수 안에서만 접근 가능한 인자들의 집합 객체로서 배열과 유사하여 유사 배열 타입으로 분류된다.
  // -> arguments 객체

  // arguments 객체를 사용해 함수의 매개변수 없이
  // arguments의 아이템의 총합을 구하는 방식으로 코드 로직을 완성해보세요.
  // 힌트 1: arguments는 유사 배열 객체이다.
  //        유사배열은 배열이 아니다. 배열의 능력을 활용할 수 없다.
  //        for 문을 사용하면 순환처리 값을 더해서 반환
  // let total = 0;

  // for (let i = 0, l = arguments.length; i < l; ++i) total += arguments[i];

  // 개념 확장: 배열의 능력을 사용하고 싶다. 미치도록 사용하고 싶다.
  // 배열의 원소를 순환 처리 (총 합 구하기)

  // 문제 상황: 유사 배열은 배열이 아니므로, 배열의 능력을 사용할 수 없다.
  // console.log('forEach' in arguments);

  // 유사 배열 → 배열로 변환???
  // 유사 배열이 배열 객체인 것처럼 배열의 메서드를 빌려쓸 수 있다.
  // this의 유연성
  /* global makeArray */
  // const args = Array.from(arguments);

  // - forEach
  // args.forEach(function (arg) {
  //   total += arg;
  // });

  // - reduce
  return Array.from(arguments).reduce(function (total, current) {
    return total + current;
  }, 0);

  // 힌트 2: arguments는 이터러블(iterable)로서 Symbol.iterator 메서드를 가진다.
  // for (let arg of arguments) total += arg;

  // return total;
};

resultX = calculateTotal(10000);
resultY = calculateTotal(21500, 9800, 4700);
resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;

// 콜백 함수 (표현)식
let callbackFunctionExpression;

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;
