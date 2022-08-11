/* global getRandomMinMax */

// 재사용 가능한 함수
// - getRandom(n:number): number
// - getRandomMinMax(min:number, max:number): number

// 주사위를 굴려서 랜덤 수(1~6)를 반환하는 함수
function rollingDice() {
  return getRandomMinMax(1, 6);
}

// const stopAnimate = animate(callback, FPS)
const animate = (() => {
  let clearId = 0;
  return function recursion(callback, FPS = 60) {
    callback?.();
    clearId = setTimeout(recursion.bind(null, callback, FPS), 1000 / FPS);
    return () => clearTimeout(clearId);
  };
})();

// stopAnimate()
