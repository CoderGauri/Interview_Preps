//find duplicates in an array

//const arr = [2, 3, 5, 7, 5, 9];

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

// function containsDuplicate(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         return true;
//       }
//     }
//   }

//   return false;
// }

// containsDuplicate(arr);

//add 2 numbers
// let num1 = 5;
// let num2 = 7;
// const addNum = (num1, num2) => {
//   return num1 + num2;
// };
// function addSum ( a, b){

//   return a + b
// }
//addSum(2,5);

//console.log("Hello")

//square root
// let number1 = 8;
// //const result1 = Math.Sqrt(number1);
// //console.log(result1);

// let number2 = 8;
// const result2 = Math.sqrt(number2);
// console.log(result2);

// //area of an triangle (base*height/2)
// let base;
// let height;
// function aresOfTriangle (base , height) {
//  area = base * height/2
//  console.log(area);
// }

// aresOfTriangle(4,6)

// //swaping of variable
// let a = 5;
// let b = 9;
// console.log(`a = ${a}` , `b = ${b}`);
// let temp = a;
//  a = b;
//  console.log(a);

//  //find max value;
//  let cars = [2,4,6,79,0,5];
//  function findMax (arr) {
//   let max = arr[0];
//   for (let i=1; i< arr.length; i++){
//     if(max < arr[i]){
//       arr[i] = max
//     }
//   }

//  }

//  findMax(cars);

//array
//mutator method
const brandedCars = [
  "BMW",
  "Benz",
  "Audi",
  "Mustang",
  "Porche",
  "ferrri",
  "RollsRoyce ",
];
//push last add
brandedCars.push("skoda");
brandedCars.pop(); // last delete
brandedCars.shift(); //removes first
brandedCars.unshift("honda"); //adds first
brandedCars.splice(2, 0, "hyundai"); // remove replace add new element
//console.log(brandedCars);

//Accessor methods
let newCars = ["Tiago", "I10", "Swift"];
const brand = brandedCars.concat(newCars); // clubing 2 arrays
//let res = newCars.join('-'); // joins all the elements

let res = newCars.slice(0, 1);
//console.log(res);
//console.log(newCars);
//console.log(brand);
brandedCars.indexOf("honda");

//iteration methods
//for each
brandedCars.forEach(myList);
function myList(item, index, arr) {
  arr[index] = item;
  //console.log(item);
}
//myList(brandedCars);

//map
let table = [10, 12, 14, 15, 17, 18,35];
table.map( mySum );
function mySum (item ){
  item = item * 10;
  //console.log(item);
}

const result = table.filter(divBy);
function divBy (table) {
  return table >= 18;
  
  
}
//console.log(result);

const number = [12,13,14];
number.reduce(addAll);
function addAll (total , num) {
return total + num

}
console.log(number);

//object creation
const employee = {
  name : "Gauri",
  age : 23

}

console.log(employee.name);

const person ={} ;
Object.defineProperties(person, {
  'name' :{
    value: "Gauri" ,
    writable: true
  },
  'age' : {
    value:30,
    writable:false
  }
});

console.log(person);


//string trim 
let str = "     gauri mahashabde"
console.log(str);

//promise
const myPromise = new Promise((resolve , reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if(randomNumber < 10){
      resolve(randomNumber);
    }
    else {
      reject (new Error('Random number is too high'))
    }
  },1000)
});

myPromise.then((result) => {
  ////console.log('success:', result)

}) .catch((error) => {
  console.log('error:',error) 

})

//async await
function fetchData() {
return new Promise ((resolve) => {
  setTimeout(()=>{
    resolve("Data fetched successfully")
  },1000)
})

}

async function fetchDataAsync(){
  try {
    const data = fetchData();
    console.log(data);
  }
  catch(error) {
        console.log('error in fetching:',error)
  }
}

fetchDataAsync();