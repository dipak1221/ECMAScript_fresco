class class1{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static describe(){
        console.log("in a static method");
    }
    mul(){
        return this.x*this.y;
    }
}
class1.describe();
var obj1 = new class1(13,4);
console.log(obj1.mul());

// inheritance

class inherit extends class1{
    sum(){
        return this.x + this.y + super.mul();
    }
}


var obj2= new inherit(5,6);
console.log(obj2.mul());
console.log(obj2.sum());
