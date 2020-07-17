//anonymous function with name
var u = function abc() {
console.log("hello");
}
u();
//abc(); // will throw error abc is not defined

//anonymous function without name
var t = function() {
console.log("abc");
}
t();

//IIFE
(function() {
console.log("IIFE");
})();

//passing parameter to anonymous function
let animal = {
    firstName: 'york',
    lastName: 'giraaffe'
};

(function () {
    console.log(`${animal.firstName}`);
})(animal);

//arrow function to write anonymous function in js 
let arrowfun = () => console.log("printing data");
arrowfun();

let add = (x,y) => console.log(x+y);
add(1,2);

(() => console.log("data"))();

//scope
var x = (function(){
    console.log("stored");
})()

x;

function setCarBrand(Car,owner) {
    Car.brand = "BMW";
    x = "Doe"
}
var ownerName = "Bob";
console.log(ownerName);

var myCar = {
    color: 'Black',
    brand: 'Audi'
}

console.log(myCar.brand);
setCarBrand(myCar,ownerName);
console.log(myCar.brand);
console.log(ownerName);

//hoisted
checkHoisted();
function checkHoisted() {
    console.log("hoisted");
}

errorHoisted();
var errorHoisted = function () {
    console.log("error fun exp is not hoisted");
}





