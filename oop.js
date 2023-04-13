//program 1 - Functional programming
/*var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes,tax){
    return shoes * tax;
}

var toPay = totalPrice(shoes, stateTax);

console.log(toPay); */ //output is 120
//----------------------------------------------------
//Program 2 - OOPs
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('Total Price: ',calculation);
    }
}
purchase1.totalPrice(); //120

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log('Total Price: ',calculation);
    }
}
purchase2.totalPrice();

var purchase3 = {
    shoes: 150,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total Price: ',calculation);
    }
}
purchase3.totalPrice();

//"this" keyword - efer to the object itself without specifying the object's name.
//alias for the name of the object.

