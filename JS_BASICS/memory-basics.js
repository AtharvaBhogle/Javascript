//STACK MEMORY: used for primitive datatypes
let name="atharva"//a variable name is created with value
let nameTwo=name//here another var is created with value of name variable i.e it is given the copy of var name
nameTwo="NotAtharva"//now here we change the value of second variable but it does affect the value of the first var becuz we are making changes in the copy of the first var
//console.log(name);//here the og value will be printed 
//console.log(nameTwo);//here the changed value  will be printed 

//HEAP MEMORY: used for Non-primitive datatypes such as objects,etc.
let userone={ //obj1 which contains var unaame with value atharva
    uname:"atharva"
}
let usertwo=userone//obj2 which takes the REFERENCE of obj1 which means if you change the value of the var in obj2 which is the REFERENCE of obj1 the 
//the value of that var will be changed in the obj1 too.
usertwo.uname="notatharva"
console.log(userone.uname);
console.log(usertwo.uname);
