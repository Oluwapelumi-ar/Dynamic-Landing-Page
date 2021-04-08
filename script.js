const time = document.querySelector('#time');
const greeting = document.querySelector('#greeting');
const yourname = document.querySelector('#name');
const focus = document.querySelector('#focus');

function showTime(){
  const currentTime = new Date();
  let hour = currentTime.getHours();
  let min = currentTime.getMinutes();
  let sec = currentTime.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  //12hr Format
  hour = hour % 12 || 12;

  //Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

  setTimeout(showTime, 1000)
}

//Add Zero when number is single
const addZero = (number) =>{ return (parseInt(number, 10) < 10 ? '0' : '') + number;}

//Set Background Image and Greeting

function setBgandGreeting() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  
  //Morning
  if(hour < 12){
    document.body.style.background = "url('/images/morning.jpeg') no-repeat";
    document.body.style.backgroundSize = 'cover';
    greeting.innerHTML = 'Good Morning';
  }
  //Afternoon
  else if (hour < 18){
    document.body.style.background = "url('/images/afternoon.jpg') no-repeat ";
    document.body.style.backgroundSize = 'cover';
    greeting.innerHTML = 'Good Afternoon';
  }
  //Evening
  else{
    document.body.style.background = "url('/images/night.jpg') no-repeat";
    document.body.style.backgroundSize = 'cover';
    greeting.innerHTML = 'Good Evening';
    document.body.style.color = 'white';
  }
}

//Get Name
const getName = () => {
  if(localStorage.getItem('yourname') === null) {
    yourname.innerHTML = '[May I know Your Name?]'
  } else {
    yourname.innerHTML = localStorage.getItem('yourname');
  }
}

//Set Name
const setName = (event) => {
  if (event.type === 'keypress'){
    //Make sure enter is pressed
    if (event.which == 13 || event.keyCode == 13){
      localStorage.setItem('yourname', event.target.innerText);
      yourname.blur();
    }
  } else {
    localStorage.setItem('yourname', e.target.innerText)
  }
}

//Get Focus
const getFocus = () => {
  if(localStorage.getItem('focus') === null) {
    focus.innerHTML = '[Enter Focus]'
  } else {
    focus.innerHTML = localStorage.getItem('focus');
  }
}

//Set Focus
const setFocus = (event) => {
  if (event.type === 'keypress'){
    //Make sure enter is pressed
    if (event.which == 13 || event.keyCode == 13){
      localStorage.setItem('focus', event.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', event.target.innerText)
  }
}


//Run Functions
showTime();
setBgandGreeting();
getName();
getFocus();

//EventListerners 
yourname.addEventListener('keypress',setName);
yourname.addEventListener('blur',setName);
focus.addEventListener('keypress',setFocus);
focus.addEventListener('blur',setFocus);