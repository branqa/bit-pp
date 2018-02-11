// sum of digits of a given number
function sumOfDigits(n) {

    var sum = 0;
    var lastDigit;

    if (typeof n != "number") {
        return -1;
    }
    if (n < 0) {
        n = -n;
    }

    while (n > 0) {
        lastDigit = n % 10;
        n = (n - lastDigit) / 10;
        sum = sum + lastDigit;
    }
    return sum;
}

console.log(sumOfDigits(986));
// ------------

// sum of first and last digit of a given number
function sumOfDigits(n) {

    var sum = 0;
    var lastDigit;
    var firstDigit = 0;

    if (typeof n != "number") {
        return -1;
    }
    if (n < 0) {
        n = -n;
    }

    lastDigit = n % 10;
    n = (n - lastDigit) / 10;

    while (n > 0) {
        firstDigit = n % 10;
        n = (n - firstDigit) / 10;
    }
    sum = (firstDigit + lastDigit);
    return sum;
}

console.log(sumOfDigits(5));
// --------------

// calculate the maximum of two given numbers
function maxOfTwoNumbers(a, b) {
    var max;
    if (typeof a != "number" || typeof b != "number") {
        return 'Not a number';

    } else {
    if (a > b) {
        max = a;
    } else {
        max = b;
    }}
    return max;
}

console.log(maxOfTwoNumbers(6, 17));
// ----------

// check if a given number is odd
function oddNumber(n) {
    if (typeof (n) != "number") {
        return "Its not a number";
    } else {
            if (n % 2 === 0) {
                return "Number is even";
            } else {
                return "Number is odd";
            }
        }   
}
console.log(oddNumber(-4));
// -------------

// check if a given number is a three digit long number
function isGivenNumberThreeDigit(n) {
        if (typeof (n) != "number") {
            return "Its not a number";
        } else {
            if (n > 99 && n < 1000) {
                return 'Number is a three digit long';
            } else {
                return 'Number is not a three digit long';
            }
        }
    
}

console.log(isGivenNumberThreeDigit(365));
// ---------------

// calculate an arithmetic mean of four numbers
function arithmeticMean(a, b, c, d) {
    var arithmetic;
    if (typeof (a) != "number" || typeof (b) != "number" || typeof (c) != "number" || typeof (d) != "number") {
        return "Its not a number";
    } else {
        arithmetic = (a + b + c + d) / 4;
        return arithmetic;
    }
}

console.log(arithmeticMean(11, 1, 4, 4));
// -------------

// draw a square of a given size
function square(n) {   
    var i;

    for (r = 0; r <= n - 1; r++) {
        if (r == 0 || r == n - 1) {
            var str = '';
            for (i = 0; i < n; i++) {
                str = str + '* ';
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
   return 'square with size '+n ; 

}

console.log(square(5));

// draw a horizontal chart representing three given values
function stars(a) {
    var n = 3;
    var star = "";

    for (var i = 0; i < n; i++) {

        for (var j = 0; j < a[i]; j++) {
            star += " *";
        }
        star += "\n";


    }

    return star;
}
console.log(stars([5, 3, 7]));
// ------------

// calculate a number of digits of a given number
function numberOfDigits(n) {

    var lastDigit;

    if (typeof n != "number") {
        return 'Not a number';
    }

    else {
        var counter = 0;
        while (n > 0) {
            lastDigit = n % 10;
            n = (n - lastDigit) / 10;
            counter += 1;
        }

    } return counter;
}

console.log(numberOfDigits(11));
// ------------

// calculate a number of appearances of a given number in a given array
var x = 2;
var a = [5, 1, 2, 3, 7, 1, 1, 2];

function appearanceNumberInArray(x, a) {
    var i;
    var counter = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] == x) {
            counter ++;
        } 
    }

    
  if (counter==0){
      return 'Number is not in a given array';
    }
    return counter;
}
console.log(appearanceNumberInArray(x, a));
// -----------

// calculate the sum of odd elements of a given array
a = [5, 1, 3, 4, 1, '1', 2]
function sumOfOddNumber(a) {
    var i;
    var sum = 0;
    for (i=0;i<a.length;i++){
        if (typeof (a[i]) == 'number') {
            if (a[i] % 2 != 0){
            sum+=a[i];
    }
}
} 
return sum;
}
console.log(sumOfOddNumber(a));
// -----------

// calculate the number of appearances of a letter a in a given string
function numbOfLetterInString(n) {
    sum = 0;
    for (var i = 0; i < n.length; i++) {
        if (n[i] == 'a' || n[i] == 'A') {
            sum += 1;
        }
    } return sum;
}

console.log(numbOfLetterInString('asdfandjA'));
// ------------

//  concatenate a given string given number of times
function concatenate(n, m) {
    var string = '';
    for (var i = 0; i < m; i++) {
        string = string + n;
    } return string;
}

console.log(concatenate('abc', 3));
