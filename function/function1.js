function isString(input) {
    if (typeof (input) == 'string') {
        return true;
    } else {
        return false;
    }
}

console.log(isString('My random string'));
console.log(isString(12));




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



function concate(n, string) {
    var result = '';
    for (i = 0; i < n; i++) {
        result = result + string;
    } return result;
}

console.log(concate(3, 'Ha'));


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


function positionOfLetter(string, letter) {
    for (i = 0; i < string.length; i++) {
        if (letter == string[i]) {
            return i + 1;

        }
    }
    return -1;
}

console.log(positionOfLetter('vfdjkvfjdk', 's'));


function positionOfLetter(string, letter) {
    for (i = string.length; i > 0; i--) {
        if (letter == string[i]) {
            return i + 1;

        }
    }
    return -1;
}

console.log(positionOfLetter('vfdjkvfjdk', 's'));


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

console.log(isNumberPrime(6));



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


function convertArrayOfStringtoArrayOfNumber(arrayOfString) {
    var arrayOfNumber = [];
    var position = 0;
    for (i = 0; i < arrayOfString.length; i++) {
        if (typeof (parseInt(arrayOfString[i])) == 'number'  (parseInt(arrayOfString[i]))!=NaN ) {

            arrayOfNumber[position] = parseInt(arrayOfString[i]);
            position++;
        }
    }
    return arrayOfNumber;
}

console.log(convertArrayOfStringtoArrayOfNumber(['2', 'a', undefined, '4', 192, Infinity, '1e+3']));











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



