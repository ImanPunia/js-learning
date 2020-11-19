/**
 * Problem 1
 * @param {*} nodes 
 * @param {*} from 
 * @param {*} to 
 */
function findMinOperations(nodes,from,to){

    let edges = 7;
    let PossibleEdges = nodes-1;

    if(edges < PossibleEdges)
        return -1;
    else if(edges == PossibleEdges)
        return 0;
    else 
        return 1;

}

const a = [1,2,3,4]
const b = [1,2,3,4]
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
