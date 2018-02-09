var a = [4, 6, 11, 18, 32];
var b = [-1, 7, 13, 15];

function counter(a, b) {
    var i;
    var j;
    var k;

    var c = [];

    for (i = 0, j = 0, k = 0; i < a.length && j < b.length; k++) {
        if (a[i] < b[j]) {
            c[k] = a[i];
            i++;
        }
        else {
            c[k] = b[j];
            j++;
        }
    }
    if (i == a.length) {
        for (; j < b.length; j++) {
            c[k] = b[j];
            k++;
        }
    }
    else if (j == b.length) {

        for (; i < a.length; i++) {
            c[k] = a[i];
            k++;
        }
    }
    return c;
}
console.log(counter(a, b));

var a = [3, 4, -2];
var b = [8, 7];

function arrayOfArrays(a, b) {

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
console.log(arrayOfArrays(a, b));


var a = [5, 7, 9];
var b = [5, 7, 9];

function lengthOfArrays(a, b) {
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
console.log(lengthOfArrays(a, b));

var e = 3;
var a = [5, -4.2, 3, 7];

function Something(e, a) {
    var i;
    for (i = 0; i < a.length;) {
        if (a[i] == e) {
            return 'true';
        }
        else {
            i++;
            
        }
    
        
    }
}
console.log(Something(e,a));