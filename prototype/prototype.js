//////////////////---------\\\\\\\\\\\\\\\\\\\\
const y = {'a': 2};
const u = Object.create(y);

//prototype links the object i.e. creates new object and link its prototype to existing object (reference not copy)
console.log(Object.getPrototypeOf(u)); //true
console.log(u); //{}
console.log(u.a);  // 2 i.e. fetched from prototype chain


/////////////////----------\\\\\\\\\\\\\\\\\\\\\ prototype inheritance (we can say between instance and class)
function setName(name){
    this.name = name;
}

setName.prototype.yourName = function(){
    return this.name;
}

var user = new setName('User');
var admin = new setName('Admin');

// its because prototype creates link between objects, yourName is not found on user , its found on setName.prototype.
console.log(user.yourName()); //User
console.log(admin.yourName()); //Admin

//////////////////////-----------\\\\\\\\\\\\\\\\\\\\\\
function Data() {
}

Data.prototype.constructor === Data; // true

var d = new Data();
d.constructor === Data; // true

Data.prototype = {} // constructor i overwritten or lost 
var b = new Data();
b.constructor === Data ; // false
b.constructor === Object; //true i.e. looked up in prototype chain and get the Object constructor 





