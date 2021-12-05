
const checkSort = (arr,index)=>{
if(index==arr.length-1){
    return true;
}
else{
    return arr[index]<=arr[index+1] && checkSort(arr,index+1);
}
}

console.log(checkSort([1,2,3,4,5,6],0));