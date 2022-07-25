function setStyle(node, styleProp, value) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  if (!node || node.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError('첫번째 매개변수 node의 타입은 요소 노드(ELEMENT_NODE)여야 합니다.')
  }

  if (typeof styleProp !== 'string') {
    throw new TypeError(
      '두번째 매개변수 styleProp의 타입은 string 이어야 합니다.'
    );
  }

  if (!(styleProp in document.body.style)) {
    throw new SyntaxError(
      '두번째 매개변수 styleProp 속성은 인식되지 않는 비표준 스타일 속성입니다.'
    );
  }

  if (typeof value === 'number') {
    value = `${value}px`;
  }

  node.style[styleProp] = value;
}