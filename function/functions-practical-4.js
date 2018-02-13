//arrange the elements of two arrays
var a = [4, 6, 11, 18, 32];
var b = [-1, 7, 13, 15];

function arrange(a, b) {
    'use strict'
    var i;
    var j;
    var k;

    var c = [];

    for (i = 0, j = 0, k = 0; i < a.length && j < b.length; k++) {
        if (a[i] < b[j]) {
            c[k] = a[i];
            i++;
        } else {
            c[k] = b[j];
            j++;
        }
    }
    if (i == a.length) {
        for (; j < b.length; j++) {
            c[k] = b[j];
            k++;
        }
    } else if (j == b.length) {

        for (; i < a.length; i++) {
            c[k] = a[i];
            k++;
        }
    }
    return c;
}
console.log(arrange(a, b));
// --------------------------

// concatenate two arrays
var a = [3, 4, -2];
var b = [8, 7, 4, 1];

function concatenate(a, b) {
    'use strict'
    var i;
    var j;
    var k = 0;
    var c = [];
    for (i = 0; i < a.length; k++) {
        c[k] = a[i];
        i++;
    }
    for (j = 0; j < b.length; k++) {
        c[k] = b[j];
        j++;
    }
    return c;
}
console.log(concatenate(a, b));
// ------------

// interwines two arrays
var a = [5, 7, 9];
var b = [2, -3, 1];

function interwinesTwoArrays(a, b) {
    'use strict'
    var i;
    var j;
    var k = 0;
    var c = [];
    if (a.length == b.length) {
        for (i = 0, j = 0; i < a.length && j < b.length; k++) {
            c[k] = a[i];
            k++;
            c[k] = b[j];
            i++;
            j++;
        }
    }
    return c;
}
console.log(interwinesTwoArrays(a, b));
// --------------

// check if a given element is in the array
var x = 3;
var a = [5, -4.2, 2, 7];

function isElementInArray(x, a) {
    'use strict'
    var i;
    for (i = 0; i < a.length; i++) {
        if (a[i] == x) {
            return true;
        }
    }
    return false;
}
console.log(isElementInArray(x, a));
// --------------

//multiplies every positive element of a given array by 2
var a = [-3, 11, 5, 3.4, -8, 0];

function multipliesPositiveElement(a) {
    'use strict'
    var i;
    for (i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            a[i] = 2 * a[i];
        }
    }
    return a;
}

console.log(multipliesPositiveElement(a));
// -----------

// find the minimum of a given array and its index
var a = [-4, 2, 2, -1, -6];

function minOfArray(a) {
    'use strict'
    var i;
    var min = a[0];
    var counter = 0;
    for (i = 1; i < a.length; i++) {

        if (min > a[i]) {
            min = a[i];
            counter = i;
        }
    }
    return 'Minimum of a given array is ' + min + ' and its index is ' + counter;
}

console.log(minOfArray(a));
// ----------

// find the second largest number in the array
//first solution
var a = [-5, 3, 7, -10, -6];

function checkSecondMin(n) {
    'use strict'
    var min = n[0];
    var c = n[0];
    var i;
    var newArray = [];
    for (i = 0; i < n.length; i++) {
        if (min > n[i]) {
            min = n[i];
        }
    }
    var j = 0;
    for (i = 0; i < n.length; i++) {
        if (n[i] != min) {

            newArray[j] = n[i];
            j++;
        }
    }
    var min1 = newArray[0];
    for (i = 0; i < newArray.length; i++) {
        if (min1 > newArray[i]) {
            min1 = newArray[i];
        }
    }
    return min1;
}
console.log(checkSecondMin(a));

// second solution
var a = [-5, -3, 7, -1, 6];

function checkSecondMin(n) {
    'use strict'
    var min = n[0];
    var c = n[0];
    var i;

    for (i = 0; i < n.length; i++) {
        if (min > n[i]) {
            min = n[i];
        }
    }
    if (min == n[0]) {
        c = n[1];
    }
    for (var i = 0; i < n.length; i++) {
        if (n[i] > min && c > n[i]) {
            c = n[i];
        }
    }
    return c;
}

console.log(checkSecondMin(a));
// --------

// sum of the positive elements in the array
var a = [3, 11, -5, -3, -2, 8, 1];

function sumOfThePositiveElements(n) {
    'use strict'
    var i;
    var sum = 0;
    for (i = 0; i < n.length; i++) {
        if (n[i] > 0) {
            sum += n[i];
        }
    }
    return sum;
}

console.log(sumOfThePositiveElements(a));
// ----------------

// Check if a given array is symmetric
var a = [-5, 3, 7, 1, 7, 3, -5];

function symmetricArray(n) {
    'use strict'
    var i;
    var j = n.length - 1;
    var counter = 0;
    for (i = 0; i < n.length / 2; i++) {
        if (n[i] === n[j]) {
            counter++;
            j--;
        }

    }
    if (counter == i) {
        return 'The array is symmetric';
    } else {
        return 'The array is symmetric';
    }
}

console.log(symmetricArray(a));
// ---------------

// delete a given element from the array
var a = [4, 6, 2, 8, 2, 2]
var e = 2;

function deleteGivenElement(a, e) {
    'use strict'
    var i;
    var j = 0;
    var k = [];
    for (i = 0; i < a.length; i++) {
        if (e != a[i]) {
            k[j] = a[i];
            j++;
        }
    }
    return k;
}

console.log(deleteGivenElement(a, e));
// --------------


// insert a given element on the given position in the array
var a = [2, -2, 33, 12, 5, 8]
var e = 78;
var p = 3;

function insertElement(e, p, a) {
    'use strict'
    var i;
    var j = 0;
    var b = [];
    if (p > a.length - 1) {
        return 'Error message';
    }
    else {
        for (i = 0; i < a.length; i++ , j++) {
            if (i == p) {
                b[j] = e;
                j++;
            }
            b[j] = a[i];
        }

        return b;
    }
}
console.log(insertElement(e, p, a));
// -------

// Check the last index of the minimum element in a given array 
'use strict'
var a = [6, 5, 9, 14, 1, 11, 72];

var min = a[0];
var position = 0;
var i;

for (i = 1; i < a.length; i++) {
    if (min >= a[i]) {
        min = a[i];
        position = i;

    }
}
console.log('Min is ' + min + " and it is on position " + position);
// ----------

// max and min change position
'use strict'
var a = [6, 5, 9, 14, 11, 12, 72];

var min = a[0];
var max = a[0];
var maxPosition = 0;
var minPosition = 0;
var i;
var b = [];
for (i = 0; i < a.length; i++) {
    if (a[i] < min) {
        min = a[i]
        minPosition = i;
    }
}
for (i = 0; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i]
        maxPosition = i;
    }
}
for (i = 0; i < a.length; i++) {
    if (i == minPosition) {
        b[i] = max;
    } else if (i == maxPosition) {
        b[i] = min;
    } else {
        b[i] = a[i];
    }
}
console.log(b);

