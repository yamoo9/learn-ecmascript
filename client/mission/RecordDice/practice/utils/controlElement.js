// DOM Element enable|disable

function enableElement(element) {
  // 1. validation
  if (element?.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError(
      'enableElement 함수의 첫번째 인자는 DOM 요소 노드여야 합니다.'
    );
  }

  // 2. implement logic
  element.disabled = false;
}

function disableElement(element) {
  // 1. validation
  if (element?.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError(
      'disableElement 함수의 첫번째 인자는 DOM 요소 노드여야 합니다.'
    );
  }

  // 2. implement logic
  element.disabled = true;
}

function isEnableElement(element) {
  // 1. validation
  if (element?.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError(
      'isEnableElement 함수의 첫번째 인자는 DOM 요소 노드여야 합니다.'
    );
  }

  // 2. implement logic
  return element.disabled === false;
}

function visibleElement(element) {
  // 1. validation
  if (element?.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError(
      'visibleElement 함수의 첫번째 인자는 DOM 요소 노드여야 합니다.'
    );
  }

  // 2. implement logic
  element.hidden = false;
}

function invisibleElement(element) {
  // 1. validation
  if (element?.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError(
      'invisibleElement 함수의 첫번째 인자는 DOM 요소 노드여야 합니다.'
    );
  }

  // 2. implement logic
  element.hidden = true;
}

function isVisibleElement(element) {
  // 1. validation
  if (element?.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError(
      'isVisibleElement 함수의 첫번째 인자는 DOM 요소 노드여야 합니다.'
    );
  }

  // 2. implement logic
  return element.hidden === false;
}

function toggleElement(element, type) {
  // type에 따라 활성/비활성 또는 표시/감춤 처리하는 유틸리티 함수
  switch (type) {
    default:
    case 'visible':
    case 'show':
      isVisibleElement(element)
        ? invisibleElement(element)
        : visibleElement(element);
      break;
    case 'enable':
    case 'disable':
      isEnableElement(element)
        ? disableElement(element)
        : enableElement(element);
  }
}
