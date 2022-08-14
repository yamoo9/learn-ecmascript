export function enableElement(element) {
  // 1. validation
  if (element?.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError(
      'enableElement 함수의 첫번째 인자는 DOM 요소 노드여야 합니다.'
    );
  }

  // 2. implement logic
  element.disabled = false;
}

export function disableElement(element) {
  // 1. validation
  if (element?.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError(
      'disableElement 함수의 첫번째 인자는 DOM 요소 노드여야 합니다.'
    );
  }

  // 2. implement logic
  element.disabled = true;
}

export function isEnableElement(element) {
  // 1. validation
  if (element?.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError(
      'isEnableElement 함수의 첫번째 인자는 DOM 요소 노드여야 합니다.'
    );
  }

  // 2. implement logic
  return element.disabled === false;
}

export function visibleElement(element) {
  // 1. validation
  if (element?.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError(
      'visibleElement 함수의 첫번째 인자는 DOM 요소 노드여야 합니다.'
    );
  }

  // 2. implement logic
  element.hidden = false;
}

export function invisibleElement(element) {
  // 1. validation
  if (element?.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError(
      'invisibleElement 함수의 첫번째 인자는 DOM 요소 노드여야 합니다.'
    );
  }

  // 2. implement logic
  element.hidden = true;
}

export function isVisibleElement(element) {
  // 1. validation
  if (element?.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError(
      'isVisibleElement 함수의 첫번째 인자는 DOM 요소 노드여야 합니다.'
    );
  }

  // 2. implement logic
  return element.hidden === false;
}

export function toggleElement(element, type) {
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

export function isElement(node) {
  return node?.nodeType === document.ELEMENT_NODE;
}

export function hasParent(node) {
  return null;
}

export function insertBefore(insertElement, targetElement) {
  // 1. parameter validation
  if (!isElement(insertElement) || !isElement(targetElement)) {
    throw new TypeError('....');
  }
  if (!targetElement.parentNode) {
    throw new Error('....');
  }
  // 2. implement logic
  targetElement.insertAdjacentElement('beforebegin', insertElement);
  // 3. return value?
}

export function insertAfter(insertElement, targetElement) {
  if (!isElement(insertElement) || !isElement(targetElement)) {
    throw new TypeError('....');
  }
  if (!targetElement.parentNode) {
    throw new Error('....');
  }

  targetElement.insertAdjacentElement('afterend', insertElement);
}
export function insertFirst(insertElement, targetElement) {
  if (!isElement(insertElement) || !isElement(targetElement)) {
    throw new TypeError('....');
  }
  if (!targetElement.parentNode) {
    throw new Error('....');
  }

  targetElement.insertAdjacentElement('afterbegin', insertElement);
}
export function insertLast(insertElement, targetElement) {
  if (!isElement(insertElement) || !isElement(targetElement)) {
    throw new TypeError('....');
  }
  if (!targetElement.parentNode) {
    throw new Error('....');
  }

  targetElement.insertAdjacentElement('beforeend', insertElement);
}

export function each(data, callback) {
  if (data && !Array.isArray(data) && typeof data === 'object') {
    for (const [key, value] of Object.entries(data)) {
      callback?.(key, value);
    }
  }
  Array.from(data).forEach(callback);
}

function getAttr(node, attrName) {
  return node.getAttribute(attrName);
}

function setAttr(node, attrName, attrValue) {
  node.setAttribute(attrName, attrValue);
}

export function attr(node, attrNameOrAttributes, attrValue) {
  if (
    attrNameOrAttributes &&
    typeof attrNameOrAttributes === 'object' &&
    !Array.isArray(attrNameOrAttributes)
  ) {
    // attrNameOrAttributes 순환
    each(attrNameOrAttributes, (key, value) => {
      setAttr(node, key, value);
    });
  }
  if (attrValue) {
    setAttr(node, attrNameOrAttributes, attrValue);
  } else {
    return getAttr(node, attrNameOrAttributes);
  }
}
