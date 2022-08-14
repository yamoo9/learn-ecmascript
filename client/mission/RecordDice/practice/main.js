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

  function drawDice(diceValue = '?') {
    memo('dice').value = diceValue;
  }

  /* render function ---------------------------------------------------------- */

  let count = 0;
  let total = 0;
  memo('@tbody', () => memo('recordListWrapper').querySelector('tbody'));

  function renderRecordListItem() {
    let diceValue = Number(memo('dice').value);
    const newRecordListItem = /* html */ `
      <tr>
        <td>${++count}</td>
        <td>${diceValue}</td>
        <td>${(total += diceValue)}</td>
      </tr>
    `;

    memo('@tbody').insertAdjacentHTML('beforeend', newRecordListItem);
    memo('recordListWrapper').scrollTop =
      memo('recordListWrapper').scrollHeight;
  }

  function cleanRecordList() {
    memo('@tbody').innerHTML = '';
  }

  /* event handlers ----------------------------------------------------------- */

  memo('diceSound', () => new DiceSound('/assets/rollingDiceSound.mp3'));

  const handleRollingDice = (() => {
    let isRolling = false;
    let stopAnimate = null;

    return () => {
      // const diceSound = new DiceSound('/assets/rollingDiceSound.mp3');

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
      }
      isRolling = !isRolling;
    };
  })();

  const handleRecord = () => {
    visibleElement(memo('recordListWrapper'));
    renderRecordListItem();
  };
  const handleReset = () => {
    invisibleElement(memo('recordListWrapper'));
    cleanRecordList();
    drawDice();
    disableElement(recordButton);
    disableElement(resetButton);
    count = 0;
    total = 0;
  };

  /* bind events -------------------------------------------------------------- */

  bindEvent(rollingDiceButton, 'click', handleRollingDice);
  bindEvent(recordButton, 'click', handleRecord);
  bindEvent(resetButton, 'click', handleReset);
})();
