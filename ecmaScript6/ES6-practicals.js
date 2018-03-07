// Write a function that capitalizes the first letter of each string argument it receives.  
// 	Function arguments: ‘hello’, ‘there’, ‘ES’, 6
// 	Output: ‘Hello’, ‘There’, ‘ES’


let cap = function(...args){
    var all = '';
    
    args.forEach(function(element){
        if(typeof element == 'string'){
        var letter = element[0].toUpperCase();
        var rest = element.slice(1);
        all += `${letter}${rest} `;
        } 
    });

    return all;
    

}
console.log(cap('hello', 'there', 6));





// Write a function that calculates sale tax that should be paid for the product of the given price. 
// Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// 	Input: 120
// 	Output: 24

let calculates = function(price){
    const taxRate = 0.2;
    let sale = price * taxRate;
    return  sale;
}

console.log(calculates(120));


	
// Write a function that increases each element of the given array by the given value. 
// If the value is omitted, increase each element of the array by 1.  
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1]


let increase = function(array, x){
    let map1 = array.map(y => y * x);
    return map1;
}

console.log(increase([4, 6, 11, -9, 2.1], 2));


// Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3]
// 	Output: [6, 0]


let even = function(array){
    let result = array.filter(x => x % 2 == 0);
    return result;
}

console.log(even([6, 11, 9, 0, 3]));

// Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: [‘compiler’, ‘transpiler’, ’babel.js’, ‘JS standard’, ‘linter‘]
// 	Output: [‘babel.js, ‘JS standard’]

let filterJS = function(array){
    let result = array.filter(x => x.includes('js') || x.includes('JS'));
    return result;
}
console.log(filterJS(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']));

// Write a function that filters all integer numbers from the given array. 
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]

let intg = function(array){
    let result = array.filter(x => Number.isInteger(x));
    return result;
}

console.log(intg([1.6, 11.34, 9.23, 7, 3.11, 8]));


// Write a function that filters all integer arguments that contain digit 5.
// 	Function arguments: 23, 11.5, 9, ‘abc’, 45, 28, 553 
// 	Output: 45, 553
    
let fil = function(...args){
    var all = '';
    
    args.forEach(function(element){
        if(typeof element == 'number'){
            let element1 = element.toString();
            if(element1.includes('5')){
                all += `${element1} `;
            }
        } 
    });

    return all;
}

console.log(fil(23, 11.5, 9, 'abc', 45, 28, 553 ));




// Write a function that returns indexes of the elements greater than 10. 
// 	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// 	Output: 1, 2, 5

let greater = function(array){
    var all = '';
    array.forEach(function(element, index){
            if(element>10){
                all += `${index}, `;
            }
        
    });

    return all;
}

console.log(greater([1.6, 11.34, 29.23, 7, 3.11, 18]));



// Create an array of persons. A person should be an object with name and age properties. 
// Experiment with enhanced object literals. 
// Write a function that prints out the names of persons older than 25. 
// Write a function that check if there is a person older than 40.
// Write a function that checks if all persons are older than 20.   
 

var array = [{ name : 'Izzy', age : 32 }, { name : 'Branka', age: 27 }];

let printOut = function(array) {
    var result = '';
    array.forEach(function(element){
        if (element.age>25){
            result +=`${element.name} `;
        }
    
    });
    return result;  
}


console.log(printOut(array));

var array = [{ name : 'Izzy', age : 32 }, { name : 'Branka', age: 27 }];
//without some() for 40
let checkIf = function(array) {
   
    var counter = 0;
    array.forEach(function(element){
        if (element.age>40){
            counter++;
        } 
    });
    if(counter == 0){
        return false;
    }

    return true;  
}


console.log(checkIf(array));

// with some() for 20
let checkIf = function (array){
    let result = array.some(x=>x.age>20);
    return result;
}


console.log(checkIf(array));

// Write a function that checks if the given array is an array of positive integer values. 
// 	Input: [3, 11, 9, 5, 6]
// 	Output: yes


// let check = function(array){
//     let positive = Number.isInteger(x=> x);
//     let result = array.every(x => x >0);
//     if(positive == true && result == true){

//         return 'yes';
//     }
// }

// console.log(check([3, 11, 9, 5, 6]));



// 	Input: [3, -12, 4, 11]
// 	Output: no
// Write a function that calculates the product of the elements of the array. 
// Input: [2, 8, 3]
// Output:  48

// Write a function that calculates the maximum of the given array. 
// Input: [2, 7, 3, 8, 5.4] 
// 	Output: 8