 let value;

const dateObject= new Date(); // date now
console.log(dateObject); // out : Sat Jan 08 2022 17:42:08 GMT+0300 (GMT+03:00)

const dateTime1= new Date("12-30-2001 23:55:45");
console.log(dateTime1); // out : Sun Dec 30 2001 23:55:45 GMT+0200 (GMT+03:00)

const dateTime2= new Date("September 19 1997"); 
console.log(dateTime2); // out : Fri Sep 19 1997 00:00:00 GMT+0300 (GMT+03:00)

const dateTime3= new Date("12/30/2001"); 
console.log(dateTime3); // out : Sun Dec 30 2001 00:00:00 GMT+0200 (GMT+03:00)

value = dateTime3.getMonth(); //index of Month (start 0)
console.log(value); // out : 11 (12)

value = dateTime3.getDate(); //index of Day of Month (start 1)
console.log(value); // out : 30

dateTime3.setDate(29);
value = dateTime3.getDate(); //index of Day of Month (start 1)
console.log(value); // out : 29

value = dateTime3.getDay(); //index of Day of Week (start 0)
console.log(value); // out : 0 (Sunday)



value = dateTime3.getHours();
value = dateTime3.getMinutes(); 
value = dateTime3.getSeconds(); 
value = dateTime3.getMilliseconds(); 