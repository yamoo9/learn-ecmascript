/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress = 'yamoo9@naver.com';
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자(ternary)를 사용한 식으로 변경해봅니다.
receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? 'user@company.io'
    : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
// receivedEmailAddress = emailAddress ?? 'user@company.io';

// 논리합 연산자를 활용한 조건 식 (첫번째 Truthy 값 찾음)
receivedEmailAddress = emailAddress || 'user@company.io';
console.log(receivedEmailAddress);

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

function defaultArg(wantValue, initialValue) {
  // return wantValue || initialValue;
  return wantValue ?? initialValue;
}

const INITIAL_VALUE = '10px';

let value;
value = defaultArg(null, INITIAL_VALUE);
console.log('value = ', value); // INITIAL_VALUE

value = defaultArg(undefined, INITIAL_VALUE);
console.log('value = ', value); // INITIAL_VALUE

value = defaultArg(true, INITIAL_VALUE);
console.log('value = ', value); // true?

value = defaultArg('', INITIAL_VALUE);
console.log('value = ', value); // ''?

value = defaultArg(0, INITIAL_VALUE);
console.log('value = ', value); // 0?
