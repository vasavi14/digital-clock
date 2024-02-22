window.onload = function()
{
    getTime()
    getDay()

}
function getTime()
{
    var today = new Date()
    var h = today.getHours()
    var m = today.getMinutes()
    var s = today.getSeconds()
    console.log(h+":"+m+":"+s)
   
    h = chckePrependZero(h)
    m = chckePrependZero(m)
    s = chckePrependZero(s)

    document.getElementById('clockDisplayId').innerHTML = h+":"+m+":"+s
}
setInterval("getTime()", 1000)

var chckePrependZero = function(value){
    if(value<10)
        return "0"+value    
    else
        return value    
}

function getDay()
{
    
    let day;
switch (new Date().getDay()) 
{
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var dt=new Date();
    var date=dt.getDate();
    const d = new Date();
    let name = month[d.getMonth()];
    document.getElementById("day").innerHTML = day + "," + name+","+date;

   
}

function updatePeriod() {
    const now = new Date();
    const periodElement = document.getElementById('period');

    const hours = now.getHours();
    let period = '';

    if (hours >= 0 && hours < 12) {
        period = 'AM';
    } else {
        period = 'PM';
    }

    periodElement.textContent = period;
}

setInterval(updatePeriod, 1000);
updatePeriod();
