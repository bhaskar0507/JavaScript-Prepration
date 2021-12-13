var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method(callback) {
    callback();
  }
};
object.method(callback, 1, 2);











// var greet = "hello, world!";

// var 

// function there(){
// console.log(this.greet);
// }
// there();