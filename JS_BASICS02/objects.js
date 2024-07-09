// there are 2 types of objects 
//SINGLETON OBJS
//Object.create

//Object Literals
const sym=Symbol("atharva")
const newObj={
    name:"ATHRVA",
    age:20,
    [sym]:"MySymbol",
    location:"VIRAR",
    lastLoggedIn:["Friday","Saturday"],
    isLoggedIn:true
}
//console.log(newObj.name);
//console.log(newObj["name"]);  
//console.log(newObj[sym]);// it prints the correct value but when we check its datatype it is string which need to be symbol so to
//do that we write the sym inn square brackets like[sym] and to print it you do not need to add "" inside the brackets like other keys in the bjct
// to do changes in the key in the object
newObj.name="ATHARVABHOGLE"
//console.log(newObj["name"]);// this prints the changed value from the object
// Object.freeze(newObj)//this will nullify all the changes made to the object after this statement is written
newObj.name="ATHARVABHOGLE@gdhicbsdhc"
//console.log(newObj);//no changes from the above statemnet have taken place
newObj.greeting=function(){
    console.log("Welcome user");
}
console.log(newObj.greeting);// gives reference of the func but doesnt executes it
console.log(newObj.greeting());// executes the function and gives the value
// to use keys from the same object
newObj.newFun=function(){
    console.log(`welcome user,${this.name}`);// by using the this keyword you can use the key of the same obj
}
console.log(newObj.newFun());

