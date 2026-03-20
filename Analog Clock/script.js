class AnalogClock {
  constructor() {
    this.hourHand = document.querySelector(".hour");
    this.minuteHand = document.querySelector(".minute");
    this.secondHand = document.querySelector(".second");
  }

  updateTime() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Convert time to degrees
    const secDeg = (seconds / 60) * 360;
    const minDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;

    this.rotateHand(this.secondHand, secDeg);
    this.rotateHand(this.minuteHand, minDeg);
    this.rotateHand(this.hourHand, hourDeg);
  }

  rotateHand(element, degree) {
    element.style.transform = `rotate(${degree}deg)`;
  }

  start() {
    this.updateTime(); // initial call
    setInterval(() => this.updateTime(), 1000);
  }
}

// Create and start clock
const clock = new AnalogClock();
clock.start();