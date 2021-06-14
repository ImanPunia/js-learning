/**
 * Problem 1
 * @param {*} nodes 
 * @param {*} from 
 * @param {*} to 
 */
function findMinOperations(nodes,from,to){

    let edges = from.length;
    let PossibleEdges = nodes-1;

    if(edges < PossibleEdges)
        return -1;
    else if(edges == PossibleEdges){
        let u = [];

        for(x=1; x< nodes;x++){
            let i = x.toString()+(x+1).toString();
            u.push(i);
        }

        let z=[] ;
            
        for(x=0;x<from.length;x++){
            for(y=x;y<=x;y++){
                const t = from[x].toString()+to[y].toString();
                z.push(t)
            }
        }

        let p = true ;
        z.forEach((value, index) => {
            if(value !== u[index])
            {
                p = false;
                return;
            }
        });

        if(p){
            return 0;
        } else {
            return 1;
        }

    }
   

}

const a = [1,2,3,4]
const b = [2,3,4,1]
console.log(findMinOperations(5,a,b));


/**
 * Problem 2
 */
function findIdealNumber(){
    var r = [];
    var a = 1;
    var b = 10;
    
    for(x = 0 ; x<10; x++){
        let s = 3*x;
    
        for(y=0; y<10;y++){
            let z = calculatePower(3,x)*calculatePower(5,y);
    
            if(z >= a && z<=b) {
                r.push(z);
            }
            
            if(s>b){
             break;
            }
        }
    
        if(s>b){
            break;
        }
    }
    console.log(r);
}
    
function calculatePower(base , exp){
    let r = 1;
    while(exp != 0){
        r *=base;
        exp--;
    }
    return r;
}
    
findIdealNumber();

/**
 *  problem 3
 */

 function MaxMudWallHeight(p,h){
 j = [];
    for(i = 0 ; p <= p.length ; p++) {
     

        for(j = 0 ; h<= h.length; h++){
           if(i != 0) {
               difference = p_p - p[i];
               if(difference > 1 ) {
                    height_difference = h[i] - p_h;
                  //  if(height_difference - difference == )
               } else {
                   break;
               }
           }
           
           
            p_h = h[j];
        }
        p_p = p[i];
    }

//This function will return the max height calculated as per conditions.
     maxeight=0;
    for( i=0;i<p.length-1;i++){
        /*Space between both the sticks is calculated. If it is more than one then height is incremented by 1 unit
        from the given height*/
         space = p[i+1]-p[i];
        if(space>1){
            maxeight=h[i];
            for( j=1;j<space;j++){
                if(j==1){
                    maxeight++;
                }else if(maxeight<h[i+1]){
                    maxeight++;
                }
            }
            j = maxeight;
        }
    }		
    console.log(maxeight);
    return maxeight;

 }

  y = MaxMudWallHeight([1,3,7],[4,3,3]);
 console.log(y);


 function compareTriplets(a, b) {

    let bobPoints = 0;
    let alicePoints = 0;
    let result = [];
    
    for(let i = 0; i < a.length ; i ++) {
        if(a[i] > b[i]){
            alicePoints = alicePoints + 1;   
        } else if(a[i] < b[i]) {
            bobPoints = bobPoints + 1;
        }
    }

    result.push();

    const vb =  result.toString();
    return vb;
}

console.log(compareTriplets([3,4,5],[8,9,6]));