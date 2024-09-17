// if  else
let temp=37
if(temp === 3700){
    console.log(`Temp is ${temp}`);
}else{
    console.log(`Temp is greater than ${temp} degress`);
}//prints "Temp is 37"
console.log("Loop executed");

//if statement can be written in other way too
 let name = "RIKO"
 if (name == "RIKO") console.log("name is correct");// in this type we dont use curly braces we just consider that this line is a scope and it is called as implicit scope 
 // you can continue this to the next line too by using the , between log's but
 //then your code  becomes more difficult to read so its NOT RECOMMENDED

 //NESTING  using "ELSE IF"
 let  height = 6.0
 if (height==5.4) {
    console.log(`height is 5.4`);
 }else if (height==5.9) {
    console.log(`height is 5.9`);
 }else if (height==6.0) {
    console.log(`height is 6.0`);
 }

 // checking multiple conditions at  the same time by using the "&&"(AND op)
let userLogged=true
let  debitCard=true
if (userLogged && debitCard) {// in this both side of the operaator must be true 
    console.log("user allowed");
}else{
    console.log("not allowed");
}

//using the "||"(OR operator) where atleast one condition must be true 
let fromGoogle=false
let fromEmail=true
if (fromGoogle||fromEmail) {
    console.log("user Logged In");
    
}