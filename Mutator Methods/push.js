// javascript function 
//js function are used to perform operation, we can call javascript function many times to reuse the code.

// function practice(){
//     console.log("I am practicing javascript function")
// }


//* Javascript function with parameter
// function with parameter is used to pass the value to the function and perform operation on that value.

// function parameter(number){
//     alert(number * 2);
// }


//* js object constructor function

// function person(name,age){
//     this.name = name;
//     this.age = age;
// }
// e = new person("sandip , 23");
// alert(e.name + " " + e.age); // sandip , 23



// array of object constructor function

// let person = new Array("sandip", "23", "odisha");
// for(i = 0; i < person.push("puri"); i++){
//     //document.write(person[i] + "<br>");
//     console.log(person[i]);
// }
// push method of array
//* The push() method adds one or more elements to the end of an array and returns the new length of the array.


let array = [1,2,3,4,5,6,7,8,9,10];
let push = array.push(11,12,13,14,15);
console.log(push); // 15
console.log(array); // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]