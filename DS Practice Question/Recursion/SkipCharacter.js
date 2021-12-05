
function skipChar(str,char,index,ans){
    if(index == str.length){
        return ans;
    }
    else{
        if(str.charAt(index)!=char){
            ans = ans+""+str.charAt(index);
            return skipChar(str,char,index+1,ans) 
        }
        else{
            return skipChar(str,char,index+1,ans)  
        }
    }
}

 var result = skipChar("bhaskar","a",0,"");
 console.log(result);

