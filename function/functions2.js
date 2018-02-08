// zbir cifara nekog broja

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




// zbir prve i poslednje cifre nekog broja.

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

//zadatak 1
function maximum(x, y) {
    var max;
    if (typeof x != "number" || typeof y != "number") {
        return 'Not a number';

    } else {
        if (x > y) {
            max = x;
        } else {
            max = y;
        }
        return max;
    }
}

console.log(maximum(2, -6));
//zadatak 2
function oddnumber(n) {
    if (typeof (n) != "number") {
        return "Its not a number";
    } else {
        if (n >= 0) {
            if (n % 2 === 0) {
                return "Number is even";
            } else {
                return "Number is odd";
            }
        } else {
            if (n % 2 === 0) {
                return "Negative even number";
            }
            else {
                return "Negative odd number";
            }
        }
    }
}
console.log(oddnumber(-3));
//zadatak 3

function threeDigit(n) {
    if (typeof (n) != "number") {
        return "Its not a number";
    } else {
        if (n > 99 && n < 1000) {
            return 'Number is a three digit long'
        } else {
            return 'Number is not a three digit long'
        }
    }
}

console.log(threeDigit(3466));

//zadatak 4
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

//zadatak 6
function stars(a, b, c) {
    var n = 3;
    var star1 = "";
    var star2 = "";
    var star3 = "";
    for (var i = 0; i < n; i++) {
        if (i === 0) {
            for (var j = 0; j < a; j++) {
                star1 += " *";
            }
            star1 += "\n";
        }
        if (i === 1) {
            for (var j = 0; j < b; j++) {
                star2 += " *";
            }
            star2 += "\n";

        }
        if (i === 2) {
            for (var j = 0; j < c; j++) {
                star3 += " *";
            }
        }
    }
    return star1 + star2 + star3;
}
console.log(stars(5, 3, 7));

//zadatak 9
function sumArrayOdd(n) {
    var sum = 0;

    for (var i = 0; i < n.length; i++) {
        if (typeof (n[i]) == 'number') {
            if (n[i] >= 0) {
                if (n[i] % 2 === 1) {

                    sum += n[i];
                }

            }


        }
    }
    return sum;
}

console.log(sumArrayOdd([12, 3.4, 7, 10, '1', 12]));

//zadatak 10

function letterA(n) {
    sum = 0;
    for (var i = 0; i < n.length; i++) {
        if (n[i] == 'a' || n[i] == 'A') {
            sum += 1;
        }
    } return sum;
}

console.log(letterA('asdfandjA'));
//zadatak 7
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



console.log(numberOfDigits(143));

//zadatak 11

function concatenate(n, m){
    var string='';
    for (var i=0;i<m;i++){
        string=string+n;
    } return string;
}

console.log(concatenate('abc',3));
//zadatk 6.1
function stars(arr) {
    var n = 3;
    var star = "";
    
    for (var i = 0; i < n; i++) {
        
            for (var j = 0; j < arr[i] ; j++) {
                star += " *";
            }
            star += "\n";
        
        
        }
    
    return star;
}
console.log(stars([5, 3, 7]));

/////////functions practical 4

//zadatak 2
var array1 = [-3, 11, 5,3 ,4 ,-8];
var array2 =[];

function checkPositive(n) {
    for (var i = 0; i < n.length; i++) {
        if (n[i] > 0 ){
            array2[i]= n[i]*2;
        }else {
            array2[i]= n[i];
        }
    }
    return array2;
}
console.log(checkPositive(array1));



//zadatak4
var array=[-5,3,7,-1,6];

function checkSecondMin(n){
    var min=n[0];
    var c=n[0];
    for(var i=0;i<n.length;i++){
        if (min>n[i]){
            min = n[i];
        }
    }
    
for(var i=0;i<n.length;i++){

   
    if (n[i]>min && c>n[i]){
        c=n[i];
    } 
    
}
 return c;
}

console.log(checkSecondMin(array));


//zadatak6
var array=[-5,3,7,-1,7,3,-5];

function symmetricArray(n){
    for(var i=0;i<n.length;i++){
        var j =0;
        j--;
        if (n[i]==n[n.length+j]){
            return 'Symmetric Array';
        } else {
            return 'Asymmetric';
        }
    }

}
console.log(symmetricArray(array));

