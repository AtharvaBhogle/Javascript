// for loop 
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    
}// this loop will print the numbers from 1 to 10 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i==6) {
        //console.log("6 is  the best number");
    }
    //console.log(element);
    
}// you ca  n use different staatements inside loops too

//loops inside loop
for (let i = 0; i < 5; i++) {
    const element = i;
    //console.log(`Outer Loop ${i}`);

    for (let j = 0 ; j <= 5 ; j++) {
        const element = j;
        //console.log(`Inner Loop ${j} and Outer Loop ${i}`);       
        //console.log(i+ "*" + j + "=" + i*j); // prints table from 0 to 5 
    }
    
}// this is how to loop in loop works
//control flow will be like when the outer  loop runs for 1 time the
// inner loop runs for 5 time and each time the outer loop runs the inner loop runs 5 time for that 1 time


//using array 
let heros=["IRONMAN","SPIDERMAN","BATMAN","DEADPOOL"]
for (let index = 0; index < heros.length; index++) {
    const element = heros[index];
    console.log(element);
    
}// here the condition is given to print is less than length less than array still
// it is printing all the elements becuz the index in array starts from 0
// if i give <= the last element printed will be 'undefined'

//break and continue keyword 

for (let index = 1; index < 20; index++) {
    if (index==10) {
        console.log("10 Detected");
        break// breaks the loop after 10 
    }
    console.log(index);
    
}



for (let index = 1; index < 20; index++) {
    if (index==10) {
        console.log("10 Detected");
        continue// continues the loop after the 10 is detected after printing the above log 
    }
    console.log(index);
    
}

