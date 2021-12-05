
var ans = [];
function subsets(process,unprocess){
    if(unprocess.length==0){
        ans.push(process);
        return;

    }
    else{
        var char = unprocess.shift();
     
        subsets(process.push(char),unprocess.splice(0,1));
         subsets(process,unprocess.splice(0,1));


    }
}
subsets([],[1,2,3])
console.log(ans);