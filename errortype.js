function findSquare(num) {
    if( isNaN(num)) {
     // return new Error("Enter number");
     throw new Error("Enter number");
    }
    return num*num;
   }

findSquare('throw');
 //console.log(findSquare('retur'));
 
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

