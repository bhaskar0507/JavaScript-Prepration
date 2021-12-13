

function maxPair(data_a,data_b){

    var data1 = data_a     
    var data2 =data_b      

    // console.log(data1);
    // console.log(data2);

    var N = data1.length;
    var M = data2.length;
    
    var  count = 0;
   var i = 0;
  
   
   while(i<N && i<M){
       if(Math.abs(data1[i]-data2[i])<=1){
           count++;
         }
    i++;
   }
   //console.log(count);

}

(maxPair([12, 11, 1, 25, 46, 41, 46, 1, 8, 47, 0, 46 ,20, 36, 14, 25],[9, 24, 25, 47, 7, 19, 25,26,46,9]));


var string = "dangerouscovid";

console.log(string.includes("a") && string.includes("e") && string.includes("i") && string.includes("o") && string.includes("k"));