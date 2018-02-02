var n=58;
var x;
var y;

if ( typeof n == 'number'){
    if (n/10<10 && n/10>=1){
        x=(n-n%10)/10;
        y=n%10;
        console.log(y*10+x);
    }  else {
        console.log('Error');
    }
}  else {
    console.log('Error');
}