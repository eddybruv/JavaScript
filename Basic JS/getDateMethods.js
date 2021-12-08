const d = new Date();
d.getFullYear();							//returns the year as a four digit number(yyyy)
d.getMonth();									//returns month as a number (0 - 11)
d.getDate();									//returns day as a number (1 - 31)
d.getHours();									//returns the hour(0 - 23)
d.getSeconds();								//returns the second (0 - 59)
d.getMilliseconds();					//returns the millisecond(0 - 999)
d.getTime();									//returns the time since January 1, 1970.

/**
  * You can use an array of names and getMonth() to return the month as a name
	*/
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
let month = months[d.getMonth()];


//same thing with days
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = days[d.getDay()];
