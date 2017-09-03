let month = '';


// Create Date object for the current time
//Define date for anticipated event
// Subtract the value of the future date
// the current date in milli.
// Convert resultant value to variable and create variables of month, day, hour, etc. based on this value. 


let doMath = () => {
today = new Date;
cdevent = new Date(2017,11,111,20);
msPerDay = 24*60*60*1000;
timeLeft = cdevent.getTime() - today.getTime();
daysLeft = Math.ceil(timeLeft / msPerDay);
weeksLeft = Math.ceil(daysLeft / 7);
monthsLeft = daysLeft / 30; 
msperMinute = 60 * 1000;
minutesLeft = Math.ceil(timeLeft / msperMinute);
let hoursLeft = Math.floor(minutesLeft / 60); 

//import HTML tag ID as target, in order to write to DOM the value outputs
let target = document.getElementById('text');
// Define variable which will determine which background is displayed
counter = (Math.floor(Math.random(1) * 17) + 1);

//Write outputs to target variable inner HTML

target.innerHTML = `There are . . . <br><br>${monthsLeft.toFixed(2)} months <br>${weeksLeft} Weeks<br> ${daysLeft} Days<br> ${hoursLeft} Hours<br> ${minutesLeft} Minutes <br> ${Math.ceil(timeLeft / 1000)} Seconds <br><br> until (Insert Event!)`; 
};

doMath();

//Set Calculating and writing to DOM function to execute every second
setInterval(doMath, 1000);


// Code for having Wall paper change each time the page is loaded

if (counter == 1) {
	document.body.style.backgroundImage = "url('aa.jpg')";
} else if ( counter == 2) {
	document.body.style.backgroundImage = "url('ab.jpg')";
} else if ( counter == 3) {
	document.body.style.backgroundImage = "url('ac.jpg')";
} else if ( counter == 4) {
	document.body.style.backgroundImage = "url('ad.jpg')";
} else if ( counter == 5) {
	document.body.style.backgroundImage = "url('ae.jpg')";
} else if ( counter == 6) {
	document.body.style.backgroundImage = "url('af.jpg')";
} else if ( counter == 7) {
	document.body.style.backgroundImage = "url('ag.jpg')";
} else if ( counter == 8) {
	document.body.style.backgroundImage = "url('ah.jpg')";
} else if ( counter == 9) {
	document.body.style.backgroundImage = "url('ai.jpg')";
} else if ( counter == 10) {
	document.body.style.backgroundImage = "url('aj.jpg')";
} else if ( counter == 11) {
	document.body.style.backgroundImage = "url('ak.jpg')";
} else if ( counter == 12) {
	document.body.style.backgroundImage = "url('al.jpg')";
} else if ( counter == 13) {
	document.body.style.backgroundImage = "url('am.jpg')";
} else if ( counter == 14) {
	document.body.style.backgroundImage = "url('august.jpg')";
} else if ( counter == 15) {
	document.body.style.backgroundImage = "url('fall.jpg')";
} else if ( counter == 16) {
	document.body.style.backgroundImage = "url('oct.jpg')";
} else if ( counter == 17) {
	document.body.style.backgroundImage = "url('sept.jpg')";
};
