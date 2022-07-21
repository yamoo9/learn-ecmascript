/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

// Object.prototype → extended Object
const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMA-262',
  currentVersion: 2022,
}; 


// 객체의 속성(property) 포함 여부 확인 방법
// 조건 확인
let key = 'toString';
// console.log(key in javaScript);


// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
Object.prototype.nickname = 'yamoo9';
// console.log('nickname' in javaScript);
// console.log('valueOf' in javaScript);
// console.log('createAt' in javaScript);
// console.log('currentVersion' in javaScript);


// 객체 자신(own)의 속성(property)인지 확인(포함(has) 여부)하는 방법
// - "자신의 속성인 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// console.log(javaScript.hasOwnProperty('createAt')); // true
// console.log(javaScript.hasOwnProperty('toString')); // false

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
for(const key in javaScript) {
  // 메서드 빌려쓰기 패턴
  // Function.prototype.(call|apply|bind)
  // if (javaScript.hasOwnProperty(key)) {
  // if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
  // if (javaScript.hasOwnProperty.call(javaScript, key)) {
  if (({}).hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  }
}

// - 배열 객체 순환에 사용할 경우?
const tens = [1e1, 1e2, 1e3, 1e4, 1e5];
tens.description = '10의 나열';

// for...in 문은 오직 객체 순환에만 사용하세요.
// 배열에 사용하지 말고, 객체에 양보하세요.
for (let index in tens) {
  let value = tens[index];
  if (tens.hasOwnProperty.call(tens, index)) {
    console.log(index, ': ', value);
  }
}