//using for in loop to iterate objects

const obj={
    js:"javascript",
    cpp:"C++",
    rb:"Ruby"
}
// 
// for (const key in obj) {
//     console.log(key);
// }//this is to access the keys of the object


for (const key in obj) {
    //console.log(obj[key]);
}//prints the values of the keys in the obj

for (const key in obj) {
    //console.log(`${key} is the shortcut for ${obj[key]}`);
}// O/P:
// js is the shortcut for javascript
// cpp is the shortcut for C++
// rb is the shortcut for Ruby

const lang=["js","java","cpp","c","python"]
for (const i in lang) {
    console.log(i);
}//while using for in loop to iterate  array it will print the indexes which start with 0

for (const i in lang) {
    console.log(lang[i]);
}//this will print the data in the array

// Maps are iteratable using the for in loop