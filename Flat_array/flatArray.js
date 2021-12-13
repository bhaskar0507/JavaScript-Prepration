var data = [1, 2, 3, [22, 33, [55, 6, 8]], 23, 46];


var g_array = [];
function flatArray(data){
    
    if(data.length==0){
        return;
    }
    else{
        for(var i = 0; i < data.length; i++){
            if(typeof data[i]=="object"){
                flatArray(data[i]);
            }
            else{
                g_array.push(data[i]);
            }
        }
    }
    return g_array;
}

console.log(flatArray(data,[]));


// function flatAnAray(data) {
//   var flatArray = [];

//   data.forEach((element) => {
//     if (Array.isArray(element)) {
//       flatArray = flatArray.concat(flatAnAray(element));
//     //   console.log(flatArray);
//     } else {
//       flatArray.push(element);
//     }
//   });

//   return flatArray;
// }

// var result = flatAnAray(data);
//console.log(result);
