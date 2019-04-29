'use strict';
const socket = new WebSocket(`ws://localhost:8080`);
var numberStrings = ["*", "*", "*", "*"];
var currentNumberPointer = 0;
var state = "alarm"
var t;
sendData("Hello, server", "8080");
render();
// Event Listeners
socket.addEventListener('message', function (event) {
  console.log('Message from server ', event.data);
});


// Functions
function render() {
  document.getElementById('num-0').innerHTML = numberStrings[0];
  document.getElementById('num-1').innerHTML = numberStrings[1];
  document.getElementById('num-2').innerHTML = numberStrings[2];
  document.getElementById('num-3').innerHTML = numberStrings[3];
}

function pressNum(num) {
  if (currentNumberPointer < 4) {
    numberStrings[currentNumberPointer] = num;
    currentNumberPointer++;
  }
  render();
}

function pressBack() {
  numberStrings[currentNumberPointer] = "*";
  if (currentNumberPointer > 0) currentNumberPointer--;
  render();
}

function pressEnter() {
  turnOffAlarm();
}

function turnOffAlarm() {
  clearInterval(t);
  document.body.style.backgroundColor = "white";
}

function setOffAlarm() {
  t = setInterval(() => {
    if (state === "alarm") {
      console.log(document.body.style.backgroundColor);
      if (document.body.style.backgroundColor === "red") {
        document.body.style.backgroundColor = "white"
      } else {
        document.body.style.backgroundColor = "red"
      }
    }
  },500);
}

function sendData(message, port) {
  socket.addEventListener('open', function (event) {
    socket.send(message);
  });
}
