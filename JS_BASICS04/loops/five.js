//usinhg the built in method for iterarting array
const lang=["js","java","cpp","c","python"]
lang.forEach(function (val){
    console.log(val);
})
//here we are using the caallback function and while using it we 
//must rem that callback function doesnt require any name


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// } //this is the call bacck function that is written separately

// coding.forEach(printMe)//this is  the  loop and instead of writting the 
//function we have given the REFERENCE of the pre-written function

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )//accessing the value of the obj inside the array