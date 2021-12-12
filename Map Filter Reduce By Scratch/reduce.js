
function bhaskarsReduce(arr,myReduceFunction,initialValue,) {

    var acc = initialValue == undefined? 0 :initialValue;

    for(var i = 0;i<arr.length;i++){
        var acc = myReduceFunction(acc,arr[i],i,arr);
    }
    return acc;
    
}

var demo = [1,2,3,4,5];

var result = bhaskarsReduce(demo,(acc,num)=>acc+num,5);
console.log(result);