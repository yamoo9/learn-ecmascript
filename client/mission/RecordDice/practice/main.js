/* global memo, visibleElement, invisibleElement, enableElement, disableElement, bindEvent, getRandomMinMax, animate, DiceSound */

(() => {
  /* Configuration ------------------------------------------------------------ */

  const FPS = 8;

  /* travesal DOM Elements ---------------------------------------------------- */

  memo('dice', () => document.querySelector('.dice'));
  memo('recordListWrapper', () => document.querySelector('.recordListWrapper'));
  const [rollingDiceButton, recordButton, resetButton] = memo(
    'controlButtons',
    () => Array.from(document.querySelectorAll('.buttonGroup button'))
  );

  /* functions ---------------------------------------------------------------- */

  function rollingDice() {
    return getRandomMinMax(1, 6);
  }

  function drawDice(diceNumber) {
    memo('dice').value = diceNumber;
  }

  /* event handlers ----------------------------------------------------------- */

  memo('diceSound', () => new DiceSound('/assets/rollingDiceSound.mp3'));

  const handleRollingDice = (() => {
    let isRolling = false;
    let stopAnimate = null;

    // memo.getCache();

    return () => {
      // const diceSound = new DiceSound('/assets/rollingDiceSound.mp3');
      memo.getCache();
      if (!isRolling) {
        stopAnimate = animate(() => drawDice(rollingDice()), FPS);
        disableElement(recordButton);
        disableElement(resetButton);
        memo('diceSound').play();
      } else {
        stopAnimate();
        enableElement(recordButton);
        enableElement(resetButton);
        memo('diceSound').stop();
        memo('diceSound', () => null);
      }
      isRolling = !isRolling;
    };
  })();

  const handleRecord = () => {
    visibleElement(memo('recordListWrapper'));
  };
  const handleReset = () => {
    console.log('reset');
  };

  /* bind events -------------------------------------------------------------- */

  bindEvent(rollingDiceButton, 'click', handleRollingDice);
  bindEvent(recordButton, 'click', handleRecord);
  bindEvent(resetButton, 'click', handleReset);
})();
