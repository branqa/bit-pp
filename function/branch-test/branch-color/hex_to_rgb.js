var x = '#F3A811';

function switchColor(x){
    var rgb;
    var red = x[1]+x[2];
    red1=parseInt(red, 16);
    var green = x[3]+x[4];
    green1=parseInt(green,16);
    var blue = x[5]+x[6];
    blue1=parseInt(blue, 16);
    return rgb='rgb ('+red1+','+green1+','+blue1+')';
}

console.log(switchColor(x));