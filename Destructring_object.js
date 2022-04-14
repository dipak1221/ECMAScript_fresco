// var [one,tow]=['java','javascript'];
// console.log(one)


// var [,,three] = ['java','js','ecma'];
// console.log(three)


// let person = {
//     firstname1:'dipak-',
//     lastname:'gautam'
//   }

 //   var { firstname:fname }=person; 
//   console.log(person.firstname);
//   console.log(fname);
// or
//   var { firstname:firstname }=person; // if property and variable we keep same then
//   var { firstname }=person; // this will also work
//   console.log(person.firstname);
//   console.log(firstname);





let data = {
    firstname:'dipak-',
    lastname:'gautam',
    mobile:'23423',
    gender:'male'
  }

  var {firstname:fname,lastname,...details}=data;
  console.log(fname);
  console.log(lastname);
  console.log(details)


