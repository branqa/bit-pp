// change the digits of two-digit number
var n = 58;
var x;
var y;

if (typeof n == 'number') {
    if (n / 10 < 10 && n / 10 >= 1) {
        x = (n - n % 10) / 10;
        y = n % 10;
        console.log(y * 10 + x);
    } else {
        console.log('Error');
    }
} else {
    console.log('Error');
}

// check if the current number is odd or even
var i;

for (i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i + " number is even")
    } else {
        console.log(i + " number is odd");
    }
}
// ---------

// sum the multiples of 3 and 5 under 1000
var i;
var result = 0;

for (i = 1; i <= 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        result = result + i;
    }
}

console.log(result);
// -------

// compute the sum and product of an array of integers
var arr = [1, 2, 3, 4, 5];
var i;
var sum = 0;
var com = 1;

for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    com = com * arr[i];
};

console.log(sum);
console.log(com);
// -----------

// print the elements of the following array as a single string
var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];

for (i = 0; i < x.length; i++) {
    console.log("'" + x[i] + "'");
}
// ------------

// print the elements of the following array
var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];

for (i = 0; i < a.length; i++) {
    for (j = 0; j < a[i].length; j++) {
        console.log(a[i][j]);
    }
}
// ----------

// sum of squares of the first 20 numbers
var i;
var result = 0;
for (i = 1; i <= 20; i++) {

    result = result + i * i;
}
console.log(result);
// ---------

// average marks of the following students
var marks = [80, 77, 88, 95, 68];
var average;
var sum = 0;
var grade;

for (i = 0; i < marks.length; i++) {
    sum = sum + marks[i]
}
average = sum / marks.length;
console.log(average);

if (average < 60) {
    grade = "F";
} else if (average < 70) {
    grade = "D";
} else if (average < 80) {
    grade = "C";
} else if (average < 90) {
    grade = "B";
} else if (average < 100) {
    grade = "A";
};

console.log("Average grade is " + grade);
// ----------

// "FizzBuzz"
var i;
for (i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
//modified "FizzBuzz"
var i;

for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}

