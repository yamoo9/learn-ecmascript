const animate = (() => {
  let clearId = 0;

  return function recursion(callback, FPS = 60) {
    callback?.();
    clearId = setTimeout(recursion.bind(null, callback, FPS), 1000 / FPS);
    return () => clearTimeout(clearId);
  };
})();
