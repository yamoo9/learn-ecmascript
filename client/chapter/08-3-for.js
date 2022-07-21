/* ---------------------------------------------------------------------- */
/* For Loop                                                               */
/* ---------------------------------------------------------------------- */

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

// while 문 → for 문 (순환)
// let i = 0;
// for(; i < frontEndDev.length;) {
//   const frontEndSubject = frontEndDev[i];
//   console.log(frontEndSubject);
//   i = i + 1;
// }

// - 실행 흐름
// for(let i = 0; i < frontEndDev.length; ++i) {
//   const frontEndSubject = frontEndDev[i];
//   console.log(frontEndSubject);
// }

// - 조건이 맞을 경우, 이어서(continue) 순환
// - 조건: SVG, jQuery는 출력하지 마세요.
// for(let i = 0; i < frontEndDev.length; ++i) {
//   const frontEndSubject = frontEndDev[i];
//   if (
//     frontEndSubject.includes('SVG') || 
//     frontEndSubject.includes('jQuery')
//   ) {
//     continue;
//   }

//   console.log(frontEndSubject);
// }

// - 조건이 맞을 경우, 순환 중단(break)
// - 조건: JavaScript 까지만 출력하세요.
// for(let i = 0; i < frontEndDev.length; ++i) {
//   const frontEndSubject = frontEndDev[i];
//   if (
//     frontEndSubject.toLowerCase().includes('jquery')
//   ) {
//     break;
//   }

//   console.log(frontEndSubject);
// }

// - 성능 향상에 도움이 되는 팁
// for(let i = 0, l = frontEndDev.length; i < l; i += 2) {
//   const frontEndSubject = frontEndDev[i];
//   console.log(frontEndSubject);
// }


// 무한 루프 (브레이크)
// let i = 0;
// for (;;) {
//   if (++i === 1) {
//     console.log('wow');
//     break;
//   }
// }


// for 문 (역순환)
for (
  let i = frontEndDev.length - 1, subject; 
  (subject = frontEndDev[i--]);
) console.log(subject);