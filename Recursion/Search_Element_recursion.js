
// ans is a array there which we take for storing index values--
function searchElement(arr,target,i,ans){
    //Base Condition ,if i value reaches upto end then we have to return the ans array to get the answer
    if(arr.length==i){
        return ans;
    }
    else{
        if(arr[i]==target){
            ans.push(i);
        }
        return searchElement(arr,target,i+1,ans) 
    }
}

console.log(searchElement([1,2,3,4,4,8],4,0,[]));