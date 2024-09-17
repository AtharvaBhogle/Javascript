//HIGHER ORDER ARRAY  LOOPS
// some loops are array specific
//FOR OF
// const num=[1,2,3,4,4,5]
// for (const i of num) {
//     console.log(i);
// }

// const name="ATHAARVAA"
// for (const i of name) {
//     console.log(i);
// }

//MAPS
//maps are similar to objects in js which remember the order in which the data is entered 
//and stores the data in key value pair & only stores unique value
//meaning same data cannot be written twice
const maps=new Map()
maps.set('FirstName',"Atharva")
maps.set('MiddleName',"Ashish")
maps.set('LastName',"Bhogle")
//console.log(maps);
//you can also use them in for of loop


// for (const key of maps) {
//     console.log(key);
// }//this will print all the values in array
// //but to print it as normal


for (const [key,value] of maps) {
    console.log(key,":",value);
}
//output:
// FirstName : Atharva
// MiddleName : Ashish
// LastName : Bhogle