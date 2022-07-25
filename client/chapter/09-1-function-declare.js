/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

// 함수 선언
// 매개 변수 (parameter)
function calcuratePrice(priceA, priceB, priceC, priceD) {
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
total = calcuratePrice(9000, -2500, 5000, 11900);
// console.log(`총 합 = ${total}`);

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

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

// 구현해야 할 로직(logic)
// GET : css(node, styleProp)
// SET : css(node, styleProp, value)
// SET : css(node, cssRules)

// 초심자: 함수 하나의 몸체 안에서 여러 로직을 처리하려 한다.
// 중급자: 함수의 로직을 분리해서 재사용할 수 있도록 구성한다.


// SET : setNodeStyleFromCssRules(node, cssRules)
// FACTORY: css(node[, styleProp, value | cssRules])

function css() {
  return null;
}

//

// console.assert(css(document.body, 'font-size')) // '16px'
// console.assert(css(document.body, 'font-size', 32)) // undefined, <body style="font-size: 32px"></body>
