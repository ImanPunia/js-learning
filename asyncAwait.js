//Refrenece   : https://medium.com/better-programming/understanding-async-await-in-javascript-1d81bb079b2c

async function implAsyncAwait() {
    try {
      result = await promiseRandomNumber;
      console.log("value is ", result);
    } catch (e) {
      console.log("Error", e);
    } 
}

implAsyncAwait();


var promiseRandomNumber = new Promise(function(resolve, reject){
  console.log("data")
  var randomTimeSpan = getRandomNumber(2,10);
  setTimeout(function(){
      var randomNumber = getRandomNumber(6,10);
      console.log("data")
      if(randomNumber > 5) {
          resolve({randomTimeSpan: randomTimeSpan,
                  randomNumberValue: randomNumber})
      } else {
          reject({randomTimeSpan: randomTimeSpan,
              randomNumberValue: randomNumber})
      }
  },randomTimeSpan);
})

function getRandomNumber(start = 1, end = 10) {
  //works when both start,end are >=1 and end > start
  return parseInt(Math.random() * end) % (end-start+1) + start;
}