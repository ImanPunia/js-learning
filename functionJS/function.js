//bind 
var car = {
    brand: "BMW",
    type: "Racer",
    getCarInfo: function() {
        return "brand" + this.brand + ' type ' + this.type;
    }
}
var showSelectedCar = function () {
    console.log("car details are printed" + this.getCarInfo());
};

(showSelectedCar.bind(car))();

//call and apply
var viewSpecs = function(dieselPetrol, door) {
    console.log(`${this.getCarInfo()} ${dieselPetrol} ${door}`);
}
viewSpecs.call(car, 'DIESEL', 'Four');
viewSpecs.apply(car, ['PETROL','Two']);

