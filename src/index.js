import someThing from "./scripts/extra.js";

let hello = "Hello";
var world = "World";
var stuff = "things";
var myArray = [1,2,3];
Array.from(myArray).forEach((item) =>{
	console.log(item);
});
console.log('someThing', someThing);

let helloWorld = ()=> {
	console.log('stuff', stuff);
	return hello + ', ' + world + '!';
}
let objBlah = {
  blah:'blah'
}
/*
This is a comment
*/
helloWorld();
console.log(helloWorld()); // and stuff