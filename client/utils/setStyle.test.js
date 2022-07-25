/* global getStyle, setStyle */

const root = document.documentElement;
const node = document.body;

console.assert(!!setStyle, 'setStyle 함수가 존재하지 않습니다.');

setStyle(node, 'font-size', '20px');

console.assert(
  node.style.fontSize,
  `setStyle(node, 'font-size', '20px') 함수의 실행 결과 ${node.nodeName.toLowerCase()} 요소에 인라인 스타일 설정이 되지 않습니다.`
);


let calcNodeFontSize = parseInt(getStyle(root, 'font-size'), 10) * 3;

setStyle(node, 'font-size', '3rem'); // body fontSize 3rem (39px)

console.assert(
  `${calcNodeFontSize}px` === getStyle(node, 'font-size'),
  `setStyle(node, 'font-size', '3rem')의 설정 값은 ${calcNodeFontSize}px 값과 다릅니다.`
);

setStyle(node, 'font-size', 42);

console.assert(
  getStyle(node, 'font-size') === '42px',
  `setStyle(node, 'font-size', 42)의 설정 값은 '42px'이 아닙니다.`
);