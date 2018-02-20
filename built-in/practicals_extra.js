// 1. zadatak Write a functional expression that duplicates each element of a given array.
//Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

var newArray = function (array1) {

    var array2 = [];
    var j = 0;

    for (var i = 0; i < array1.length; i++) {
        array2[j] = array1[i];
        j++;
        array2[j] = array1[i];
        j++;
    }

    return array2;
}

console.log(newArray([2, 4, 7, 11, -2, 1]));



// 2. zadatak Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 

var removeDuplicates = function (array1) {

    var array2 = [];

    for (var i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) == -1) {
            array2.push(array1[i]);

        }


    }
    return array2;
}

console.log((removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13])));


// 3.zadatak a)

// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true


var checkOdd = function (array1) {

    if (array1.length % 2 == 1) {
        return true;
    } else {
        return false;
    }

}

console.log(checkOdd([1, 2, 9, 2, 1, 5]));

// 3. zadatak b)

// Write a function that counts a number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

var countElements = function (array1) {

    var indexOfMiddle = (array1.length - 1) / 2
    var counter = 0;

    if (array1.length % 2 == 1) {
        for (var i = 0; i <= indexOfMiddle; i++) {
            counter++;
        }
    } else {
        return 'error';
    }
    return counter;
}

console.log(countElements([-1, 8.1, 3, 6, 2.3, 44, 2.11, 5, 8]));



// 4. zadatak Write a function that finds the smallest element of a given array. 
// The function should return an object that contains the smallest value and its last position in the array.

var smallestElement = function (array) {
    var min = array.length - 1;
    var lastIndex;
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] < min) {
            min = array[i];
            lastIndex = i;
        }
    }

    var x = {
        minimum: min,
        lastIndexOfMin: lastIndex
    }
    return x;
}

console.log(smallestElement([13, 8, 9, 12, 8, 1, 1, 4, 13]));



// 5.zadatak a) Write a function that finds all the elements in a given array less than a given element. 

var lessThanGivenElement = function (array, number) {

    var newArray = [];
    var j = 0;
    if (array.indexOf(number) == -1) {
        return 'error';
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] < number) {
            newArray[j] = array[i];
            j++;

        }
    }
    return newArray;
}

console.log(lessThanGivenElement([13, 8, 9, 12, 8, 1, 1, 4, 13], 7));



// 5.zadatak b) Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 

var stringElements = function (array) {

    var array1 = [];
    var j = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().startsWith('pro')) {
            array1[j] = array[i];
            j++;
        }
    }

    return array1;
}

// console.log (stringElements(['cdsajkv', 'profe', 'Profesio', 'dsjvd', 'profesional']));

// 5. zadatak c) Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 

function callingAgainFunction(array, b) {

    return b(array);
}

console.log(callingAgainFunction(['cdsajkv', 'profe', 'Profesio', 'dsjvd', 'profesional'], stringElements));



// 6. zadatak a)
// Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product.
// [
// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}
// ]


function ToBuy(name, price) {
    this.name = name;
    this.price = price;
}

var array = [];


array.push(new ToBuy('apples', 100));
array.push(new ToBuy('milk', 80));
array.push(new ToBuy('bananas', 150));



//  6.zadatak b)
// Write a function that calculates the total price of your shopping list.
var totalPrice = function (a) {

    var total = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i].price;
    }

    return total;
}

console.log(totalPrice(array));

// 6.zadatak c)
// Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals.

var avgProductPrice = function (a) {
     var total = 0;
     for (var i = 0; i < a.length; i++) {
         total += a[i].price;
     }
     var avg=total/a.length;
    return avg.toFixed(3);
    }

    console.log(avgProductPrice(array));

// 6.zadatak d)
// Write a function that prints out the name of the most expensive product on your shopping list.Write it in uppercase.

function ToBuy(name, price) {
    this.name = name;
    this.price = price;
}

var array = [];


array.push(new ToBuy('apples', 100));
array.push(new ToBuy('milk', 80));
array.push(new ToBuy('bananas', 150));


var mostExpensiveProduct = function(a) {
    var max =a[0].price;
    var element=a[0].name;
     for (var i = 1; i < a.length; i++) {
         if (max<a[i].price){
             max = a[i].price;
             element = a[i].name;
         }
     }
     return element.toUpperCase();
}

