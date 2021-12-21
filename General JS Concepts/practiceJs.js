

// console.log(hello());
// const hello = ()=>{
//     console.log("hello inside func");
// };

var a = "12345";
var b = parseInt(a,10);
//console.log(b);

let arr1 = [1,2,3];


//console.log(arr1===arr1);


function bar(){
    return foo;
    foo = 10;
    function foo(){
        console.log("i am function foo ")
    }
    var foo = 11;
}

var result = bar();
//console.log(result());



// var result = (func1());
// console.log(result());
//  function func1(){
//      return function func2(){
//          //console.log("this is function 2")
//         }

//     }

// function demo(){
//     return foo;
//     var foo = 11;
//     foo = 18;
//     function foo(){
//         console.log("i am func foo ");
//     }
// }
// var myResult = demo();
// console.log(myResult());

