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

  const callbackReduce = function (total, current) {
    return total + current;
  };

  return Array.from(arguments).reduce(callbackReduce, 0);

  // 힌트 2: arguments는 이터러블(iterable)로서 Symbol.iterator 메서드를 가진다.
  // for (let arg of arguments) total += arg;

  // return total;
};

resultX = calculateTotal(10000);
resultY = calculateTotal(21500, 9800, 4700);
resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 익명 또는 무명(이름이 없는) 함수 (표현)식
const anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function myNameIsFunction() {
  // console.log(typeof myNameIsFunction); // 'function'
};

// console.log(typeof myNameIsFunction); // undefined

// namedFunctionExpression();

// 콜백(callback) 함수 (표현)식
let callbackFunctionExpression;
let clickCount = 0;
// console.log(clickCount);

// document.onclick = function () {
//   console.log('clicked document');
//   if (clickCount++ > 10) return;
//   console.log(clickCount);
//   document.onclick();
// };

// 함수 선언문 vs. 함수 (표현)식
// - 식 안에서 선언은 사용할 수 없음. 반면 함수 식은 식 내부에서도 사용 가능
// - 함수 선언은 반드시 이름이 필요하다. 반면, 함수 식은 이름이 없을 수도 있다.
// - 스코프 호이스트(scope hoist) 시, 처리되는 방식의 차이 (선언은 몸체가 실행영역으로 끌어올려짐 / 식은 할당되는 값은 그대로, 이름만 끌어올려지는 현상을 보임)

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
// 함수가 선언 됨과 동시에 실행되는 것을 말한다.
// JavaScript 함수는 그 자체로 '값'
// 함수 값을 즉시 실행 (이름 호출 없이)

// 모듈 패턴
const MASTER = (function() {
  const UNIQUE_KEY = 'kdsjficvks13ddkfjsjcidjwkfer';
  // 즉시 실행 함수 식의 용도는?
  // 모듈로서 활용
  // 정보 은닉(캡슐화): 외부의 접근 차단(보호)
  // 일부 정보 노출
  // 노출 패턴
  return {
    getKey: function() {
      return `KEY=${UNIQUE_KEY}`;
    }
  };
})();

// console.log(MASTER);
// console.log(MASTER.getKey());
// console.log(masterGender);


