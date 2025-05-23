//your JS code here. If required.
let n = prompt("Enter year:");
if(n % 4 === 0 && n % 100 !== 0) || n % 400 === 0; {
	console.log(366);
}
else {
	console.log(365);
}