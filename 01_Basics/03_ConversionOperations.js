let score = "33s"

console.log(score);
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//  "33" => 33
//  "33s" => NaN
// true => 1 ; false = 0;


let isloggedIn = 1

let booleanisloggedIn = Boolean(isloggedIn)
console.log(booleanisloggedIn);


//  1 => true ; 0=> false
//  "String" => true

let someNumber = 45

let StringNumber = String(someNumber)
console.log(StringNumber);

console.log(typeof StringNumber);


// ********************************** Operations ******************************************//

let value = 3
let negvale = -value
console.log(negvale)

console.log(2+2);
console.log(2-2);
console.log(10/2);
console.log(2*2);
console.log(25%2);

let str1 = " Hello "
let str2 = " Bhaiya"

let str3 = str1 + str2

console.log(str3);


console.log(1+"1");
console.log("1"+1);
console.log(1+"1"+"1");
console.log(1+1+"1");


console.log((3+4)*5%2);

/*
console.log(+true);
console.log(+"");

let num1 , num2 , num3

num1 = num2 = num3 = 5+5  This type confusing code not in use in real world 

*/



let gameCounter = 100
++gameCounter ;
console.log(gameCounter);