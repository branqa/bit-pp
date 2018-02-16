var breakfast = {
    name: 'omelet',
    ingredients: ['eggs', 'yogurt', 'oil' ],
    energy: 550,
    printInstructions: function() {
        return ' Broke ' + breakfast.ingredients[0] + ' but before put ' + breakfast.ingredients[2] + ' in frying pan ';
      
    } ,
    JSCompilant: function() {
        if(breakfast.energy > 500) {
            return 'true';
        } else {
            return 'false';
        }
    }
}
console.log(breakfast);
console.log(breakfast.printInstructions());



