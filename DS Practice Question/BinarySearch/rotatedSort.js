
function getAnswer(nums,target){

    var low = 0;
    var high = nums.length-1;

function pivotElement(nums){
            
    var low = 0;
var high = nums.length-1;

while(low<=high){
    var mid = Math.floor(low+(high-low)/2);
    
    if(mid>low && nums[mid]<nums[mid-1]){
        return mid-1;
    }
    if(mid<high && nums[mid]>=nums[mid+1]){
        return mid;
    }
     else if(nums[mid]<=nums[low]){
        high = mid-1;
    }
    else if(nums[mid]>nums[low]){
        low = mid+1;
    }
}
}

var pivot = pivotElement(nums);


if(nums[pivot]==target){
    return pivot;
}

else if(target<nums[low]){
    return findElement(nums,target,pivot+1,high);
}
else if(target>=nums[low]){
     return findElement(nums,target,low,pivot-1);
}


function findElement(data,target,low,high){
   

    while(low<=high){
        var mid = Math.floor(low+(high-low)/2);

        if(data[mid]==target){
            return mid;
        }
        else if(data[mid]>target){
            high = mid-1;
        }
        else{
            low = mid+1;
        }
        }
    return -1;
}

}

var result = getAnswer([7,8,9,0,1,2,3,4,5,6],6);

console.log(result);






