
let name = true
console.log(typeof name);
console.log(name);
let convertType=Number(name)
console.log(typeof convertType);
console.log(convertType);
 
//if you give a number i the disguise of string like "33" then it will be converted to number 
// but if you give number as well as string together like "33abc"  and then convert it to number then it will be converted no hesitation but if you display that var it will display NaN(Not a Number)


let  var1=1
console.log(typeof var1);
let var2=Boolean(var1)
console.log(typeof var2);
console.log(var2);
 
// if you give value 1 to var and change its type to boolean then it will automatically will be converted to true as true=1 or false=0
// 1=> true or 0=> false
//if you give an empty string the it will display false 
// if you  give a string it wil display true

let number = 100
let  stringTonum=String(number)
console.log(stringTonum);//converts to stringS
console.log(typeof stringTonum);// gives string

/*************************OPERATIONS****************/

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);// used for denotinng power like 2 raise to 2
console.log(2/2);
console.log(2%3);// remainder

console.log(1+2+3+"2");
console.log("1"+2+3);

//study link 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment