const css = (function() {

  // 비공개
  // getStyle
  const getStyle = function(node, prop) {
    if (typeof node === 'string') node = document.querySelector(node);
    return getComputedStyle(node, null).getPropertyValue(prop);
  };
  
  // setStyle
  const setStyle = function(node, prop, value) {
    if (typeof node === 'string') node = document.querySelector(node);
    console.log(node);
    node.style[prop] = value;
  };

  // 공개 API
  // css
  const css = function(node, prop, value) {
    if (!value) return getStyle(node, prop);
    setStyle(node, prop, value);
  }

  return css;

})();