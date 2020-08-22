function errorTerminate() {
    t= t+1;
    console.log(t);
}

//errorTerminate();

function hello() {
    try{
        t = t+1;

    } catch(e) {
        console.log(e);
    }
    console.log("hello");
}

hello()

////---------------------------------------------\\\\

try{
    setTimeout(()=>{throw new Error("error found")},100);
} catch(e) {
    console.log(e.message);
}

(function() {
    setTimeout( () => {
        try{
            throw new Error("error ocurred");
        }catch(e){
            console.log(e.message);
        }
    },100)
})();

////----------------------------------------------\\\\
try{
    new Promise((resolve, reject) => {
       throw new Error("error not catched by try catch");
    })
} catch(e) {
    console.log(e.message);
}


const promise =  new Promise((resolve,reject) => {
    if(true) 
        reject(new Error("error ocuured"));
    else
        resolve('success');   
})


promise.then(val => 
    console.log(val)
).catch( err => console.log('error',err.message));
