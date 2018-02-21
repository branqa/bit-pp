var randomNumbers = function(n){
    var m=[];
    var k=[];
    var j = Math.floor(n.length*Math.random());
    for (var i=0; i<n.length;){
        if (k.indexOf(j)==-1){
          m.push(n[j]);
          k.push(j);
          i++;
        } else {
            continue;
        }
    } 
    return m;
}



console.log(randomNumbers([1,4,5,6]));