//Function Median
// function median(data){
//     var sortData = data.sort((a,b)=> a-b);
    
//     var mid = Math.floor(sortData.length/2);
    
//     if(sortData.length%2==0){
//         return (sortData[mid]+sortData[mid-1])/2;
//     }
//     else{
//         return sortData[mid];
//     }
    
// }
//  var result = median([4,8,7,6,4,2,4,4,1,2]);
 //console.log(result);

 //Function mode

//  function Mode(data){
    
//     var max_count = 1;
//     var count = 1;
//     var res = data[0];
    
//     for(var i = 1;i<data.length;i++){
//         if(data[i]==data[i-1]){
//             count++;
//         }
//         else{
//             if(count>max_count){
//                 max_count = count;
//                 res = data[i-1];
//                 count=1;
//             }
//         }
        
//     }
//     return res;
    
// }
//console.log(Mode([9,4,10,2,7,7,9,9,2,4]));


function modeObj(val){
var data = val.sort((a,b)=>a-b);
    var result = 0;

    var ref = 0;

    var obj = {};
   for(var i = 0;i<data.length;i++){
       var key = data[i];
       if(key in obj){
           obj[key]++;
       }
       else{
           obj[key]=1;
       }
   }

   console.log(obj);

    for(key in obj){

        if(obj[key]>ref){
            result = key;
            ref = obj[key];
        }
    }
    return result;

}

console.log(modeObj([4, 4, 4, 2, 2, 2]));
