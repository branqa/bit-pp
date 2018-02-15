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
    'use strict'
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
    'use strict'
    var c = [];
    var i;
    var k = 0;
    var j;
    for (i = 0, j = 0; i < a.length || j < b.length; i++, j++) {
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
    'use strict'
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
    'use strict'
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
    'use strict'
    var i;
    var j;
    var a = '';
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= n; j++) {
            a += i * j + ' ';
        }
        a += '\n';
    }
    return a;
}

console.log(tableOfMultiplication(12));

/*
Write a function to input temperature in Centigrade and convert to Fahrenheit.
*/
var convertCentigradeToFahrenheit = function (a) {
    'use strict'
    var a;
    var b = a * 9 / 5 + 32;
    return b;
}

console.log(convertCentigradeToFahrenheit(15));


/*Write a function to find the maximum element in array of numbers.Filter out all non - number elements.
 */
var a = [2, -1, 9, 'a', Infinity, 3, NaN];
var maxElementInArray = function (a) {
    'use strict'
    var i;
    var j = 0;
    var m = [];
    for (i = 0; i < a.length; i++) {
        if (typeof (a[i]) == 'number' && !isNaN(parseInt(a[i]))) {
            m[j] = a[i];
            j++;
        }
    }
    var max = m[0];
    for (j = 1; j < m.length; j++) {
        if (max < m[j]) {
            max = m[j];
        }
    }
    return max;
}
console.log(maxElementInArray(a));

/*
Write a function to find the maximum and minimum elements.Function returns an array.
*/
var a = [4, 6, 2, -9, 7, -3, 7.5];

var maxAndMinInArray = function (n) {
    var i;
    var max = n[0];
    var min = n[0];

    for (i = 1; i < n.length; i++) {
        if (max < n[i]) {
            max = n[i];
        }
    }
    for (i = 1; i < n.length; i++) {
        if (min > n[i]) {
            min = n[i];
        }
    }
    var m = [min, max];

    return m;

}
console.log(maxAndMinInArray(a));



// Write a function to find the median element of array.


var a = [-6, 9, -10, 3, -2, 7, 8, 1];

var medianElement = function (n) {
    var i;
    var j;
    var x;

    for (i = 0; i < n.length - 1; i++) {

        for (j = 0; j < n.length - 1; j++) {
            if (n[j] > n[j + 1]) {
                x = n[j + 1];
                n[j + 1] = n[j];
                n[j] = x;
            }
        }
    }
    if (n.length % 2 == 0) {
        median = (a[(n.length) / 2 - 1] + a[(n.length / 2)]) / 2;
    } else {
        median = a[(n.length - 1) / 2];
    }

    return [median, n];
}

console.log(medianElement(a));


// Write a function to find the element that occurs most frequently.
var a = [1, 2, 4, 5, 1, 'a', 2, 2, 4]
var mostFrequenty = function (n) {
    var counter = 0;
    var x = 1;
    var y;
    for (var i = 0; i < n.length; i++) {
        for (var j = 0; j < n.length; j++) {
            if (n[i] == n[j]) {
                counter++;
            }
            if (x < counter) {
                x = counter;
                y = n[i];
            }
        }
        counter = 0;
    }
    return [y, x];
}
console.log(mostFrequenty(a));




/* Write a function to find and return the first, middle and last element of an array if the array has odd number of elements.If number of elements is even, return just the first and the last.In other cases, input array should be returned.*/

var a = [2, 1, -4, 3, 'a', 'vd', 3, -1, 4];

var firstMiddleLast = function (n) {
    var b = [];
    if (n.length % 2 == 0) {
        b[0] = n[0];
        b[1] = n[n.length - 1];
    } else {
        b[0] = n[0];
        b[1] = n[parseInt(n.length / 2)];
        b[2] = n[n.length - 1];
    }

    return b;
}

console.log(firstMiddleLast(a));



/* Write a function to find the average of N elements.Make the function flexible to receive dynamic number or parameters. */


var avgOfNElements = function () {
    var sum = 0;
    var avg;
    for (var i = 0; i < arguments.length ; i++) {
        sum += arguments[i];
    }
    avg = sum / arguments.length;
    return avg;
}

console.log(avgOfNElements(45, 5, 10,1,4));


// Write a function to find all the numbers greater than the average.
var x = [8, 3, 5, 4, 7, 1];

var numbGraterThanAvg = function (a) {
    var b = [];
    var k = 0;
    var sum = 0;
    var avg;
    for (var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    avg = sum / a.length;
    for (var i = 0; i < a.length; i++) {
        if (a[i] > avg) {
            b[k] = a[i];
            k++;
        }
    }
    return b;
}

console.log(numbGraterThanAvg(x));


/* The body mass index(BMI) is the ratio of the weight of a person( in kilograms) to the square of the height( in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40 */

var bmiCategory = function (w, h) {
    var bmi;
    bmi = w / (h * h);
    if (bmi < 15) {
        return 'Starvation';
    } else if (bmi < 17.5) {
        return 'Anorexic';
    } else if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 25) {
        return 'Ideal';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
    } else if (bmi >= 30 && bmi < 40) {
        return 'Obese';
    } else {
        return 'Morbidly obese';
    }
}

console.log(bmiCategory(60, 1.63));

/* Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:
For example the list["Hello", "World", "in", "a", "frame"] gets printed as:
* Hello *
* World *
* in    *
* a     *
* frame *
********* */

list = ["Hello", "World", "in", "a", "frame"];

var rectFrame = function (l) {
    a = '';
    k = 0;
    max = l[0].length;
    for (var i = 1; i < l.length; i++) {
        if (l[i].lenght > max) {
            max = l[i].length;
        }
    }
    for (var i = 0; i < l.length; i++) {
        for (var j = 0; j <= max + 1; j++) {
            if (j == 0 || j == max + 1) {
                a += ' * ';
            } else if (typeof (l[i][k]) == 'undefined') {
                a += ' ';
            } else {
                a += l[i][k];
                k++;
            }
        }
        a += '\n';
        k = 0;
    }
    return a;
}

console.log(rectFrame(list));