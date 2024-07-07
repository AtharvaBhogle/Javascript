//ARRAYS
const arr=[0,101,20,100,"atharva",true]
//console.log(arr[5]);
//console.log(arr.length);

//ARRAY METHODS
let myArr=[1,2,3,4,5,6]
//myArr.push(7)//pushes the given element in the array
//myArr.pop()//pops the recently added element
//myArr.unshift(10)//inserts the element in the start of the array
//myArr.shift()//works like pop but removes value from the start of the array
//console.log(myArr.indexOf(9));//gives index of the element in the array if the element is not in the array it returns -1
//console.log(myArr.includes(9));//returns a boolean value 
let newArr=myArr.join('$')//converts the datatype of the array to string and prints it without the brackets and with the specified separartor
//console.log(myArr);
//console.log(newArr);

let a=[1,2,3,4,5,6,7]
console.log("A",a);
console.log(a.slice(1,4));// give the elements from the given range but doesnt print the end range i.e 4. Doesnt affect the  orignal array

let b=[1,2,3,4,5,6,7]
console.log("B",b);
console.log(b.splice(1,4));// give the elements from the given range and also includes the element of the end range.It does affect the  orignal array and the specified elements are removed from the array

