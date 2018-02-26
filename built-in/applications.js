function WebApp (name, url, technologies, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies  = technologies;
    this.licence = licence;
    this.stars = stars;
}

function MobileApp (name, platforms, licence, stars) {
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars =stars;
}

var w1 = new WebApp ('blic', 'www.blic.rs', ['Angular', 'React'], 'cc', '3' );

WebApp.prototype.getData = function (){
console.log(this.name, this.url, this.technologies, this.licence, this.stars);

}

WebApp.prototype.reactBased = function (){
    for(var i=0; i< this.technologies.length; i++){
        if(this.technologies[i] == 'React'){
           return console.log (true);
        }
     
    }
    return console.log(false);
}

var m1 = new MobileApp ('viber', ['android' ,'ios'], 'cc', '4' );

MobileApp.prototype.getData = function() {
    console.log(this.name, this.platforms, this.licence, this.stars);
}

MobileApp.prototype.forAndroid = function() {
    for(var i=0; i< this.platforms.length; i++){
        if(this.platforms[i] == 'android'){
           return console.log (true);
        }
     
    }
    return console.log(false);
}

w1.getData();
w1.reactBased();

m1.getData();
m1.forAndroid();

var sharedMethods = {
    isCCLicence : function(){
        if(this.licence == 'cc'){
            return console.log(true);
        } else {
            return console.log(false);
        }
    },

    like : function (){
        this.stars ++;
    },

    showStars : function() {
        console.log(this.stars);
    }
}

WebApp.prototype.__proto__= sharedMethods;
MobileApp.prototype.__proto__=sharedMethods;

w1.isCCLicence();
w1.like();
w1.showStars();

m1.isCCLicence();
m1.like();
m1.showStars();
