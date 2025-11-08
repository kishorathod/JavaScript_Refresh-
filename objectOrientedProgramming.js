
// Constructor function

/* function Person(firstName,lastName, dob){
    this.firstName = firstName;
    this.lastName =  lastName;
    this.dob = new Date(dob);

    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }

    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

*/


/*  Instatiate the object 
const person1 = new Person('John','Doe','4-9-2000');
const person2 = new Person('Mary','Smith','1-7-1900');

// console.log(person2.dob.getFullYear());

console.log(person1.getBirthYear());

console.log(person2.getFullName());   */





// Prototype

function Person(firstName,lastName, dob){
    this.firstName = firstName;
    this.lastName =  lastName;
    this.dob = new Date(dob);
}


Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John','Doe','4-9-2000');
const person2 = new Person('Mary','Smith','1-7-1900');


console.log(person2.getFullName());
console.log(person1);





// Creating the Class 

class Person {

    constructor(firstName,lastName,dob){
     this.firstName = firstName;
     this.lastName =  lastName;
     this.dob = new Date(dob);
    }

    getBirthYear(){
    return this.dob.getFullYear();
   }

   getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

}

// this does the same , rather than dealing with the prototype between this looks clear and same as what we do in java 

