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

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
