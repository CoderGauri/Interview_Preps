//find duplicates in an array

const arr = [2, 3, 5, 7, 5, 9];

// const findDup = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; i++) {
//       if (arr[i] === arr[j]) {
//         return true;
//       } else {

//       }
//     }
//   }
// };
// return false;

// findDup(arr);

function containsDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        return true;
      }
    }
  }

  return false;
}

containsDuplicate(arr);

//add 2 numbers
// let num1 = 5;
// let num2 = 7;
// const addNum = (num1, num2) => {
//   return num1 + num2;
// };
function addSum ( a, b){
  
  return a + b
}
addSum(2,5);


console.log("Hello")

//square root 
let number1 = 8;
//const result1 = Math.Sqrt(number1);
//console.log(result1);

let number2 = 8;
const result2 = Math.sqrt(number2);
console.log(result2);

//area of an triangle (base*height/2)
let base;
let height;
function aresOfTriangle (base , height) {
 area = base * height/2
 console.log(area);
}

aresOfTriangle(4,6)

//swaping of variable 
let a = 5;
let b = 9;
console.log(`a = ${a}` , `b = ${b}`);
let temp = a;
 a = b;
 console.log(a);