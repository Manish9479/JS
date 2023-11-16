// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.6

const isloggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId)  // As both id are diffrent due to symbol are diffrent

const bigNumber = 65469848516516848161n

// console.log(typeof (bigNumber))



// Refrenece type ( Non Primitvive )
// Array , Objects , Functions


const cars = ["scorpio", "Fortuner", "Lambo"];

let myObj = {
    name: "Ram",
    age: 15,
}

const myFunction = function(){
    console.log( "Hello Bhaiyaaaa")
}

console.log(typeof bigNumber );
console.log(typeof scoreValue);
console.log(typeof cars);
console.log(typeof myObj);
console.log(typeof myFunction);

// **********************************************************************//


// Stack (Primitive) , Heap (Non -Primitive )

let myYoutubename ="manishgupta.com"

let anothername = myYoutubename
anothername = "mani...gupta"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upiId : "user@ybl.com"
}

let userTwo = userOne

userTwo.email = "mani@google.com"

console.log(userOne.email);
console.log(userTwo.email);