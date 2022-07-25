/* global getStyle */

// 테스트 코드 작성
let testSinario1 = 'getStyle("body", "color")의 반환 값 타입은 string이 아닙니다.';
console.assert(typeof getStyle('body', 'color') === 'string', testSinario1);


let testSinario2 = 'getStyle("body", "font-size")의 반환 값은 "16px"이 아닙니다.';
console.assert(getStyle('body', 'font-size') === '16px', testSinario2);


let testSinario3 = `getStyle('h1', 'font-size')의 반환 값은 "${ '3rem'.replace('rem', '') * 16 }px"이 아닙니다.`;
console.assert( getStyle('h1', 'font-size') === `${'3rem'.replace('rem', '') * 16}px`, testSinario3 );
