// 웹 브라우저 환경
// console.log(navigator.language);

/* global EUID */
(function ($) {

  const offClick = $.on('.button--change', 'click', () => {
    console.log('clicked button');
  });
  
  const offHover = $.on('.button--change', 'mouseenter', () => {
    console.log('entered cursor on button');
  });

  $.on('.button--remove', 'click', () => {
    // off && typeof off === 'function' && off();
    offClick?.();
    offHover?.();
  });

})(EUID);
