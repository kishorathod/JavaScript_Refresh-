/*
 What is Js : 

    > High level , interpreted programming language 
    > Conforms to the ECMAScript specification
    > Multi-paradigm
    > Runs on the client/browser as well as on the server (Node.js)


    > it is the programming language of the browser
    > build very interactive user interfaces with frameworks like react 
    > used in buiding very fast server side and full stack applications 
    > used in mobile development(React Native , NativeScript , lonic)
    > Used in desktop application development(Electron JS)
*/

// Fundamentals of JS : 

// alert("hello , msg using external script file");

// console.log("Hello");

// console.error("this is an error");

// console.warn("this is a warning");


// variables in javascript 
// var(depricated now) , let , const 

let age1 = 30; 
age1 = 31;
console.log(age1); // reasign is possible in let but not in case of const 


let score;
score = 10;
console.log(score);


// Types of Js Variables 
// Strings, Numbers , Boolean , BigInt, null , undefined , symbol

const name = 'Kishor';
const age = 23;
const rating = 4.5;   // it is in the decimal point but still treated as regular no , unlike int , float 
const x4 = null; 
const y = undefined;
let z;

console.log(typeof(name));   // string
console.log(typeof(rating));  // number 
console.log(typeof(age));    // number 
console.log(typeof(x4));      // object 
console.log(typeof(y));      // undefined
console.log(typeof(z));      // undefined



// Strings in JS 
console.log("My name is "+name+" my age is "+age);  // concatination of string


// templet literals (templet strings)
console.log(`my name is${name} and my age is ${age}`);


const s = "hello kishor";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5));

console.log(s.split(''));


const str = "technology, computer, it, code";
console.log(str.split(','));  // seperated the each word with comas 




// Arrays in JS
const number = new Array(1,2,3,4,5); // using constructors to create array
console.log(number);

let fruits = ['apple', 'oranges','pears',10,true];  // in Js we can store heterogenious group of elements togther in the array 
// console.log(fruits);

fruits[2] = "ValueChanged";
console.log(fruits);

fruits.push('mango');
fruits.unshift('starter');
fruits.pop();

console.log(fruits);


console.log(Array.isArray("hello")); // checks whether the element is present in the array or not 
console.log(fruits.indexOf('oranges'));



// Objects in JS (these are like key-value data pairs)


const person = {
    firstName : "Kishor",
    lastName : "Rathod",
    age : 23,
    hobbies :["music","movies","sports"],
    address:{
        street : '50 main st',
        city:"bidar",
        state:"karnataka"
    }
}

console.log(person.hobbies);
console.log(person.hobbies[2]);
console.log(person.address.city);


// object desctecturing 

const {firstName,lastName,address:{state}} = person;

console.log(lastName);
console.log(state);


person.email = "krr@gmail.com";   // we can add directly property into the object 
console.log(person);



// Challenge: Lets go ahead and create array of todos 

const todos = [
    {
       id: 1,
       text : "Revise complete js",
       isCompleted : false 
    },
    {
       id: 2,
       text : "Practice DSA-leetcode",
       isCompleted : true
    },
    {
       id: 3,
       text : "Complete assingment ",
       isCompleted : false
    }
]

console.log(todos);   // these means bunch of object stored as a array elements 

console.log(todos[1].text);


// Json 

const todoJSON = JSON.stringify(todos);   
console.log(todoJSON);




// Loops in JS 

//For loop
for(let i=0; i < 10; i++){
     console.log(`for loop Number:${i}`);
}

//while loop
let i = 0;
while(i < 10 ){
    console.log(`While Loop Number;${i}`);
    i++;
}


// looping over the object 
for( let i=0; i < todos.length; i++){
    console.log(todos[i].text);
}


// Enhanced loops 

// For of loop
for(let todo of todos){
   console.log(todo.id);
}



// High order array methods (this helps us to do any kind of itteration in array)

// map()      -> this will allow us to create new array from the array 
// fileter()  -> allow us to create new array based on the condition


// for each Loop

todos.forEach(function(todo){
   console.log(todo.text);
});

// high order array methods, they take in as a parameter a function


// map() function 

const todoText = todos.map(function(todo){
    return todo.text;
});
 
console.log(todoText);   // map function returns an array 


// Filter() function 

const  todoText1 = todos.filter(function(todo){
     return todo.isCompleted === true;
});

console.log(todoText1);



// chaining on other array methods together 
const  todoCompleted = todos.filter(function(todo){
     return todo.isCompleted === true;
}).map(function(todo){
   return todo.text;
})

console.log(todoCompleted);




// Terninary operator in JS 
const x = 10;
const color = x > 10 ? 'red' : 'greeen';
console.log(color);




// Functions in js 

function addNum(num1=2,num2=8){
    console.log(num1*num2);
}

addNum(5,5);


// Array Funtion ( clean and handy)

const addNums2 = (num1 , num2) => {
    console.log(num1+num2);
}

addNums2(3,8);



todos.forEach((todo) => {console.log(todo)});


