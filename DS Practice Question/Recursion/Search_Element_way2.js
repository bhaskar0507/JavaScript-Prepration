//This time we don't gonna pass array ans in a argument of the function--
function searchElement(arr,target,i){
    //Base Condition ,if i value reaches upto end then we have to return
    // the ans array to get the answer

    var ans = [];
    if(arr.length==i){
        return ans;
    }
    else{
      
        if(arr[i]==target){
            ans.push(i);
        }
        //we take the values coming from recursive function in a new arr named as ansFromBelow.
         var ansFromBelow = searchElement(arr,target,i+1);

         //And Merge them with ans array by the help of ...spread operator
        ans = [...ansFromBelow,ans];
        return ans;
    }
}

console.log(searchElement([1,2,3,4,4,8],4,0));