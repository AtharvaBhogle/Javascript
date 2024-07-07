//DATE

let dateToday=new Date()
console.log(dateToday);// it is not readable\
console.log(dateToday.toString());// give somewhat  in readable format 
console.log(dateToday.toDateString())//gives only date and day
console.log(dateToday.toTimeString());//gives only universally co-ordinnated  time
console.log(dateToday.toISOString());
console.log(dateToday.toJSON());
console.log(dateToday.toLocaleString());// works like normal localestring method and add comma between date and time and its quite readable
console.log(dateToday.toLocaleTimeString());// displays only time 
console.log(dateToday.toLocaleDateString());// displays only date
console.log(typeof dateToday);// its an object and this can be asked in interviews
