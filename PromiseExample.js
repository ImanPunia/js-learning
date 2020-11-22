var keepPromise = false;
promise = new Promise(function(resolve, reject){
    if(keepPromise) {
        resolve("promise is fullfilled");
    } else {
        reject("promise is not fullfilled");
    }
})

console.log(promise);

promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({value:"Resolved"})
    }, 10000);
    
})
console.log(promise1);

function getRandomNumber(start = 1, end = 10) {
    //works when both start,end are >=1 and end > start
    return parseInt(Math.random() * end) % (end-start+1) + start;
  }

var promiseRandomNumber = new Promise(function(resolve, reject){
    var randomTimeSpan = getRandomNumber(2,10);
    setTimeout(function(){
        var randomNumber = getRandomNumber(6,10);
        if(randomNumber > 5) {
            resolve({randomTimeSpan: randomTimeSpan,
                    randomNumberValue: randomNumber})
        } else {
            reject({randomTimeSpan: randomTimeSpan,
                randomNumberValue: randomNumber})
        }
    },randomTimeSpan);
})

promiseRandomNumber.then(function(value){
    console.log("promise is resolved with value :",value);
},
function(value){
    console.log("promise is rejected with value:", value)
});

var promiseResolve = function(
    n = 0
  ) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve({
          resolvedAfterNSeconds: n
        });
      }, n * 1000);
    });
  };

  var promiseReject = function(
    n = 0
  ) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        reject({
          rejectedAfterNSeconds: n
        });
      }, n * 1000);
    });
  };

  var allPromises = [];
  allPromises.push(promiseResolve(1));
  allPromises.push(promiseResolve(6));
  allPromises.push(promiseReject(6))
  allPromises.push(promiseResolve(5));
  var processAllPromises = Promise.all(allPromises);

  processAllPromises.then(function(values){
      console.log("All promises are resolved ", values);
  },
  function(values){
      console.log("Promise is rejected ", values)
  });



  //Reffered from https://medium.com/better-programming/understanding-promises-in-javascript-13d99df067c1