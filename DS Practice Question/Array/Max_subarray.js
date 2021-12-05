
function max_subarray(data){
var max_value = data[0];

var prev = data[0];

if(data.length==1){
    return data[0];
}
for(var i = 1;i<data.length;i++){
    var cal = Math.max(data[i],prev+data[i]);

    if(cal>max_value){
        max_value = cal;
    }
    prev = cal;
}
return max_value; 
}

var result = max_subarray([1,3,5,6,2]);
console.log(result);