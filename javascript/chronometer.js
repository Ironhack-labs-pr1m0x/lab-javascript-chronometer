class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }
  twoDigitsNumber(number) {
    let twoDigitsNumber = '';
    const numToStr = number.toString();

    return numToStr.length === 1
      ? (twoDigitsNumber += `0${number}`)
      : (twoDigitsNumber += `${number}`);
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const minutes = this.twoDigitsNumber(this.getMinutes());
    const seconds = this.twoDigitsNumber(this.getSeconds());

    return `${minutes}:${seconds}`;
  }
}
