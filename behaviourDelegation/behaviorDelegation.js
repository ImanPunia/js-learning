Vehicle = {
    engine: 1,
    ignition: function(){
        console.log("ignition");
    } ,

    drive: function(){
        this.ignition();
        console.log("drive");
    }
}

const Car = Object.create(Vehicle);

Car.setWheel = function(wheels){
    this.wheels = wheels;
}

Car.driveCar = function(){
    this.setWheel(4);
    this.drive();
    console.log('rolling on 4 wheels' + this.wheels);
}

Car.driveCar(); // ignition drive rolling on 4 wheel4 
Car.drive(); // ignition drive
//here Car delegates drive and ignition to Vehicle class 