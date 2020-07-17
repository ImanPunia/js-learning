//simple example
function run() {
    var name = "closures";
    function displayName() {
        console.log(name);
    }
    displayName();
}
run();

//return a function within function
function makeFun() {
    var name = "MOZILLA";
    function pritName() {
        console.log(name);
    }
    return pritName;
}
var myFun = makeFun;
myFun()();  // =====> (myFun())()
var runFun = makeFun();
runFun();

//Example 
function calMul(x) {
    return function(y) {
      return x * y;
    };
  }
  
var multiply = calMul(10);  
console.log(multiply(2));
console.log((calMul(6))(6));


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
var driver = driverDetails()
console.log("driver Age: " + driver.getDriverAge());
// return undefined
console.log("access private property name directly:" , driverDetails().name);