var breakfast = {
    name: 'omelet',
    ingredients: ['eggs', 'yogurt', 'oil' ],
    energy: 550,
    printInstructions: function() {
       var message = ' Broke ' + breakfast.ingredients[0] + ' but before put ' + breakfast.ingredients[2] + ' in frying pan ';
       return message;
    } ,
    JSCompilant: function() {
        if(breakfast.energy > 500) {
            return 'true';
        } else {
            return 'false';
        }
    }
}

console.log(breakfast.printInstructions());



