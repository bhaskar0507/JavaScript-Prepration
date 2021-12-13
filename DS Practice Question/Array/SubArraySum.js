function sumOfSub(data,L,R){
    var sum = 0;
    
    for(var i = L-1;i<=R-1;i++){
        sum+=data[i];
    }
    return sum;
}

 var output = sumOfSub([3,2,1,5],1,4);
 console.log(output);

//  console.log("output");

//console.log("hello there");

// function check(data){

//     var obj = {};
//     for(var i = 0;i<data.length;i++){
//         var char = data[i];
//         if(char in obj){
//             obj[char]++;
//         }
//         else{
//             obj[char]=1;
//         }
//     }
//     return obj;

// }

// var output = check([1,2,1,3,2,7,4,2])
// console.log(output);