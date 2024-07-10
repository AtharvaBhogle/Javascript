//Functions
function name(){
    console.log("Atharva");
    console.log("Ashish")
    console.log("Bhogle");
}
//console.log(name());

function add(num1,num2,num3) {
  console.log(num1+num2+num3); 
}
//add(1,2,3)//here the number will print the "ADDITION" of the nums
//add(1,"2",3)//here the first parameter will be assumed to be number but when the second num is  written in "" the it will assume it to be string and any 
//parameter after that will be considered string as well
//add(1,2,"3")// first 2 are added and last is assuemed to be string and js does this using dt conversion . REFEER CONVERSION.JS
//add(1,2,"ATHARVA")//output:3ATHARVA 
//add(1,null,null)//outptu: 1

//when you need to store the result into a variable you van do this
//let result=add(1,2,3)
//console.log(result);//expected outcome:6 , o/p:undefined 
//the console.log inside the function is not reeturning any vaalue it is just displaying the value
//to store the value in a variable it must be reuturned
//you can do that like this:
function add2(num1,num2) {
    //let result=num1+num2
    //return result// any line after th return keyword will not be executed
    
    
    return num1+num2// you can do this way too
}  
const result=add2(3,4)// here the value is actually being stored inside the variable becaause it is being returned 
//console.log("Result outside the function;",result);


function logginMessage(username="user") {// default argument for parameter
    if(username===undefined){
        console.log("please enter username");
        return// this is to avoid executing thee below console.log
    }
    return `${username} logged in`
    
}
//console.log(logginMessage("atharva"))
console.log(logginMessage())// this prints undefined logged in. to counter this we can use if statement or just give a default value


