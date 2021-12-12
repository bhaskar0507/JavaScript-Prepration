

var global_array = [];
function flatAnArray(data){
    if(data.length==0){
        return;
    }
    else{
        for(var i = 0;i<data.length;i++){
            if(typeof data[i]=="object"){
                flatAnArray(data[i]);
            }
            else{
                global_array.push(data[i]);
            }
        }

    }
    return global_array;
}

var data = [1,2,33,[44,55,7,[467,223]]];
//console.log( flatAnArray(data));

//Another Implimentation of same flat method with


function flatArray(data){
    var outerArray = [];

    data.forEach((elem)=>{
        if(Array.isArray(elem)==true){
            outerArray = outerArray.concat(flatArray(elem));
        }
        else{
            outerArray.push(elem);
        }
    });
    return outerArray;
}

console.log(flatArray(data));
