class Subscriber{

    constructor(consumeValue) {
        this.consumeValue = consumeValue;
        this.closed = false;
    }

    next(val) {
        console.log("Iman");
        if(!this.closed) {
            if(typeof this.consumeValue === "function") {
                try{
                    this.consumeValue(val);
                }
                catch(e){
                    this.error(e);
                }
            } else {
                try{
                    this.consumeValue.next(val);
                } catch(e) {
                    this.error(e);
                }
            }
        }
    }

    error(err) {
        if(!this.closed) {
            this.closed = true;
            if(typeof this.consumeValue === "function"){
                this.consumeValue('error error',err);
            } else {
                this.consumeValue.error(err);
            }
            
        }
    }

    complete() {
        if(!this.closed) {
            this.closed = true;
            if(typeof this.consumeValue === "function") {
                this.consumeValue();
            } else {
                this.consumeValue.complete();
            }
        }
    }

}

class Observable {

    constructor(callBack) {
        this.callBack = callBack;
    }

    subscribe(consumeValue) {
        try{
            const subscriber = new Subscriber(consumeValue);
            return this.callBack(subscriber);
        } catch(err){
            if(this.callBack === null) {
                console.log("called observable doees not exist anymore");
            } else {
                console.log(err);
            }
        }
        
    }

    unsubscribe() {
        this.callBack = null;
    }

}

const foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
});
 
foo.subscribe(
    (y) => consle.log('next',y),
    (e)=> console.log('error a gea',e) 
  
  );