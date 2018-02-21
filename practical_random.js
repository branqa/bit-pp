var arrayOfNumbers = function(n){
    var newArrayOfRandom=[];
    var arrayOfIndex=[];
     for (var i=0; i<n.length;){
var randomIndex = Math.floor(n.length * Math.random());
        if (arrayOfIndex.indexOf(randomIndex)==-1){
          newArrayOfRandom.push(n[randomIndex]);
          arrayOfIndex.push(randomIndex);
          i++;
        } else{
            continue;
        }
    } 
    return newArrayOfRandom;
}



console.log(arrayOfNumbers([1,4,5,6]));