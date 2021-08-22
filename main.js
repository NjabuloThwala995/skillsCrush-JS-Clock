var currentTimeDisplay = document.getElementById('timeDisplay');
var btnSetAlarm = document.getElementById('setALarm');
var alarmHour = document.getElementById('alarmHour');
var alarmMins = document.getElementById('alarmMins');
var alarmSeconds = document.getElementById('alarmSeconds');
var btnSaveAlarm = document.getElementById('saveAlarm');
var alarmDiv = document.getElementsByClassName('alarmInputs');
var btnStopWatch = document.getElementById('startStopWatch');
var stopDisplay = document.getElementById('stopDisplay');
var stopWatchDisplay = document.getElementsByClassName('stopWatchDisplay');
var stpSecond = 0;
var stpMinute = 0;
var stpHour = 0;

function displayCurrentTime() {
  const noon = 12;
  let meridiem = "AM";
  let today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  if (hours => noon) {
    meridiem = 'PM';
  }
  var time = timeStringFormatter(hours, minutes, seconds) + "  " + meridiem;
  currentTimeDisplay.innerHTML = time;
}

function createAlarm(hour, minutes, second) {
  this.second = second;
  this.minutes = minutes;
  this.hour = hour;

  console.log("New Alarm Set for " + timeStringFormatter(this.hour, this.minutes, this.second));
}

function startStopWatchDisplay() {
  stpSecond++;
  if (stpSecond == 60) {
    stpMinute++;
    stpSecond = 0;
  }
  let stopWatchTime = timeStringFormatter(stpHour, stpMinute, stpSecond);
  stopDisplay.innerHTML = stopWatchTime;
}
window.setInterval(displayCurrentTime, 1000);

function timeStringFormatter(hour, minute, second) {
  if (hour < 10) {
    hour = '0' + hour;
  }

  if (minute < 10) {
    minute = '0' + minute;
  }

  if (second < 10) {
    second = '0' + second;
  }
  return hour + ":" + minute + ":" + second;
}

btnStopWatch.addEventListener('click', (e) => {
  stopWatchDisplay[0].style.display = 'block'
  if (e.target.innerHTML == 'Start StopWatch') {
    e.target.innerHTML = 'Stop StopWatch';
  } else {
    e.target.innerHTML = 'Start StopWatch';
  }
  window.setInterval(startStopWatchDisplay, 1000);
});

btnSaveAlarm.addEventListener('click', () => {
  createAlarm(alarmHour.value, alarmMins.value, alarmSeconds.value);
      alarmDiv[0].style.display = 'none';
  
})

btnSetAlarm.addEventListener('click', () => {
  let today = new Date();
  alarmHour.value = today.getHours();
  alarmMins.value = today.getMinutes();
  alarmSeconds.value = today.getSeconds();
  alarmDiv[0].style.display = 'block';
}, false);