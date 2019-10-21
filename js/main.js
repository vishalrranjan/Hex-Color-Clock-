
var Clock = document.getElementById("clock");
var HexCode = document.getElementById("hexcode");

function hexClock () {
    var time = new Date();
    var hours = (time.getHours()%12).toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
 
// if length of hours is less than 2 digit ( like 1 O'clock or 9 O'clock) then use if statement for all three vaariable(hours, minutes and seconds). 
    if(hours.length < 2) {
        hours = '0' + hours;
    }

    if(minutes.length < 2) {
        minutes = '0' + minutes;
    }
    
    if(seconds.length < 2) {
        seconds = '0' + seconds;
    }

    var clockStr = hours + ' : ' + minutes + ' : ' + seconds;
    var hexColorStr = '#' + hours + minutes + seconds;

    Clock.textContent = clockStr;
    HexCode.textContent = hexColorStr; 
    
// for updating the color of background 
document.body.style.backgroundColor = hexColorStr;
}

hexClock();
setInterval(hexClock,1000);