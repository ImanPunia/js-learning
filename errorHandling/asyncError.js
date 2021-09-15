/**
 *  error handling in async
 */
(async () => {
    try {
        await new Promise((res , reject ) => reject('promise rejected'));
    } catch (e) {
        console.log(e);
    }
})();

async function rejectPromise(){
    try {
        await new Promise((res , reject ) => reject('promise rejected agian'));
    } catch (e) {
        console.log(e);
    }
}

rejectPromise();

/**
 *  error handling using caych block
 */
(() => {
    new Promise((res, reject) => reject('Promise rejetced thrice'))
    .catch(e => console.log(e))
})();

(() => {
    new Promise((res, reject) => reject('error found'))
    .then((value) => console.log(value), (error) => console.log(error))
    .catch(e => console.log('Rejected' + e))
})();

(() => {
    new Promise((res, reject) => reject('error found'))
    .then((value) => console.log(value))
    .catch(e => console.log('Rejected' + e))
})();

/** nested error handling in async */
(async () => {
    try {
      await new Promise((res, reject) => {
        reject('only thi swill work')
      })
      try {
        await new Promise((res, reject) => {
          reject('i will be skipped')
        })
      } catch (error) {
        console.log('nested error' + error);
      }
    } catch (error) {
      console.log('outermost ' + error);
    }
  })();

  (async () => {
    try {
        try {
            await new Promise((res, reject) => reject('outer error'))
        } catch(e) {
            console.log('got my catch block ' + e);
        }
        try {
         await new Promise((res, reject) => reject('inner error'))
        } catch (error) {
            console.log('this time i will execute ' + error);
        }
        
        await new Promise((res, reject ) => reject('my catch is missing'));
        
    } catch (error) {
      console.log('outermost ' + error);
    } 
  })();
  