function findSquare(num) {
    if( isNaN(num)) {
     // return new Error("Enter number");
     throw new Error("Enter number");
    }
    return num*num;
   }

findSquare('throw');
 //console.log(findSquare('return'));
 
 /////----------------------------------------------------\\\\\
  function handleError(num) {
    try{
      if(num%2 !== 0)
        throw new Error("entered number is odd");
    } catch(e){
      console.log(e.message);
    } finally {
      console.log("Unstoppable");
    }
  }

 handleError(3);

 ////------------------------------------------------------\\\\


function nestedTryCatch() {
  try {
//throw new Error('yeah');
    try {
      throw new Error('first try');
    }
    catch(e) {
        console.log('nested',e.message);
        throw e;  //retrowing exception and will be handled by imediate catch block
    }
    finally {
      console.log('finally block');
    }
  }
  catch (ex) {
    console.error('ending ', ex.message);
  }
}

nestedTryCatch();

////----------------------------------------------\\\\\
(function() {
  try {
    try {
      throw new Error('its an error');
    }
    catch (ex) {
      console.error('first catch', ex.message);
      throw ex;
    }
    finally {
      console.log('return finally');
      return; // return is treated as return of whole try-catch-finally block
    }
  }
  catch (ex) {
    console.error('outer block', ex.message);
  }
})();

////-------------------------------------------\\\\