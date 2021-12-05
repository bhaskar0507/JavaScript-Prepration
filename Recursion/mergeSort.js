
 function mergeSort(data){
    if(data.length==1){
        return data;
    }
   
        var mid = Math.floor(data.length/2);
      var left = mergeSort(data.slice(0,mid));
        var right =mergeSort(data.slice(mid,data.length));
        
        return merge(left,right);
        
   
}

function merge(left,right){
    
    var mix = [];
    var i = 0;
    var j = 0;
    var k = 0;
    
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            mix.push(left[i]);
            i++;
        }
        else{
            mix.push(right[j]);
            j++;
        }
        k++;
    }
    
    while(i<left.length){
        mix.push(left[i]);
        i++;
        k++;
    }
    while(j<right.length){
        mix.push(right[j]);
        j++;
        k++;
    }
    return mix;
    
    
}

var result = mergeSort([4,5,2,7,9,11,35,2]);
console.log(result.join(" "));

