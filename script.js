//your JS code here. If required.
let n = prompt("Please enter your name:");
n = parseInt(n);
let days = 0;
if(n % 4 === 0 && n % 100 !== 0) || n % 400 === 0; {
	days = 366;
}
else {
	days =365;
}

console.log(days);