
 function mergeSort_inplace(data,start,end){
    if(end-start==1){   
        return;
    }
   
        var mid = Math.floor((start+end)/2);
        mergeSort_inplace(data,start,mid);
        mergeSort_inplace(data,mid,end);
        
         merge_inplace(data,start,mid,end);
        
   
}

function merge_inplace(data,start,mid,end){
    
    var mix = [];
    var i = start;
    var j = mid;
    var k = 0;
    
    while(i<mid && j<end){
        if(data[i]<data[j]){
            mix.push(data[i]);
            i++;
        }
        else{
            mix.push(data[j]);
            j++;
        }
        k++;
    }
    
    while(i<mid){
        mix.push(data[i]);
        i++;
        k++;
    }
    while(j<end){
        mix.push(data[j]);
        j++;
        k++;
    }

    // for(var l = 0;l<mix.length;i++){
    //     arr[]
    // }
    return mix;
    
    
}

var data = [4,5,2,7,9,11,35,2];
var N = data.length-1;
var result = mergeSort_inplace(data,0,N);
console.log(result);

