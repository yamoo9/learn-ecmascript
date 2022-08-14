class DiceSound {
  #audio = null;

  constructor(src) {
    this.#audio = new Audio(src);
  }
  play() {
    this.#audio.play();
  }
  stop() {
    this.#audio.pause();
    this.#audio.currentTime = 0;
  }
}

export const diceSound = new DiceSound('/assets/rollingDiceSound.mp3');
