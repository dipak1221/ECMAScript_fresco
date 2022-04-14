//generator is also function.
// we can pause the execution and later resume 

function *foo(){
    yield 'hi',
    yield 'dude'
}
// or
function *foo(){
    yield* [ 'hi','dude'];
}

let iterator = foo();
iterator.next(); //object{value:'hi' , done=false}
iterator.next(); //object{value:'dude' , done=false}
iterator.next(); //object{value:undefined , done=true}




function *foo(){
    yield 'hi';
    yield 'dude';
    return 'bye';
}
let iterator1 = foo();
iterator1.next(); //object{value:'hi' , done=false}
iterator1.next(); //object{value:'dude' , done=false}
iterator1.next(); //object{value:'bye' , done=true}
iterator1.next(); //object{value:undefined , done=true}


function *foo() {
    yield* ['hi', 'hello'];        
}
function *bar() {
    yield* foo();
    yield "bye";        
}
let iterator2 = bar()
iterator2.next();  // Object {value: "hi", done: false}
iterator2.next();  // Object {value: "hello", done: false}
iterator2.next();  // Object {value: "bye", done: false}
iterator2.next();  // Object {value: undefined, done: true}