// niz, callback funkcija koja kvadrira vrednost zadatog broja
var a=[2,5,1,3]
function square(n){
    return n*n;
}

var squareElementOfArray =function(a,f){
var b=[];
    for(var i=0;i<a.length;i++){
        b[i]=f(a[i]);
    }
    return b;

}

console.log(squareElementOfArray(a,square));


// small --> 8
// large --> 590
// huge --> 234567


function small() {
    return 8;
}

function large() {
    return 590;
}

function huge() {
    return 234567;
}

var generateNumber = function(f) {

    if(typeof f != 'function'){
        return 'error!'
    } else {
        return f();
    }
    
};

console.log(generateNumber('hello'));



var password = 'abcd';

function correct() {
    return 'it is correct';
}

function error() {
    return 'error';
}

var checkPassword = function(p, c, e) {
    
    for(var i = 0; i < p.length; i++) {
        if(!isNaN(parseInt(p[i]))){
            return c();
            break;
        } 
        
    }  
return e();

};

console.log(checkPassword(password, correct,error));


var n = [1,2,3,4];
var m = [6,7,8,9];

function sumOfTwoNumbers(a,b) {
    return a+b;
}

var sumArrays = function(x,y,f) {

    var z = [];

    for(var i = 0; i < x.length;i++){
        z[i] = f(x[i], y[i]);

    }
    return z;
};

console.log(sumArrays(n,m, sumOfTwoNumbers));

function f(name, surname){
    return function(){
        console.log(name+'.'+surname+'@gmail.com');
    }

}

f('branka', 'slavkovic')();

function f(string) {
    // console.log(string);
   
    return function() {
        var counter = 0;
        var string1 = '';
        for(var i =0; i<string.length; i++){
            if(string[i] == 'a'){
                string1 += '*';
                counter++;
            } else {
                string1 += string[i];
            }
        }
        console.log(string1, counter);
    }
}

f('JavaScript')();
