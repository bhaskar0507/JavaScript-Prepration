
function bhaskarsFilter(arr,myFilterFunc){

    var resultArr = [];

    for(var i = 0;i<arr.length;i++){

        var result = myFilterFunc(arr[i],i,arr);

        if(result==true){
            resultArr.push(arr[i])
        }
    }
    return resultArr;
};

var values = [1,2,3,4,5,6,7,8];

var output = bhaskarsFilter(values,(val)=>val%2!==0);
console.log(output);