console.log(mostExpensiveProduct(array));

// 7.zadatak a)
// Write a function that checks if a given string is written in all capitals.

var str = 'BRANKA';


var allCapitals = function (s) {
 if (s === s.toUpperCase()){
     return true;
 } else {
     return false;
 }
}

//console.log(allCapitals(str));

// 7.zadatak b)
// Write a function that checks if a given string contains any digits.
var str1 = 'dsad1saf';

var containDigit = function(s) {
    var regExp = /[0-9]/;

    if (s.match(regExp)){
        return true;
    } else  {
        return false;
    }
}

//console.log(containDigit(str1));


// 7.zadatak c)
// Write a function that checks if a given string is a valid hexadecimal color.
str2 = '#00ff00';


var validHexDec = function(s){
    var regExp = /[0-9A-Fa-f]{6}/g;
    if (s[0]='#' && regExp.test(s.slice(1))){
        return true;
    } else {
        return false;
    }
}
//console.log(validHexDec(str2));


// 7. zadatak d)
// Write a function that checks if a given number belongs to the interval from 1900 to 2018.


var nmb = 1991;

var belongInterval = function (n) {
    if ( typeof(n)=='number' && n>1900 && n<2018){
        return true;
    } else {
        return false;
    }
    
}

//console.log(belongInterval(nmb));

// 7. zadatak e)
// Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

function validator(s, a, b, c, d) {
    return x = {
        stringValidator: a(s),
        passwordValidator: b(s),
        colorValidator: c(s),
        yearValidator: d(s)
    }
}
var str4='#00ff23'
console.log(validator(str4, allCapitals, containDigit, validHexDec, belongInterval));


// 8.Write a function that calculates a number of days to your birthday.
// Input: 25 February 
// Output: 5 days
var bday = new Date ('Apr 05 2018');

var calculate = function(bday) {
    var x =new Date();
    var z= bday.getTime()-x.getTime();
    var d = Math.round(z/1000/3600/24);
  return d;
}
console.log(calculate(bday));

 
//9. Write a function that for a given departure and arrival time calculates the time the trip takes.
// 	Input: 8:22:13 11:43:22
// 	Output: 3 hours 21 minutes 8 seconds

var time1 = Date.parse ('20 Feb 2018 08:22:13');

var time2 = Date.parse ('20 Feb 2018 11:43:22');
var arrival = function(time1, time2){
    var milisec = time2 - time1;
    var sec = milisec /1000;
    var sec1= sec%60;
    var min =(sec-sec1)/60;
    var min1 =((sec-sec1)/60) %60; 
    var h = (min-min1)/60 ;
    return h+':'+min1+':'+sec1;
}

console.log(arrival(time1, time2));

   
  
//10. a. Write a constructor function that creates points in the space. Each point in the space has its own x, y, and z coordinate. For example, (3, 5, 1) can the point in the space.
function Points(x,y,z){
    this.x=x;
    this.y=y;
    this.z=z;
}

var point1 = new Points (3,5,1);
var point2 = new Points (4,2,8);
// console.log(point1,point2);



//10. b. Write a function that calculates the distance between to points in the space. 

var distance = function (p1, p2){
    var d = Math.sqrt(Math.pow(p1.x-p2.x,2)+Math.pow(p1.y-p2.y,2)+Math.pow(p1.z-p2.z,2))
 return d;

}

console.log (distance(point1,point2));

//11. a. Write a function that generates a random integer value between 5 and 20.

var a = 5;
var b = 20;

var a1 = 50;
var b1 = 100;

var generate = function(n1, n2){
var max;
var min;

    if(n1 > n2){
        max = n1;
        min = n2;
    } else {
        max = n2;
        min = n1;
    }

    var c = Math.round(((max - min) * Math.random()) +min);

    return c;
}

console.log(generate(a,b));
console.log(generate(a1,b1));


//11. b. Write a function that generates a random integer value between 50 and 100. 
//11. c. Write a function which expects a number and a callback factory function and returns an array of numbers produced by the factory function.   

var arrayOfNum = function(n, func){

    var arr = [];

    for(var i = 0; i < n; i++){
        arr.push(func(a,b));
    }
    return arr;
}

console.log(arrayOfNum(4, generate));
