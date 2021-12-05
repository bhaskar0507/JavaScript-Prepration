function lower_bound(data,K){
    var low = 0;
    var high = data.length-1;
    var index = 0;
    while(low<=high){
        
        var mid = Math.floor(low+(high-low)/2);
        
        if(data[mid]==K){
            index = mid;
            high = mid-1;
           
        }
        else if(data[mid]<K){
            low = mid+1;
        }
        else{
            high = mid-1;
        }
        
    }
    return index;
}


//console.log(lower_bound([2,3,3,3,6,9],3))



function upper_bound(data,K){
    var low = 0;
    var high = data.length-1;
    var index_u = 0;
    while(low<=high){
        
        var mid = Math.floor(low+(high-low)/2);
        
        if(data[mid]==K){
            index_u = mid;
            low = mid+1;
           
        }
        else if(data[mid]<K){
            low = mid+1;
        }
        else{
            high = mid-1;
        }
        
    }
    return index_u;
    
}
//console.log(upper_bound([2,3,3,3,6,9],3))






