// we can say between classes or objects

function CarName(name) {
    this.name = name;
}

CarName.prototype.myCarName = function() {
    return this.name;
};

function brandName(name,brand) {
    CarName.call( this, name );
    this.brand = brand;
}

brandName.prototype.myCarBrand = function() {
    return this.brand;
};

var a = new brandName( "Camry", "Toyota" );

console.log(a.name); // "Camry" but won't be able to access myName function 
console.log(a.myCarBrand()); // "Toyota"
console.log(a.myCarName());// is not a function becuase its on prototype of carName , not accessible on brandName


//overrides the constructor of brandName i.e. its now CarName
brandName.prototype = Object.create( CarName.prototype );// creates new object stores reference of target object i.e. CarName.prototype
console.log(brandName.prototype.constructor === CarName); //true


var b = new brandName('Aurion','Toyota')
console.log(b.myCarName()); // "Aurion" 
console.log(b.myCarBrand()); // "b Obj" is not a function because prototype obj is changed for foo we need to add it again 

brandName.prototype.myCarBrand = function(){
    return this.brand;
}

var c = new brandName('Prado','Toyota')
console.log(c.myCarBrand()); // Toyota
console.log(c.myCarName()); // Prado


