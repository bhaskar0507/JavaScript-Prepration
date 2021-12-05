function check(data,n){
    let s=[];
    let res=[];
    
    for(let j=0;j<n;j++){
        
      while(s.length>0 && data[j]>=data[s[s.length-1]]){
        s.pop();
      }
     if(s.length===0){
         res.push(-1)
     }

    else{
        res.push(s[s.length-1]);
      }
      
      s.push(Number(j));
    }
    return res;
  }

 console.log(check([5,4,1,3,2],5));

 function check1(data,n){
    let s=[];
    let res=[];
    for(let j=n-1;j>=0;j--){
        
      while(s.length>0 && data[j]>= data[s[s.length-1]]){
        s.pop();
      }
      if(s.length>0){
        res.push(s[s.length-1]);
      }
      else{
        res.push(-1);
      }
      s.push(Number(j));
    }
    return res.reverse();
  }

  console.log(check1([5,4,1,3,2],5));