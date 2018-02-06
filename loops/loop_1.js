var i;

for (i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i + " number is even")
    } else {
        console.log(i + " number is odd");
    }
}


var i;
var result = 0;

for (i = 1; i <= 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        result = result + i;
    }
}

console.log(result);

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


var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];

for (i = 0; i < x.length; i++) {
    console.log("'" + x[i] + "'");
}




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



var i;
var result = 0;
for (i = 1; i <= 20; i++) {

    result = result + i * i;
}
console.log(result);




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

var a = [6, 5, 9, 14, 1, 11, 1, 7];

var min = a[0];
var position = 0;
var i;

for (i = 1; i < a.length; i++) {
    if (min > a[i]) {
        min = a[i];
        position = i;
    }
}
console.log('min is ' + min + " and it is on position " + position);



var a = [6, 5, 9, 14, 1, 11, 1, 7];

var min = a[0];
var position = 0;
var i;

for (i = 1; i < a.length; i++) {
    if (min >= a[i]) {
        min = a[i];
        position = i;

    }
}
console.log('Last min is ' + min + " and it is on position " + position);

// last min, poslednja pozicija elementa u nizu - obilazak unazad

for (i = a.length - 1; i >= 0; i--) {

}


/* max and min change position
var a = [6, 5, 9, 14, 1, 11, 1, 7];

var min = a[0];
var max = a[0];
var maxPosition = 0;
var minPosition = 0;
var i;

for(i = 1; i < a.length; i++) {
    if(min > a[i]) {
        min = a[i];
        minPosition = i;
    }
    if()
}
console.log('min is ' + min + " and it is on position " + position);

*/
var i;
var n = 8;

for (r = 0; r <= n - 1; r++) {
    if (r == 0 || r == n - 1) {
        var str = '';
        for (i = 0; i < n; i++) {
            str = str + '* '
        }
        console.log(str);
    } else {
        var str1 = '';

        for (i = 0; i < n - 2; i++) {
            str1 = str1 + '  ';

        }
        str1 = '* ' + str1 + '*';
        console.log(str1);
    }
}


// crtaj x od *

var i;
var n;

for (r = 0; r <= n - 1; r++) {
    if ()
}