// check  whether the `input` is a string or not
function isString(input) {
    if (typeof (input) == 'string') {
        return true;
    } else {
        return false;
    }
}

console.log(isString('My random string'));
console.log(isString(12));
// -----------

// check whether a string is blank or not
function isBlank(input) {
    if (input === " ") {
        return true;
    } else {
        return false;
    }
}

console.log(isBlank('My random string'));
console.log(isBlank(12));
console.log(isBlank(" "));
console.log(isBlank(false));
// ------------


// concatenate a given string n times
function concatenate(n, string) {
    var result = '';
    for (i = 0; i < n; i++) {
        result = result + string;
    } return result;
}

console.log(concatenate(3, 'Ha'));
// -------------

//  count the number of letter occurrences in a string
function countLetter(string, letter) {
    var counter = 0;
    for (i = 0; i < string.length; i++) {
        if (letter == string[i]) {
            counter += 1;
        }
    }
    return counter;
}

console.log(countLetter("blablabla", "b"));
// ------------

// find the position of the first occurrence of a character in a string
function positionOfLetter(string, letter) {
    for (i = 0; i < string.length; i++) {
        if (letter == string[i]) {
            return i + 1;

        }
    }
    return -1;
}

console.log(positionOfLetter('vfdjkvfjdk', 'k'));
// -----------


// find the position of the last occurrence of a character in a string
function positionOfLetter(string, letter) {
    for (i = string.length-1; i > 0; i--) {
        if (letter == string[i]) {
            return i + 1;

        }
    }
    return -1;
}

console.log(positionOfLetter('vfdjkvfjdk', 'd'));
// ---------

// convert string into an array
function convertStringIntoArray(string) {
    var array = [];
    for (i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            array[i] = null;
        } else {
            array[i] = string[i];
        }
    }
    return array;
}

console.log(convertStringIntoArray('abc'));
//----------

//check if the number is prime or not
function isNumberPrime(n) {
    if (n > 1) {
        for (i = 2; i < n - 1; i++) {
            if (n % i == 0) {
                return 'Number is not prime';
                break;
            }
        }
    } else {
        return 'Number is not prime';
    }
    return 'Number is prime'
}

console.log(isNumberPrime(11));
//------------

//replace spaces in a string with provided separator
function replaceSpaces(string, separator) {
    if (separator == undefined) {
        separator = '-'
    }
    string1 = '';

    for (i = 0; i < string.length; i++) {
        if (string[i] == ' ') {
            string1 += separator;
        } else {
            string1 += string[i]
        }

    }
    return string1;
}

console.log(replaceSpaces('Sanja i Branka'));
// ------------

//  get the first n characters and add “...” at the end of newly created string
function addEct(string, n) {
    string1='';
    for (i=0;i<n;i++){
        string1 +=string[i];
    }
    string1+='...';
   return string1; 
}
console.log(addEct('Write a function to get the first n characters',7));
// ---------

//converts an array of strings into an array of numbers
function convertArrayOfStringtoArrayOfNumber(arrayOfString) {
    var arrayOfNumber = [];
    var j=0;
    for (i = 0; i < arrayOfString.length; i++) {
        if (!isNaN(parseInt(arrayOfString[i]))) {

            arrayOfNumber[j] = parseInt(arrayOfString[i]);
            j++;
           
        }
    }
    return arrayOfNumber;
}

console.log(convertArrayOfStringtoArrayOfNumber(['2', 'a', undefined, '4', 192, Infinity, '1e+3']));
// -----------

// calculate how many years there are left until retirement based on the year of birth
function retirement(yearOfBirth, currentYear, gender) {

    var yearsLeft;
    var years = currentYear - yearOfBirth;
    if (gender == 'male') {
        if (years < 65) {
            yearsLeft = 65 - years;
            return yearsLeft;
        }else {
            return 'You are already retired'
    
        }
    } 
    if (gender == 'female') {
        if (years < 60) {
            yearsLeft = 60 - years;
            return yearsLeft;
        }else {
            return 'You are already retired'
    
        }
    } 

}
console.log(retirement(1971, 2018, 'female'));
// ------------

// humanize a number with the correct suffix
function humanizeNumber(n) {
    numberWithS='';
    if (n % 100 >= 11 && n % 100 <= 13
){
    numberWithS=n+'th';
} else if (n % 10==1){
        numberWithS=n+'st';
    }
        else if (n%10==2){
            numberWithS=n+'nd';
        }   else if (n%10==3){
            numberWithS=n+'rd';
        }        else {
            numberWithS=n+'th';
        }
return numberWithS;
}

console.log(humanizeNumber(1), humanizeNumber(2), humanizeNumber(45));
