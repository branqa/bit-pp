'use strict';

(function () {
    console.log("Hi");

    function Product(name, price, expirationDate) {
        this.name = name;
        this.id = (function () {
            var productId;
            var firstLetter = name.charAt(0).toUpperCase();
            var lastLetter = name.charAt(name.length - 1).toUpperCase();
            var number = Math.floor((99999 - 10000) * Math.random() + 10000);
            productId = firstLetter + lastLetter + number;
            return productId;
        })();
        this.price = price;
        this.expirationDate = expirationDate
        // this.getInfo = function () {
        //     return this.id + ',' + this.name + ',' + this.price;
        // }
    }
    Product.prototype.getInfo = function (){
        return this.id + ',' + this.name + ',' + this.price;
    }
    var milk = new Product('milk', 105.99, new Date(2018, 5, 13));
    var chocolate = new Product('chocolate', 120.524, new Date(2019, 6, 13));
    var vine = new Product('vine', 1500, new Date(2019, 6, 13));

    // console.log(milk);
    // console.log(milk.getInfo());

    function ShoppingBag() {
        this.listOfProducts = [];
        this.averagePrice = function () {
            var totalPrice = 0;
            var avPrice = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                totalPrice += this.listOfProducts[i].price;
            }
            avPrice = totalPrice / this.listOfProducts.length;
            return "Average price is " + avPrice.toFixed(3);
        };
        // this.getMostExpensive = function () {
        //     var max = this.listOfProducts[0].price;
        //     var position = 0;
        //     var mostExpensiveProduct;

        //     for (var i = 0; i < this.listOfProducts.length; i++) {
        //         var product =  this.listOfProducts[i];
        //         if (max < product.price) {
        //             max = product.price;
        //             position = i;
        //         }
        //     }
        //     mostExpensiveProduct = this.listOfProducts[position].getInfo();
        //     return "Most expensive product is " + mostExpensiveProduct;
        // }
        // this.addProduct = function (product) {
        //     if (product.expirationDate > new Date()) {
        //         this.listOfProducts.push(product);
        //     }
        // }
        // this.totalBagPrice = function () {
        //     var allPrice = 0;

        //     for (var i = 0; i < this.listOfProducts.length; i++) {
        //         allPrice += this.listOfProducts[i].price;
        //     }
        //     return allPrice;
        // }
    }


    ShoppingBag.prototype.getMostExpensive = function(){
        var max = this.listOfProducts[0].price;
        var position = 0;
        var mostExpensiveProduct;

        for (var i = 0; i < this.listOfProducts.length; i++) {
            var product =  this.listOfProducts[i];
            if (max < product.price) {
                max = product.price;
                position = i;
            }
        }
        mostExpensiveProduct = this.listOfProducts[position].getInfo();
        return "Most expensive product is " + mostExpensiveProduct;
    }

    ShoppingBag.prototype.addProduct =  function (product) {
        if (product.expirationDate > new Date()) {
            this.listOfProducts.push(product);
        }
    }

    ShoppingBag.prototype.totalBagPrice = function () {
        var allPrice = 0;

        for (var i = 0; i < this.listOfProducts.length; i++) {
            allPrice += this.listOfProducts[i].price;
        }
        return allPrice;
    }

    var shoppingBag = new ShoppingBag();
    shoppingBag.addProduct(milk);
    shoppingBag.addProduct(chocolate);
    shoppingBag.addProduct(vine);

    // console.log(totalBagPrice(shoppingBag));
    //  console.log(shoppingBag.averagePrice());
    //  console.log(shoppingBag.getMostExpensive());

    function PaymentCard(balance, status, expDate) {
        this.balance = balance;
        this.status = status;
        this.validUntilDate = expDate;
    }

    var myCard = new PaymentCard(1000, 'active', new Date(2019, 6, 13));


    function checkoutAndBuy(shoppingBag, myCard) {
        var ourMoney = myCard.balance;
        var needMoney = shoppingBag.totalBagPrice();
        if (ourMoney > needMoney) {
            return 'Purchase is successful'
        } else {
            return 'You need ' + (needMoney - ourMoney);
        }
    }

    console.log(checkoutAndBuy(shoppingBag, myCard));
    console.log(milk);

}
)();



