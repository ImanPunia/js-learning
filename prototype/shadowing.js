const x = {'num' : 1};
const y = Object.create(x);

console.log(y) //{}
console.log(y.num) // 1

y.num = 4;
console.log(x.num);//1
console.log(y.num); // 4

//If num is found on y , it will be updated. If its not present on object y and is present in prototype chain
// and is not read only then new property called num is added on object y .(shadowed property)

