const d = new Date();

d.setDate();		    //set the day as a number (1-31)
d.setFullYear()	    //Set the year (optionally month and day separated by commas)
d.setHours()		    //Set the hour (0-23)
d.setMilliseconds()	//Set the milliseconds (0-999)
d.setMinutes()	    //Set the minutes (0-59)
d.setMonth()		    //Set the month (0-11)
d.setSeconds()	    //Set the seconds (0-59)
d.setTime()		      //Set the time (milliseconds since January 1, 1970)

//setDate() can be used to add days
d.setDate(d.getDate() + 50);

/**
  * COMPARE DATES.
	* Dates can easily be compared.
	*/

let text = "";
const today = new Date();
const someday = new Date();

someday.setFullYear(2016, 10, 24);

if (someday > today) {
	text = "Today is before Oct 24, 2016";
} else {
	text = "Today is after Oct 24, 2016";
}
