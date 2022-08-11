/* global getRandomMinMax, animate */

// 재사용 가능한 함수
// - getRandom(n:number): number
// - getRandomMinMax(min:number, max:number): number

// 주사위를 굴려서 랜덤 수(1~6)를 반환하는 함수
function rollingDice() {
  return getRandomMinMax(1, 6);
}

const diceElement = document.querySelector('.dice');

function drawDice(diceNumber) {
  diceElement.value = diceNumber;
}

const FPS = 8;

const handleRollingDice = (() => {
  let isRolling = false;
  let stopAnimate = null;
  return () => {
    if (isRolling) {
      handleRollingDice.stopAnimate = animate(() => {
        drawDice?.(rollingDice?.());
      }, FPS);
    } else {
      handleRollingDice.stopAnimate?.();
    }
    isRolling = !isRolling;
  };
})();
