//simple example
function run() {
    var name = "closures";
    function displayName() {
        console.log(name);
    }
    displayName();
}
run();

function displayMessage(msg) {
   return function def() {console.log(msg)};
}

const y = displayMessage("Hin there!");
y();

const getName = (name) => {
    return {
      get: () => name
    };
};
  
const getData = (data) => {
    return {
        get: () => data,
        set: (data) => data
    };
};

const x = getName("Iman");
console.log(x.get());

const z = getData("Location");
console.log(z.get());
console.log(z.set("Peerjain"));

//return a function within function
function makeFun() {
    var name = "MOZILLA";
    function printName() {
        console.log(name);
    }
    return printName;
}

const myFun = makeFun;
myFun()();  // =====> (myFun())()

const runFun = makeFun();
runFun();

//partial Application example
function calMul(x) {
    return function(y) {
      return x * y;
    };
  }
  
const multiply = calMul(10);  
console.log(multiply(2));
console.log((calMul(6))(6));


const fixedMultiplication = (fun, ...value) => {
    return function (...changedValue) {
      return fun.apply(this, value.concat(changedValue));
    };
};
  
const multiplyValue = (x,y) => x * y; 
const mult10 = fixedMultiplication(multiplyValue,10);
const result = mult10(16);
console.log("result"+result)

//private proeprties
function driverDetails() {
    var name = 'John';
    var age = '34';
    var fetchName = function getName() {
        return name;
    };
    var fetchAge = function getAge() {
        return age;
    }

    return {
        getDriverName: fetchName,
        getDriverAge : fetchAge
    }
}

console.log("driver Name: " + driverDetails().getDriverName());
const driver = driverDetails()
console.log("driver Age: " + driver.getDriverAge());
// return undefined
console.log("access private property name directly:" , driverDetails().name);

