var currentTimeDisplay = document.getElementById('timeDisplay');
var btnSetAlarm = document.getElementById('setALarm');
var alarmHour = document.getElementById('alarmHour');
var alarmMins = document.getElementById('alarmMins');
var alarmSeconds = document.getElementById('alarmSeconds');
var btnSaveAlarm = document.getElementById('saveAlarm');
var alarmDiv = document.getElementsByClassName('alarmInputs');

function displayCurrentTime() {
  const noon = 12;
  const nightClockBackGround = 'black';
  const nightDocumentColor = 'white';
  let meridiem = "AM";
  let today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  if (hours => noon) {
    meridiem = 'PM';
  }

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  var time = hours + ":" + minutes + ":" + seconds + "  " + meridiem;
  currentTimeDisplay.innerHTML = time;

}

function createAlarm(hour, minutes, second) {
  this.second = second;
  this.minutes = minutes;
  this.hour = hour;

  console.log("New Alarm Set for " + this.hour + ": " + this.minutes + ": " + this.second);
}

btnSetAlarm.addEventListener('click', () => {
  let today = new Date();
  alarmHour.value = today.getHours();
  alarmMins.value = today.getMinutes();
  alarmSeconds.value = today.getSeconds();    
  alarmDiv[0].style.display = 'block';

}, false);

btnSaveAlarm.addEventListener('click', () => {
  createAlarm(alarmHour.value, alarmMins.value, alarmSeconds.value);
})
window.setInterval(displayCurrentTime, 1000);
