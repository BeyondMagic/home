// load time in the screen
const startTime = () => {
  const date = new Date();
  const [h,m,s] = [date.getHours(), date.getMinutes(), date.getSeconds()].map(e => formatTime(e));
  document.getElementById('time').innerHTML = `${h}:${m}:${s}`;
  setTimeout('startTime()', 500);
}

// format time for better output (with zeros)
const formatTime = i => {
  if (i < 10) i = "0" + i;
  return i;
}

// date
const loadDate = () => {
  const date = new Date();
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleString('en-gb', options);
}

(function (){
  startTime();
  document.getElementById('nowaday').innerHTML = TIME_NOW_COMPARE = loadDate();

})();

