let b=100// global scope.
//Note:values in the global scope can be accessed in the block scope but values in the  block scope cannot be accessed in the global scope 
function scope(){ //block scope
    let a=200
    console.log(a);
    console.log(b);//global scope variable
}
//console.log(scope());
//console.log(b);

//NESTED SCOPE
function one() {//parent function
    let uname="atharva"
    console.log("first  function");

    function two() {//child function
        let midName="Ashish"
        console.log(uname);
    }
    //console.log(midName);//gives an error as it it the variable of the child functiion

    two()
} 
//one()
if (true) {
    let uname="atharva"
    
    if (uname === "atharva") {
        let lastname="Bhogle"
        //console.log(uname + lastname);//prints this
    }
    //console.log(lastname);//cannot acess cuz out of the scope
}
//console.log(uname);//cannot be accessed cuz it is out of the scope
//NOTE:child function a can  access the variables of the parent function but its not possible vise-versa


//**********************************INTERESTING***********************/
//there different ways to declare a function and with that arise some problems

// THIS CONCEPT IS CALLED HOISTING

console.log(one(5));// in this type of  declaration if you log the function above the function it does not give any error and gives proper output

function one(num) {
    return num + 1 
}
//two(5)// but in this type of declaration the  problem arises becuz not only we are initializing the function but as well as storingg it in a variable which give error if the log statement is placed before the function declaration
//ERROR:"Cannot access 'two' before initialization"
let two = function(num) {
    return num+2
    
}
console.log(two(5));// works properly

