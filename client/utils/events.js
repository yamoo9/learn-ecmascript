// on(
//   node: SelectorString|HTMLElementNode, 
//   type: string,
//   handler: function
// );
const EUID = Object.freeze({
  on(selectorOrElement, eventType, eventListener) {
    let node = null;
    if (typeof selectorOrElement === 'string') {
      node = document.querySelector(selectorOrElement);
    }
    if (node?.nodeType !== document.ELEMENT_NODE) {
      throw new TypeError('....');
    }
    node.addEventListener(eventType, eventListener);
    
    return () => {
      node.removeEventListener(eventType, eventListener);
    }
  }
});

// off(
//   node: SelectorString|HTMLElementNode, 
//   type: string,
//   handler: function
// );

// -------------------------------------------------------

// 제거 vs. 삭제
// remove vs. delete

// const off = on(document.body, 'click', function() {})
// IIFE 패턴이 필요하다.
// off는 타입이 함수이다.
// off();