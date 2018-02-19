// 1.zadatak 

// Write a function to convert a number from one base (radix) to another. 
// Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;



var convertNumb = new Number('234535676776');


console.log(convertNumb.toString(16));




// 2.zadatak
//  Write a JavaScript function that reverses a number.

function reverse(x){
    var x=x+'';
return x.split("").reverse().join("");
}
console.log (reverse(2234));


// 3. zadatak 
//  Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

function alphOrder(x) {
return x.split("").sort().join("");
}

console.log(alphOrder('hgdhpdfh'));

// 4. zadatak
// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

function alpWords(x){
    y = x.split(' ');
  var a = [];
  var b = '';
  for (var i = 0; i < y.length; i++) {
      a[i] = y[i].toLowerCase().split("").sort().join("");
      b += a[i] + ' ';
  }
  return b;
  }

  console.log(alpWords('Write a function     to alphabetize'));

// 5.zadatak
// Write a function to split a string and convert it into an array of words.

// without built-in
function splitString(x) {
     var z = [];
     var j = 0;
     y = '';
     for (var i = 0; i < x.length; i++) {
         if (x[i] != " ") {
             y += x[i];

         } else {
             z[j] = y;
             y = '';
             j++;
         }
         z[j] = y;
     }
    return z;
}
console.log(splitString('Write a function to alphabetize'));

// with built-in 
function splitString1(x) {
    return x.split(' ');
}

console.log(splitString1('Write a function to alphabetize'));


