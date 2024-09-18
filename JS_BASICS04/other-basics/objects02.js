const user={
    userfullname:{
        firstname:"AATHARVA",
        lastname:"BHOGLE"
    }
}// this is an example of the nested object
//console.log(user);//this  prints the userfullname and its nesting
//console.log(user.userfullname);//it prints the insides of the userfullname
//console.log(user.userfullname.firstname);

//to combine objects with other objects 
const obj1={1:"one",2:"two"}
const obj2={3:"three",4:"four"}
//now to combine 2 objs you can try various methods
//const obj3={obj1,obj2}//this gives the same issue as the array
//console.log(obj3);
//another method is 
//const obj4=Object.assign({},obj1,obj2)// here what we do is the first given curly braces act as a target object creating an empty obj and the rest act
// as the source of data so in this way even in future if we need to add more objects togeether we can just simply write in the source side 
//console.log(obj4);
//another way is using the spread operator
const obj4={...obj1,...obj2}//gives the same o/p as the above but more clean code and ez to write
//console.log(obj4);
// when we work with the database we get values in the form of arrays
const obj5=[
    {
        name:"ATHARVA",
        email:"atharva@gmail.com"
    },
    {

    },
    {

    },
    {

    },
    {

    }
]
// to get the keys and values of an object 
//console.log(Object.keys(obj4));
//console.log(Object.values(obj4));
// to ptint all the key value pairs as array
//console.log(Object.entries(obj4));
// to check if the given object has a certain specific property
//console.log(obj4.hasOwnProperty('isLoggedIn'));// return a boolean vaalue , 
//and is helpfull during looping of a object as if there is a value that is non existent the ther is a chance that loop will crash
// OBJECT DESTRUCTTRING
const destruct={
    name:"new object",
    pass:"object"
}
const{name,pass}=destruct
console.log(destruct.name);//this does the ssame but we need to write it multiple times for every property
console.log(name,pass);// here by doing this we can simplify our code and make it look more presentable