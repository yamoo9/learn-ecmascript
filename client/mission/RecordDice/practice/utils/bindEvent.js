// bindEvent
// 구현 사양(implement specification)
// const unbindEvent = bindEvent(elementNode, eventType, eventHandler);

export const bindEvent = (elementNode, eventType, eventHandler) => {
  // 1. parameters validation
  if (elementNode?.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError(
      'bindEvent 함수의 첫번째 인자는 문서의 요소 노드여야 합니다.'
    );
  }

  if (!/(click|dblclick|mouseenter|mouseleave)/gi.test(eventType)) {
    throw new TypeError(
      'bindEvent 함수의 두번째 인자는 유효한 이벤트 타입 이어야 합니다.'
    );
  }

  if (typeof eventHandler !== 'function') {
    throw new TypeError(
      'bindEvent 함수의 세번째 인자는 함수 타입 이어야 합니다.'
    );
  }

  // 2. binding event (element: type → handler)
  elementNode.addEventListener(eventType, eventHandler);

  // 3. return unbinding event function
  return () => elementNode.removeEventListener(eventType, eventHandler);
};
