export const animate = (() => {
  let clearId = 0;

  return function recursion(callback, FPS = 60) {
    callback?.();
    clearId = setTimeout(recursion.bind(null, callback, FPS), 1000 / FPS);
    return () => clearTimeout(clearId);
  };
})();

// const animate = (() => {
//   let clearId;
//   return function animate(render, FPS = 60) {
//     render?.();
//     // clearId = setTimeout(() => animate(render, FPS), 1000 / FPS);
//     clearId = setTimeout(animate.bind(null, render, FPS), 1000 / FPS);
//     return () => clearTimeout(clearId);
//   };
// })();

// const stopAnimate = animate(() => console.log('render'));

// document.addEventListener('click', () => {
//   stopAnimate();
// });
