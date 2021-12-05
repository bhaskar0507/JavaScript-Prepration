
// const sleep = (time)=>{
// return new Promise((resolve, reject)=>{
//    setTimeout(()=>{
//        //resolve()
//        reject()
//     },time);
// })
// }
// sleep(2000)
// .then(resolve =>console.log("printed after 2 secoonds"))
// .catch(err=>console.log("catch the error"))


// const prob1 = new Promise((res,rej)=>{
//   setTimeout(()=>{
//       //res()
//       rej("catch the error")
//   },1000)
// });

// // prob1.then(()=>{
// //     console.log("executed in 1 sec")
// // })
// prob1.catch((err)=>{
//     console.log(err)
// })

// var name1 = "bhaskar";
// var name1 = "rai";
// var name1 = "javascript"
// console.log(name1);

// function constructor(name,age){
//     this.name = name;
//     this.age = age
// }

// var student = new constructor("bhaskar",23);
// console.log(student);

// var student2 = new constructor("balram",25);
// console.log(student2);


function arrayiee(a,b,c){
    this.a= a,
    this.b =b,
    this.c =c
}

arrayiee.prototype.wish = function(){
    console.log("good morning sir")
}

var obj1 = new arrayiee(3,4,2);
//console.log(obj1);
//obj1.wish();
delete arrayiee.prototype.wish;
//obj1.wish();





var arr = new Array(10).fill(11);
//console.log(arr);

// Array.prototype.लंबाई = function(){
//     console.log(this.length);
// }

// arr.लंबाई();

// var anu = new Array(23).fill(15);
// //console.log(anu);

// anu.लंबाई();

// var chulla = new Array(9).fill(55);
// //console.log(chulla);

// chulla.लंबाई();


// function isPalindrome(arr){
//     i = 0;
//     j = arr.length-1;
//     var palindrome =true;
    
//     while(i<j){
//         if(arr[i]!=arr[j]){
//             palindrome = false;
//            break;
//         }
//         else{
//             i++;
//             j--;
//         }
//     }
//     return palindrome;
// }

// console.log(isPalindrome([1,2]));



async function f() {
    let result = 'first!';
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('done!'), 1000);
    });
  
    result = await promise;
  
    console.log(result);
  }
  
  //f();

 
const myPromise = Promise.resolve('Woah some cool data');

(async () => {
  try {
    console.log(await myPromise);
  } catch {
    throw new Error(`Oops didn't work`);
  } finally {
    console.log('Oh finally!');
  }
})();