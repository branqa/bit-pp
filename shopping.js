'use strict';

(function(){

    console.log('Hi!');

    function Product(name, price, expirationDate){        
        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;
        this.id = (function () {
            return Math.floor((Math.random()*(999999-10000))+10000);
        })();
        this.getInfo = function() {
            var first = name.charAt(0);
            var last = name.charAt(this.name.length-1);
            var s = first.toUpperCase() + last.toUpperCase() + this.id;
            return s + ', ' +  this.name + ', '+ this.price;
        };
    }

    var coffee = new Product ('Grand kafa', 10.27, new Date(2018,7,13));
    var chocolate = new Product('Najlepse zelje', 120.18, new Date(2019, 2, 5));
    // console.log (coffee.getInfo());

    function ShoppingBag() {


        this.productList = [];  
        this.addProduct = function(product) {
           
            var currentDate = new Date();
           
            if(product.expirationDate.getTime() >= currentDate.getTime()) {
                this.productList.push(product);
            }

        }
        this.averagePrice = function() {
           
           var average;
           var sum = 0;
           for(var i = 0; i < this.productList.length; i++) {
                sum += this.productList[i].price;

           }
            average = (sum / this.productList.length).toPrecision(5);
            return average;
    }   
        this.getMostExpensive = function() {

            var mostExpensive = this.productList[0].price; 
            for(var i = 0; i < this.productList.length; i++){

                if(this.productList[i].price > mostExpensive) {
                    mostExpensive = this.productList[i].price;
                }
            }      
            return mostExpensive; 
     }

     
    this.calculateTotalPrice = function() {
        var total = 0;
        for(var i = 0; i < this.productList.length; i++) {
            total += this.productList[i].price;
        }
        return total;
    }
 }  

    var jsList = new ShoppingBag();
    jsList.addProduct(coffee);
    jsList.addProduct(chocolate);

    //console.log(jsList.productList);
    //console.log(jsList.averagePrice());

    function PaymentCard(balance, status, validDate) {
        this.balance = balance;
        this.status = status; 
        this.validDate = validDate;
   }

   var Card = new PaymentCard(56.23, 'active', new Date('2018 04 23'))

   function checkoutAndBuy(ShoppingBag, PaymentCard) {
    if(PaymentCard.balance >= ShoppingBag.calculateTotalPrice()) {
        return 'Purchase is successful';
    }   else {
        var x =(ShoppingBag.calculateTotalPrice() - PaymentCard.balance).toPrecision(4);
        return 'Amount of money that is missing ' + x;
    
    }


   }
    
   console.log(checkoutAndBuy(jsList, Card));


})();


