
function quickSort(nums,low,high) {

    if(low>=high){
    return;
    }

    var start = low;
    var end = high;
    var mid = Math.floor(low +(high-low)/2);

    var pivot = nums[mid];

    while(start<=end){
        while(nums[start]<pivot){
            start++;
        }
        while(nums[end]>pivot){
            end--;
        }
        if(start<=end){
            var temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }

    quickSort(nums,low,end);
    quickSort(nums,start,high);

}

var data = [11,45,2323,55,83,09,66,12454];

(quickSort(data,0,data.length-1));
console.log(data.join(" "));

