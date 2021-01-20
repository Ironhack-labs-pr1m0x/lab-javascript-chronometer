const chronometer = new Chronometer();

//! • CONNECT • //

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

//! • RENDERING • //

function printTime() {
  setInterval(() => {
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minUni.innerText = minutes[1];
  minDec.innerText = minutes[0];
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secUni.innerText = seconds[1];
  secDec.innerText = seconds[0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const currentMins = chronometer.twoDigitsNumber(chronometer.getMinutes());
  const currentSecs = chronometer.twoDigitsNumber(chronometer.getSeconds());
  splits.insertAdjacentHTML(
    'beforeend',
    `<li>${currentMins}:${currentSecs}</li>`
  );
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  chronometer.stopClick();
  btnLeft.innerText = 'START';
  btnLeft.classList.add('start');
  btnLeft.classList.remove('stop');
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT';
  btnRight.classList.add('split');
  btnRight.classList.remove('reset');
}

function setStartBtn() {
  chronometer.startClick();
  printTime();
  btnLeft.innerText = 'STOP';
  btnLeft.classList.add('stop');
  btnLeft.classList.remove('start');
}

function setResetBtn() {
  btnRight.innerText = 'RESET';
  btnRight.classList.add('reset');
  btnRight.classList.remove('split');
}

//! • EVENTS • //

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    setStartBtn();
    setSplitBtn();
  } else {
    setStopBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('split')) {
    setSplitBtn();
    printSplit();
  } else {
    setResetBtn();
    clearSplits();
    chronometer.currentTime = 0;
    printSeconds();
    printMinutes();
  }
});
