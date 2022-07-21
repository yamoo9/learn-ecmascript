/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'React Router',
];


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환: 순방향)
// - VSCode Debug 도구를 사용해 실행 흐름 확인해보세요.

let t0 = performance.now();

let index = 0;
let fedLength = frontEndDev.length;

while (index < fedLength) {
  let value = frontEndDev[index];
  index = index + 1;
  console.log(value);
}

let t1 = performance.now();

console.log(t1 - t0);

// let i = 0;

// while (frontEndDev[i]) {
  // console.log(frontEndDev[i]);
//   ++i;
// }


/* -------------------------------------------------------------------------- */

// while 문 (역순환: 역방향)
// let lastIndex = frontEndDev.length - 1;

// while(lastIndex >= 0) {
//   let value = frontEndDev[lastIndex];
//   lastIndex = lastIndex - 1;
//   console.log(value);
// }

// - 변수를 사용하지 않고 frontEndDev 객체 만을 사용해 순환(역방향) 처리해보세요.
const copyedFrontEndDev = frontEndDev.slice();

let z0 = performance.now();
while(copyedFrontEndDev.length) {
  console.log(copyedFrontEndDev.pop());
}
let z1 = performance.now();

console.log(z1 - z0);

// 성능 진단 : 순환 (순방향) vs. 역순환 (역방향)
// 순방향 순환 보다, 역방향 순환이 더 빠르다