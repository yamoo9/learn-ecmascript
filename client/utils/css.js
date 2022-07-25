/* global getStyle, setStyle */

function css(node, styleProp, value) {
  return !value ? getStyle(node, styleProp) : setStyle(node, styleProp, value);
}