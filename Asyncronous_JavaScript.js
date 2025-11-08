// Execution of JS code 

/*
JS is single threaded ( it means it can do one thing at a time in single call stack)

But... web application often need to : 
  > fetch data from an API
  > Read/write files
  > wait for a user action
  > work with times(like setTimeout)

  so if JS waited(blocked) for each of those - our application would freeze

  So JS uses asynchronous programming to not block the main thread.
*/



// Learning the event Loop Concept  (this is heart of how async JS works)

/* Components: 
    > Call Stack : Executes code line by line
    > Web APIs(Browser APIs) : Handles async tasks like fetch(), setTimeout()
    > Callback Queue(or Task Queue) : Stores async callbacks.
    > Event Loop : Moves tasks from the queue to the call stack when it's empty.

    In Short: 
        JS executes sync code first, then async code when the stack is clear 
*/

   
// Example : 
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// output: 1  3  2  (Because setTimeout runs asynchronously.)



// Mastering the  Callbacks
   /*  Callbacks were the first async mechanism in JS.  */

// Example
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched!");
  }, 2000);
}

fetchData((message) => {
  console.log(message);
});



// Problem: Nested callbacks can lead to callback hell 😵‍💫
getUser(function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0], function(comments) {
      console.log(comments);
    });
  });
});







/*
learning Promises (Modern Alternative to Callbacks)
A Promise represents a value that might be available now, later, or never.

States:

pending

fulfilled

rejected

*/

// Example 
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ Data ready!"), 2000);
});

promise.then((data) => console.log(data));


// Chain Promises:
getUser()
  .then(user => getPosts(user.id))
  .then(posts => getComments(posts[0]))
  .then(comments => console.log(comments))
  .catch(error => console.error(error));





/*  Async / Await (Syntactic Sugar over Promises)

Introduced in ES2017 — it makes async code look synchronous.

Example:
async function getData() {
  try {
    const user = await getUser();
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0]);
    console.log(comments);
  } catch (err) {
    console.error(err);
  }
}
getData();


It’s the cleanest way to write async code in modern JS. */






/*  🌐 Step 6: Learn Fetch API (for Real Data Calls)

Used for HTTP requests — you’ll use it a lot in MERN projects.

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}
fetchUsers();   */








/* 
Other Useful Async Concepts

Promise.all() → Run multiple async tasks together.

Promise.race() → Get the first completed promise.

setTimeout / setInterval → Schedule tasks.

Microtasks vs Macrotasks → Understand execution priority (Promise → microtask, Timeout → macrotask).

*/








//  -------------------  Project  -------------------------

// 🚀 Project: "Async User Explorer"

// A combination of API fetching, promises, and async/await — all in one place.

// 🔹 Features:

// Button → Fetch random users (RandomUser API)

// Loading spinner while fetching

// Error handling (if API fails)

// Auto-refresh every 10 seconds (using setInterval)

// “Stop Auto Refresh” button

// Bonus: Add a feature to fetch 5 users at once using Promise.all()

// 🔹 Concepts Covered:
// Concept	Used For
// setTimeout / setInterval	Auto refresh and delay
// Callbacks	Initial setup and event handling
// Promises	Chaining multiple API requests
// async/await	Fetching and rendering users
// Fetch API	Getting data from the internet
// DOM Manipulation	Displaying fetched users
// Error Handling	Using try/catch