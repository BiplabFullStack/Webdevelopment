// ------------------------------- Bind() Method -------------------------------
// we can merge any method with a Object.
//obj -1
const obj1 ={
    name :'Biplab',
    surname :'Roy'
}

//obj -2
const obj2 ={
    name :'Raju',
    surname :'Kumar'
}

function printName(dept){
    console.log(`My name is ${this.name} ${this.surname} and My dept is ${dept}`);
}

//call Obj 1
let me =printName.bind(obj1);
me("ECE");

//call Obj 1
let bro =printName.bind(obj2);
bro("ECE");