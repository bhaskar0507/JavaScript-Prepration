
function getAverage(data){

    
    var sum = 0;
    for(var i = 0;i<data.length;i++){
        sum+=data[i];
    }
    var average = Math.floor(sum/data.length);

    var ans = 0;

    for(var j = 0;j<data.length; j++){
        var val = Math.abs(data[j]-average);
        ans = ans+val;
    }
    return ans;
}

var arr = [1,2,3,4,5,6,7,8,9,100000000];

console.log(getAverage(arr));