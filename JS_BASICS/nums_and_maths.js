// VARIOUS METHODS OF THE NUMBER 

let score = new Number(400)
//console.log(score);// explicitly defines it  as number 

// you can also convert the number to string to use its methods 
//console.log(score.toString().charAt(2));
//console.log(score.toString().length);

let number = 100.8387
//console.log(number.toFixed(3));//determines how much didgits will be shown after the dot 

let num = 882.11033
//console.log(num.toPrecision(4));// displays the amount of number given in the method o/p will be 882.1

let hundreds=10000000
//console.log(hundreds.toLocaleString());// its  default display value type will be american standard
//console.log(hundreds.toLocaleString('en-IN'));// changes the default display type to indian standard

//*************************************MATHS*******************************************/
let scoreOne= 4.5
console.log(Math.ceil(scoreOne));
console.log(Math.floor(scoreOne));
console.log(Math.random());

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
