//merge sorted array with duplicacy
var first_array = [1,4,6,8];

var second_array = [3,5,5,6,9,10];

console.log(mergeSortedArray(first_array, 4, second_array, 6));

function mergeSortedArray(x,k,y,d){

    if(k > d) {
        var a = y;
        var b = x;
    } else {
        a = x;
        b = y
    }

    let merged_array = [];
    var c =0 ;

    for(i = 0 ; i < b.length; i++)
    {  
        for(j = c ; j < a.length; j++) 
        {

            if(a.length == j) {
                c = j+1;
            } else {
                c=j;
            }

            if(b[i] < a[j]) {
                merged_array.push(b[i]);
                break;
            }  else if (b[i] == a[i]) {
                merged_array.push(b[i]);
                merged_array.push(a[i]);
            }
            else { 
                merged_array.push(a[j]);
            } 
        }
        
        if(i >= a.length) {
            merged_array.push(b[i]);
            c++;
        }

    }
    return merged_array;
}

/*output
[
    1, 3, 4, 5,  5,
    6, 6, 8, 9, 10
] */