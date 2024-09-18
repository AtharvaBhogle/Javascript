//TRUTHY VALUE
let uname="Atharva"

 if (uname) {
    console.log("UNAME ASSIGNED");
 }else{
    console.log("UNAME NOT ASSIGNED ");
 }

 //HERE IT WILL PRINT THAT THE NAME IS ASSIGNED
//BUT IF WE GIVE AN EMPTY STRING THEN IT WILL EXECUTE THE ELSE BLOCK
//empty array is truthy value

//FALSY VALUES
// false, 0,-0,BigInt 0n, "",null,undefined,NaN

//TRUTHY VALUES
//"0",'false'," ",[],{},function(){} 


//Nullish Caolescing Operator(??):null undefined
//can be used for handling errors 
//like in case of working with the DB if the valu returned by it is null and same value like 
// 10 or 20 or etc it will stoore that value instead of null
// null will be like as backup lik if any value is not given it will be null
 let num=null ?? 10
 //console.log(num);// prints 10

 let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
//console.log(val1);


//TERNIARY OPERATOR
// like a if statement 
//SYNTAX: condition ? true:false 

let name="ATHARVA"
name=="ATHARVA" ? console.log("NAME IS ATHARVA") : console.log("NAME IS NOT ATHARVA"); 
// PRINTS : "name is  atharva" 
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// to check if the objects is empty or not

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}