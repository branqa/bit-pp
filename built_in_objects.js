// 1.zadatak 

// Write a function to convert a number from one base (radix) to another. 
// Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;



var convertNumb = new Number('234535676776');


console.log(convertNumb.toString(16));




// 2.zadatak Write a JavaScript function that reverses a number.

function reverse (x){
    var x=x+'';
return x.split("").reverse().join("");
}
console.log (reverse(2234));

