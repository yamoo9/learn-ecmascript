/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자 &&
let AandB = a && value;

// 논리합(또는) 연산자 ||
let AorB = value || a;

// 부정 연산자
let reverseValue = !value; // false → true

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };
console.log(whichFalsy); // ? { thisIsFalsy: false }

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [].length || { thisIsTruthy: true };

console.log(whichTruthy); // ? { thisIsTruthy: true }
