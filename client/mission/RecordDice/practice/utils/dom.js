const $dom = (() => {
  function each(data, callback) {
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

  function attr(node, attrNameOrAttributes, attrValue) {
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

  return { each, attr };
})();
