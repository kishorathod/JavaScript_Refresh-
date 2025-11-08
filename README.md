🧠 JavaScript Fundamentals — Complete Learning Project
📋 Overview

This repository contains my practice and exploration of JavaScript fundamentals, covering the core concepts of the language — from basics to advanced DOM manipulation and object-oriented programming.
It’s an end-to-end learning file that showcases how JavaScript works both in the browser and Node.js environments.

🚀 Features Covered
🧩 Core JavaScript

Variables (let, const, and var)

Data Types: String, Number, Boolean, Null, Undefined, Object, Symbol

String and Array methods

Template literals

Type checking using typeof

🔁 Control Structures & Loops

for, while, and for...of loops

Conditional operators and ternary expressions

🧮 Functions

Traditional function declarations

Arrow functions (=>)

Default parameters

Higher-order array methods (forEach, map, filter)

🧱 Objects & JSON

Creating and accessing objects

Object destructuring

Arrays of objects (e.g., todos)

JSON serialization with JSON.stringify()

🌐 DOM Manipulation & Events

Query selectors (getElementById, querySelector, etc.)

Adding and removing DOM elements

Styling elements dynamically

Handling events (e.g., form submissions, button clicks)

Basic form validation and user list rendering

🧰 Object-Oriented Programming (OOP)

Constructor functions and prototypes

Creating classes and adding methods

Instantiating class objects

🧑‍💻 Code Highlights
Example — Filtering Completed Todos
const completedTodos = todos
  .filter(todo => todo.isCompleted === true)
  .map(todo => todo.text);
console.log(completedTodos);

Example — Form Validation
if (nameInput1.value === "" || emailInput.value === "") {
  msg.classList.add('error');
  msg.innerHTML = 'Please enter all fields';
  setTimeout(() => msg.remove(), 3000);
}



🧠 Learning Outcome

By the end of this project, you’ll understand:

The fundamentals of JavaScript syntax and logic

How to manipulate the DOM dynamically

How object-oriented programming works in JS

How events and user interactions are handled in the browser

🛠️ Tech Stack

Language: JavaScript (ES6+)

Runtime: Browser / Node.js

📚 Author

👤 Kishor Rathod
📧 krr@gmail.com

💻 Passionate about full-stack development, especially with the MERN stack
