//By bind Method---
var addition = function(a,b,c){
  console.log(a+b+c)
}
//addition(10,15);

var newFunction = addition.bind() ;
//newFunction(20,2,2)

var bhaskar = function(g,b){
    console.log(`bhaskar is a ${g} boy with a ${b} behaviour`)
}
//bhaskar("good","bad");

var balli = bhaskar.bind(this,"silly");
// By putting this in the above position as a argument we preset the g as a silly in the fuction----
//balli("super");


//By Closures---

//By currrying we can transform multi arguments function into single arguments function , which makes program easy to debug and
//and simple.

let add = function(a,b,c){
console.log(a+b+c);
}

//add(10,3,5)

function dada(a){
function papa(b){
function beta(c){
    function pota(d){
        console.log(a+b+c+d);
    }
    return pota(3)
  }
return beta(7)
}
return papa(10)
}
return dada(5);


let multiply = function(x){
    return function(y){
        console.log(x*y);
    }

}

let multiplyByTwo = multiply(2);
let multiplyByThree = multiply(3);

//multiplyByTwo(3);
//multiplyByThree(15);


