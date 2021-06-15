class Vehicle{
    engine = 1;

    constructor(engine){this.engine = engine}

    ignition(){
        console.log("ignition");
    }

    drive(){
        this.ignition();
        console.log("drive");
    }

}

class Car extends Vehicle{
    wheels = 4 ;

    constructor(wheels){super(1); this.wheels = wheels;}

    drive(){
        super.drive(); //reference to pre-overriden method 
        console.log('rolling on 4 wheels');
    }
}


var vObj = new Vehicle(1)
console.log(vObj); // Vehicle { engine: 1}

var cObj = new Car(4); // modifies the proto , not overwrite it 
console.log(cObj); // Car{engine: 1, wheels:4}
console.log(cObj.__proto__.__proto__ === vObj.__proto__) //true,  use getProtottypeof method of Object 