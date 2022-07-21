/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */

// do ~ while 문 (역순환)
// let repeat = prompt('몇 번 순환할까요?', 0);

{
  // console.time('do - while');

  // let t0 = performance.now();
  // do {
  //   if (!repeat || repeat <= 0) {
  //     console.log('최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.');
  //     break;
  //   }
    
  //   console.log(repeat);
  //   repeat -= 1;

  // } while(repeat);
  // let t1 = performance.now();
  // console.log(`처리 시간: ${(t1 - t0).toFixed(2)}ms`);

  // console.timeEnd('do - while');

  // - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
  // - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
  // - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
  //   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
  // - 순환 중단
}

{
  // do ~ while 문 (순환)
  // - 위 do ~ while 문을 순방향으로 순환되도록 설정

  // let i = 1;

  // do {
  //   if (!repeat || repeat <= 0) {
  //     console.log('최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.');
  //     break;
  //   }
  //   console.log(i++);
  // } while (i <= repeat);
}

/* -------------------------------------------------------------------------- */

const headline = document.getElementsByTagName('h1')[0];

// 구현할 로직(logic)

// 시작하는 요소
const $firstPoint = document.querySelector('h1 .word');
// console.log($firstPoint);

// 반복:시작 --------------------------------------------------------
// 요소의 다음 형제 노드를 찾음
// 그 형제 노드의 타입이 3(document.TEXT_NODE)이면
// 다시 그 형제 노드의 다음 형제 노드를 찾음

let nextNode = $firstPoint;

do {
  nextNode = nextNode.nextSibling;
} 
// 반복:종료 --------------------------------------------------------
// 반복 종료 조건: 그 형제 노드의 타입이 1(document.ELEMENT_NODE)이면 순환 종료
while(nextNode.nodeType !== document.ELEMENT_NODE);

// 미션
// next 함수 로직을 참고하여 prev 함수를 작성해봅니다.

function next(node) { 
  do {
    node = node.nextSibling;
  } while (node.nodeType !== document.ELEMENT_NODE); 
  return node;
}

const $firstPointNextSibling = next($firstPoint);
console.log($firstPointNextSibling);