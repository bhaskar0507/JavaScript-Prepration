
function max_subarray(data,K){
  
    var prev = data[0];
    
    if(data.length==1){
       if(data[0]==K){
           return "Yes";
       }
    }

    for(var i = 1;i<data.length;i++){
        if(data[i]==K){
            return "Yes";
        }
        var cal = prev+data[i];
    
        if(cal==K){
          return "Yes" 
        }
        prev = cal;
    }
    return "No"
    }
    
    var result = max_subarray([1, 7, 4, 3, 2, 1, 5, 6],14);
    console.log(result);


// let a = 10;
// let b = a;

// a = a+1;
// //console.log(b);

// let arr1 = [1,2,3,4];
// let arr2 = arr1;

// arr1.push(5);

// //console.log(arr2);

// var obj1 = {a:1,
//             b:2,
//             c:3 };

// var obj2 = obj1;
// //console.log(obj1===obj2);

// var arr3 = [1,2,3,4,5];
// var arr4 = [1,2,3,4,5];
// //console.log(arr3==arr4);

// let v= 10;
// let x = 10;
// //console.log(v===x);

//      var rai = [2,4,6,8,9];
//      rai[1] = 1;
//      console.log(rai); 
