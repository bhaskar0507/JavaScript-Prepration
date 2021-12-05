
//Important problem around this keyword and owner object

var x = 3;

var foo = {
    x:2,
    baz:{
        x:1,
        bar:function(){
            return this.x;
        }
    }
}

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
 a.bhaskar= 13;
 console.log(a);

