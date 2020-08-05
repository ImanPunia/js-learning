function verifyNumberAsync(someValue){
    return new Promise(function(resolve, reject){
        checkEvenNumber(someValue, function(resolved , response){
            if(resolved){
                resolve(response.result);
            }
            else{
                reject(response.error);
            }
        })
    });
}

function checkEvenNumber(number, callback) {
    let t = {};
    if(number%2 === 0) {
        t.result = "Even Number";
        callback(true, t );
    } else {
        t.error="Odd Number";
        callback(false, t);
    }
}


verifyNumberAsync(7)
.then(function(result){
    console.log(`promise resolved successfully :${result}`);
})
.catch(function(error){
    console.log(`promise got rejected :${error}`);
});