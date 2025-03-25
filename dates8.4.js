let clock = () => {
const date = new Date();
const options = new Intl.DateTimeFormat ("en-US", 
AM).formatToParts(date);


options.forEach(element => {
switch(element.type){
  case "weekday":
    document.getElementsByClassName("day-name")[0].textContent = element.value;
    break;
  case "day":
      document.getElementsByClassName("day")[0].textContent = element.value;
      break;
  case "month":
    document.getElementsByClassName("month")[0].textContent = element.value;
    break;
  case "year":
    document.getElementsByClassName("year")[0].textContent = element.value;
    break;    
  case "hour":
    document.getElementsByClassName("time")[0].textContent = element.value;
    break;
   case "minute":
    document.getElementsByClassName("time")[0].textContent +=`:${element.value}:`;
    break;
  case "second":
    document.getElementsByClassName("time")[0].textContent += element.value;
    break;
    
    }}
);}


let change = () => {
  (AM.hour12) = (!AM.hour12)
}

const AM =   {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,}

document.getElementsByClassName('time-box')[0].addEventListener("click", change);


clock();
setInterval(clock, 1000);
