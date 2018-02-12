// Try to solve all assignments on a separate branch of bit-pp repository. Don’t forget to pull changes done earlier first and push the new repository to remote when done with all the work at the end.

/*Write a function to count vowels in a provided string.

   function vowelCount(inputString) {
       var vowelList = 'aeiouAEIOU';
       var vowelCount = 0;

       for (var x = 0; x < inputString.length; x++) {
           if (vowelList.indexOf(inputString[x]) !== -1) {
               vowelCount += 1;
           }

       }
       return vowelCount;
   }

   console.log(vowelCount("The quick brown fox"));
*/

var vowelCount = function (inputString) {
    var vowelList = 'aeiouAEIOU';
    var vowelCount = 0;

    for (var x = 0; x < inputString.length; x++) {
        if (vowelList.indexOf(inputString[x]) !== -1) {
            vowelCount += 1;
        }

    }
    return vowelCount;
}

console.log(vowelCount("The quick brown fox"));


/*Write a function that combines two arrays by alternatingly taking elements.

[a,b,c], [1,2,3] -> [a,1,b,2,c,3]
*/

var combine = function (a, b) {
    var c = [];
    var i;
    var k = 0;
    var j;
    for (i = 0, j = 0; i < a.length || j < b.length; i++ , j++) {
        c[k] = a[i];
        k++;
        c[k] = b[j];
        k++
    }
    return c;
}

console.log(combine(['a', 'b', 'c'], [1, 2, 3]));



/*Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
*/

var rotate = function (a, k) {
    var b = [];
    var i;
    var j = 0;
    for (i = k; i < a.length; i++) {
        b[j] = a[i];
        j++;
    }
    for (i = 0; i < k; i++) {
        b[j] = a[i];
        j++;
    }
    return b;
}

console.log(rotate([1, 2, 3, 4, 5, 6], 2));



/* Write a function that takes a number and returns array of its digits. */
var arrayOfDigits = function (a) {
    var b = '';
    b += a;
    var c = [];
    var i;
    for (i = 0; i < b.length; i++) {
        c[i] = parseInt(b[i]);
    }
    return c;
}

console.log(arrayOfDigits(2345));


// Write a program that prints a multiplication table for numbers up to 12.

var tableOfMultiplication = function (n) {
    var a = [];
    var b = [];
    var i;
    var j;
    var x = 1;
    var y = 1;
    for (i = 0; i <= n; i++) {
        for (j = 0; j <= n; j++) {
            b[j] = x*y;
            y++
        }
        y = 1;
        a[i] = b;
        x++;
    }
    return a;

}

console.log(tableOfMultiplication(12));

Write a function to input temperature in Centigrade and convert to Fahrenheit.



Write a function to find the maximum element in array of numbers.Filter out all non - number elements.



Write a function to find the maximum and minimum elements.Function returns an array.



Write a function to find the median element of array.



Write a function to find the element that occurs most frequently.



Write a function to find and return the first, middle and last element of an array if the array has odd number of elements.If number of elements is even, return just the first and the last.In other cases, input array should be returned.



Write a function to find the average of N elements.Make the function flexible to receive dynamic number or parameters.



Write a function to find all the numbers greater than the average.



The body mass index(BMI) is the ratio of the weight of a person(in kilograms) to the square of the height(in meters).Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40




Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a *
* frame *
*********



