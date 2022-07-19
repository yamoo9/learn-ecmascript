/* ---------------------------------------------------------------------- */
/* Comparison Operator                                                    */
/* ---------------------------------------------------------------------- */

const counts = [10, -4, 90, 101, 204, -10_000];

// ~ 보다 큼 또는 작음 → boolean
let lessThen = counts[2] < counts[1];
let greaterThen = counts[3] > counts[counts.length - 1];

// console.log(lessThen);
// console.log(greaterThen);

// ~ 보다 크거나 작음 또는 같음 → boolean
let lessThenAndEqual = counts[4] <= counts[3];
let greaterThenAndEqual = counts[6] >= counts[1];

// console.log(lessThenAndEqual);
// console.log(greaterThenAndEqual);

// 동등(등급이나 정도가 같다) → boolean
let equal = +null == 0;

console.log(equal); // true

// 다름(같지 않음) → boolean
let inequal = undefined == 1;

console.log(inequal);

// 동일(똑같다) → boolean
// eslint-disable-next-line use-isnan
let same = NaN === NaN;

console.log(same);

// 문자 비교
// 사전편집(lexicographical) 순
// 사전 뒤쪽의 문자가 앞쪽의 문자보다 크다고 판단
// 예) 'ㅎ' > 'ㄱ' → true
// 소문자가 대문자보다 크다고 판단
// 예) 'A' > 'a' → false

// 문자 비교 알고리즘(문제 해결을 위한 절차)
// 1. 두 문자열의 첫 글자 비교
// 2. 첫 글자 비교시, 크거나 작음이 판단되면 비교 종료 후 결론 도출
// 3. 첫 글자가 같을 경우, 두 번째 글자 비교
// 4. 두 번째 글자 비교시, 크거나 작음이 판단되면 비교 종료 후 결론 도출
// 5. 두 번째 글자가 같을 경우, 두 번째 글자 비교
// 6. ...
// 7. 비교가 종료되었고, 문자열 길이도 같을 경우 두 문자열은 동일함으로 결론 도출

console.log('Design' <= 'Development');
console.log('디자인' <= '개발');
