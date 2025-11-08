//  console.log(window); // window is a object , which is a parent object of the browser 
 
 
//  // Selectors in JS 
 

//  // Single Element Selectors 
// console.log(document.getElementById('my-form'));   // id selector

// console.log(document.querySelector('#my-form'));  // does the same thing but much newer

// console.log(document.querySelector('.container'));   // class select 


// console.log(document.querySelector('h1'));   // tag selector   




//  // Multiple Element Selectors 

//  console.log(document.querySelectorAll('.item'));   // gives nodelist which is quite similar to array
  
//  console.log(document.getElementsByClassName('item'));  // will give HTMLCollection (similar as nodelist , but both are different )

//  console.log(document.getElementsByTagName('li'));




//   const items = document.querySelectorAll('.item');  
//    items.forEach((item) => console.log(item));

 


// // Manupulating dom 

// const ul = document.querySelector('.items');

// // ul.remove();   this will remove all ul lists 


// ul.lastElementChild.remove();

// ul.firstElementChild.textContent = 'hello js';


// ul.children[1].innerText = 'Brand';

// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";



// // changing style 

// const btn = document.querySelector('.btn');
// btn.style.background = "red";




// // Events in JavaScript 

// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log('click');
//     console.log(e.target);     // event object 
//     console.log(e.target.className);     
//     console.log(e.target.id);     

// })

// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = "gray";
//     document.querySelector('body').classList.add('bg-dark');   // we can actually add the class dynamically 
// })

// // Events -> mousehover , mouseout a lot etc ....






// Adding user through form and displaying on them on the screen 
// so far that lets we firt, grab the items all togehter by using dom 

const myForm = document.querySelector('#my-form');
const  nameInput1 = document.querySelector('#name');
const  emailInput = document.querySelector('#email');
const  msg = document.querySelector('.msg');
const  userList = document.querySelector('#users');


myForm.addEventListener('submit', onsubmit);

function onsubmit(e){
    e.preventDefault();
    // console.log(nameInput1.value);

    // adding validation 
    if(nameInput1.value === "" || emailInput.value ===""){
       msg.classList.add('error');
       msg.innerHTML = 'Please enter all fields';

       setTimeout(()=> msg.remove(),3000)
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput1.value}:${emailInput.value}`));

        userList.appendChild(li);

        // clear fileds 
         nameInput1.value = "";
         emailInput.value = "";
    }
}