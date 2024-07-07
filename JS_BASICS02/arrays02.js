marvelHeros=["SPiderMan", "ironman","captain"]
dcHeros=["Batman","Superman","flash"]

//marvelHeros.push(dcHeros)
//console.log(marvelHeros);//add the dc heros array as a element in the marvel array
//console.log(marvelHeros[3][1])
//let allheros=marvelHeros.concat(dcHeros)
//console.log(allheros);// adds all the dc heros into marvel array
//but there is also anotger way to do this using technique called spread
let allheros2=[...marvelHeros,...dcHeros]
//console.log(allheros2)// does the same work as concat method.this is used when we need to concaat more than 2 arrays
let anotherArr=[1,2,3,4,[22,3,4,5],24,5,6,6,[4,5,5,[3,4,2]]]//unique case of multiple arrys inside an array
//console.log(anotherArr.flat(Infinity));// includes all the elements from all the array inside it . it takes depth as the parameter which means to which depth to flat the array
console.log(Array.isArray("ATHARVA"));// check is the given data is array or not 
console.log(Array.from("ATHARVA"));//converts the given data into array
let name="ATHARVA"
let midName="ASHISH"
let lastName="BHOGLE"
console.log(Array.of(name,midName,lastName));// creates an array of the given elements
