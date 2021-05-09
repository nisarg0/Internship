// -----------------------------------Functions-----------------------------------
// console.log(square(5));

// Error : Uncaught TypeError: square is not a function
// const square = function (n) {
//   return n * n;
// };

// Runs Fine
// function square(n) {
//   return n * n;
// }

// var square = (n) => {
//   return n * n;
// };

// can be called from sq as well as square // for now error
// var sq = function square() {
//   return n * n;
// };

// function outside(x) {
//   function inside(y) {
//     return x + y;
//   }
//   return inside;
// }
// fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
// // it

// console.log(fn_inside(5)); // returns 8
// console.log(outside(3)(5)); // returns 8

// IIFE (Immediately Invoked Function Expression)
// Automatically invocked once page reloads. Everthing inside is private and can't be access outside.
// (function () {
//   var aname = "Gogate";
//   console.log("Auther name is " + aname);
// })();

// (function (aname) {
//   console.log("Auther name is " + aname);
// })("Nisarg");

// -----------------------------------maps-----------------------------------
// let mp = new Map();

// mp[2] = "nisarg";
// mp["o"] = "nisarg";

// // Not working don't know why
// for (var [key, value] of mp) {
//   console.log(key + "-" + value);
// }

// console.log(mp[2]);
// console.log(mp["o"]);

// -----------------------------------Objects-----------------------------------

let form1 = {
  name: "Nisarg Goagte",
  age: 21,
  College: "VNIT",
};

console.log(form1);
console.log(`${form1.name} is student at ${form1.College}.`);
