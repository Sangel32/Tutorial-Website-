// Expressions

let sayHello = function(){
    console.log("Hello");
}
 
// Naming a function expression
let sayHowdy = function howdy () {
    console.log("Howdy");
}

//Printing the Value
console.log(sayHowdy());

//The call - this would cause an error
fooFunction(); 
​
//The expression
var foo = function fooFunction() {
  console.log('foo');
}
// example

let kickIt = function(a) {
    console.log(a);
    a();
};

kickIt(function(){
    var b = " Now";
    console.log("Kicking" + b);
});

