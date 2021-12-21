//Important problem around this keyword and owner object

var x = 3;

var foo = {
  x: 2,
  baz: {
    x: 1,
    bar: function () {
      return this.x;
    },
  },
};

var c = foo.baz.bar;
//console.log(c());

//console.log(foo.baz.bar());

var array = new Array(5).toString();
//console.log(array)

var ar1 = Array(10).fill(3);

var obj1 = Object(null);

var obj2 = Object.create(null);
obj2.b = 33;

//console.log(obj2);
obj1.a = 15;
//console.log(obj1);

var a = new String("hello there");
a.bhaskar = 13;
//console.log(a);

var names = ["the", "birth", "day", "boy"];

names.splice(2, 1);

//console.log(names);

var myName = "bhaskar rai";

const printName = () => {
  console.log(myName);
  var myName = "rai bhaskar";
};
//printName();

//Checking the elements of the array in two diffrent arrays..
var array1 = [12, 4, 6, 19];
var array2 = [12, 19, 6, 4];

function checkData(array1, array2) {
  var result =
    array1.length == array2.length &&
    array1.every((elem) => {
      if (array2.indexOf(elem) > -1) {
        return (elem = array2[array2.indexOf(elem)]);
      }
    });
  return result;
}
//console.log(checkData(array1,array2));

// Reversing an array.

function reverseInt(j) {
  var str = j.toString().split("").reverse().join("");
  if (str.endsWith("-")) {
    str = "-" + str;
    return parseInt(str);
  } else {
    return parseInt(str);
  }
}
//console.log(reverseInt(123));

var ternary = 10;

var output = ternary == 10 ? true : false;
//console.log(output);

function factorial(num) {
  if (num == 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
//console.log(factorial(5));

var arr = [1, 2, 3, 4];

//console.log(arr.__proto__);

var obj = {
  a: 2,
  b: 6,
};

function demo(a, b) {
  var sum = a + b;
}

Function.prototype.bhaskarsLength = function () {
  console.log("hello my people");
};

//obj.bhaskarsLength();

//demo.bhaskarsLength();

message: "Hello i am global!";
const object = {
  getMessage() {
    const message = "Hello, Earth!";
    return this.message;
  },
};
// console.log(object.getMessage());

// var promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("not got the response");
//   }, 1000);
// });

// promise.then((res) => {
//   console.log(res);
// });
// promise.catch((err) => {
//   console.log(err);
// });

function check(str){

  if((str.charCodeAt(0)>=65 && str.charCodeAt(0)<=90) || (str.charCodeAt(0)>=97 && str.charCodeAt(0)<=122)){
    return true;
  }
  return false;
}
var eStr =  "A man, a plan, a canal: Panama";

var str = eStr.split("");
//console.log(str);

var output_str = "";

for(var i = 0;i<str.length;i++){
  var output = check(str[i]);
  if(output==true){
    output_str+=str[i]+"";
  }
}
//console.log(output_str.toLocaleLowerCase());

//console.log(21||15);

function getData(){
  var a = 10;
  console.log(a);
}
getData();
  b = 20;
 console.log(b);