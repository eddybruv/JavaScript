/**
 * @brief : JavaScript date objects
 * NB: Date objects are static
 */

//4 ways to create a new date object.

var d = new Date();
//creates a new date object with the current date and time

new Date(year, month, day, hours, minutes, seconds, milliseconds);
//creates a new date object with a specified date and time in that order.
d = new Date(2021, 11, 03, 22, 44, 9898);
//one or two digits on the years position will be interpreted as 19xx.


d = new Date(milliseconds);
//creates a date object corresponding from 1/1/1970 till milliseconds


d = new Date("October 13, 2021 11:13:00");
//creates a new date object from a date string