let mySymbol = Symbol();
// every time when Symbol() function is called a unique symbol is return

Symbol.for('bar') === Symbol.for('bar') //true
Symbol('bar') === Symbol('bar') //false


let email = Symbol();

let person = {
    name: 'rajesh',
    phone: 234325325,
    [email]: "rajesh@gmail.com"
}

let allKeys = Reflect.ownKeys(person);
let symbolKeys = Object.getOwnPropertySymbols(person);
let nonSymbolKeys = Object.getOwnPropertyNames(person);