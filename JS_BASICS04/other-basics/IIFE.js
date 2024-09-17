//immediately invoked function expression(IIFE)
//it is a way to write a function that will be immediately executed as after it is defined 

//function name(uname) {
    //console.log(`welcome ${uname}`);
//}
//name("atharva")
//()  //contains function defination like name , parameter , keyword,etc,../ 
//()    //this pair is used for executing the function//IIFE WAY


((name)=>{
    //also called as "UNNAMED IIFE"
    console.log(name);
})("athrva");//arroow function in the form of IIFE
//use ; between each IIFE when using multiple IIFE
(function name(lastname){
    //is also caalled as "NAMED IIFE"
    console.log(lastname);
})("Bhogle")//normal function as IIFE