function parent(){
var c = 20;
function outer(b){
var a = 10;
function inner(){
    console.log(a,b,c);
}
return inner;
}
return outer;
}

var index = parent();
var index2 = index("hello bhaskar");
index2();