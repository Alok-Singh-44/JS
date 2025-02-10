let a = 5;
let b = 4;
let container;

console.log("Values before swaping: \na = "+ a + " and b = " + b);
container = a;  // container = 5
a = b;          // a = 4  
b = container;          // b = 5

console.log("Values after swaping: \na = "+ a + " and b = " + b);