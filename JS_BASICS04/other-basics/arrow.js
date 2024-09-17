//THIS FUNCTION : IT IS USED TO TELL US THE CONETXT IN WHICH WE ARE WORKIN
const user={
    uname:"athrva",
    pass:"athu",
     welcome:function(){
        console.log(`welcome ${this.uname}`);
        console.log(this);
     }
}
//user.welcome()
//user.uname="Hitesh"//here the context is changed 
//user.welcome()//prints "welcome Hitesh"
//console.log(user.welcome());//prints :welcome athrva
//{ uname: 'athrva', pass: 'athu', welcome: [Function: welcome] } . this is becuz of the this 
//console.log(this);// this defines the conext of the global scope 
// this prints : {} which means empty 
// but it deffers if different environment
// when we run this in node environment it gives emmpty 
//but when we run it in coonsole of the browser it gives the window events which is 
//becuz the default object of the brower is  the window object which are used for managing window evenets
//"THIS" DOES NOT WORK INSIDE THE FUNCTIONS  

//ARROW FUNCTIONS :
 
function normal() {//normall function 
    //console.log("normal");
}

const one=function(){// other way to define function
}

const two =()=>{// arrow function

}
//const addtwo=(num1,num2)=>{
    //return num1+num2
//}
//console.log(addtwo(5,6));

//another way to define the abbove function is 
//const addtwo=(num1,num2)=> num1+num2// this also valid

//const addtwo=(num1,num2)=> (num1+num2)//this is also valid and its called implicit way whic mean you 
// dont have to explicitly mention the "return" keyword and 
// also remember to use only "()" brackets and not "{}" this one
//console.log(addtwo(5,6));

// to use objects in this way
//INCORRECT WAY
//const obj=()=>{uname:"atharva"}
//console.log(obj.uname);// prints undefined 

//CORRECT WAY
const obj=()=>({myname:"atharva"})
console.log(obj());// { myname: 'atharva' }