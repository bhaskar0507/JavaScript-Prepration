


var ans = [];
function sebSequence(process, unprocess){
 
    if(unprocess.length==0){
       if(process.length==0){
           ans = ans;
       }
       else{
        ans.push(process);
       }
        // console.log(process);   
       
      
        return;
    }
    else{
        
        //Taking a first character of the string
        var char = unprocess.charAt(0);
        
        //Recursive function call for including that char.so got added in process
        sebSequence(process+char, unprocess.substring(1));

        //Or ignoring that char , so not got added in process , but removed from unprocess.
        sebSequence(process, unprocess.substring(1));

    }
  
}

sebSequence(process, unprocess)


