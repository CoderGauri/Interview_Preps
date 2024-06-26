// HTML

// Get Started with Internshala Trainings
// About the Training
// Basic Concepts of Web Development
// Setting Up Local Environment
// Introduction to HTML
// HTML Tags
// Lists, Tables, and Forms

//css
// Introduction to CSS
// CSS Selectors
// Unit: Length and Color
// CSS Properties
// Box Model
// Inspect Element
// Display
// Position
// Structuring a Web Page
// Flexbox
// Media Queries

//bootsrap
// Introduction to Bootstrap
// Layout
// Other Components

//DBMS
// Introduction to DBMS
// Basic Concepts and Terminologies
// SQL Queries - Database Related
// SQL Queries - Tables Related
// SQL Queries - Records Related
// Designing a Database
// Database Relationships
// Join Queries
// Importing and Exporting a Database

//JS
// Introduction to Javascript
// Variables and Operators
// Conditional Statements and Loops
// Functions
// Objects and Classes
// Arrays
// Strings
// JavaScript as a Client Side Language
// Debugging JS Using Inspect Element
// AJAX

//react JS
// Introduction to React
// Creating an Element
// JSX
// Components
// Props
// States
// Managing States and Data Flow
// Create React App
// Breaking Into Modules
// Deploy

//promise1

// // const apiUrl = 'https://api.example.com/data';

// // const myPromise = new Promise((resolve , reject) => {
// //  fetch(apiUrl)
// //  .then(response => {
// //     if(!response.ok){
// //         reject(`error:${response.statusText}`)
//     }
//     return response.json();

//  })
// })

//example 1
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("operation successfull");
  } else {
    reject("operation failed");
  }
});

myPromise
.then(result => {
    console.log(result)
})
.catch(error => {
    console.log(error)
}

)
