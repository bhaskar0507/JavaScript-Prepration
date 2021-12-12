
function bhaskarMap(arr,myFunc){

    var returnedArray = [];

    for(var i = 0;i<arr.length;i++){
        var result = myFunc(arr[i],i,arr[i]);

        returnedArray.push(result);
    }
    return returnedArray;

};


var a1 = [1,2,3,4,5];

var result = bhaskarMap(a1,(num)=>num*2);
console.log(result);