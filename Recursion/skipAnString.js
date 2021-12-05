function skipChar(str,char,ans){
    if(str.length==0){
        return ans;
    }
    else{
        if(str.startsWith(char)){
            ans = ans+"";
            return skipChar(str.substring(3),char,ans)  
        } 
        else{
            ans = ans+""+str.charAt(0);
            return skipChar(str.substring(1),char,ans)  
        }
    }
}

 var result = skipChar("bhaskarrai","rai","");
 console.log(result);