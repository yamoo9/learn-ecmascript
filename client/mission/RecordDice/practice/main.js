/* global bindEvent, getRandomMinMax, animate, DiceSound */

(() => {
  /* Configuration ------------------------------------------------------------ */

  const FPS = 8;

  /* Libraries ---------------------------------------------------------------- */

  const diceSound = new DiceSound('/assets/rollingDiceSound.mp3');

  /* travesal DOM Elements ---------------------------------------------------- */

  const diceElement = document.querySelector('.dice');
  const [rollingDiceButton, recordButton, resetButton] = Array.from(
    document.querySelectorAll('.buttonGroup button')
  );

  /* functions ---------------------------------------------------------------- */

  function rollingDice() {
    return getRandomMinMax(1, 6);
  }

  function drawDice(diceNumber) {
    diceElement.value = diceNumber;
  }

  /* event handlers ----------------------------------------------------------- */

  const handleRollingDice = (() => {
    let isRolling = false;
    let stopAnimate = null;

    return () => {
      if (!isRolling) {
        stopAnimate = animate(() => drawDice(rollingDice()), FPS);
        diceSound.play();
      } else {
        stopAnimate();
        diceSound.stop();
      }
      isRolling = !isRolling;
    };
  })();

  const handleRecord = () => {
    console.log('record');
  };
  const handleReset = () => {
    console.log('reset');
  };

  /* bind events -------------------------------------------------------------- */

  bindEvent(rollingDiceButton, 'click', handleRollingDice);
  bindEvent(recordButton, 'click', handleRecord);
  bindEvent(resetButton, 'click', handleReset);
})();
