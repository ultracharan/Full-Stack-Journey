// let someNumber = 678
// let number = Number(someNumber);
// let stringNumber = String(someNumber);

// console.log(typeof number);
// console.log(typeof stringNumber);

let someNumber = "678abc"
let number = Number(someNumber);
let stringNumber = String(someNumber);

console.log(typeof number);
console.log(typeof stringNumber);

console.log(number);
console.log(stringNumber);

// "67" => 67
// "678abc" => NaN
// true => 1 , false => 0

let todayDate = new Date();

console.log(todayDate.toDateString());
console.log(todayDate.toISOString());
console.log(todayDate.toTimeString());
