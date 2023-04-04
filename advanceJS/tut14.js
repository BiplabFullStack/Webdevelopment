// Closure :
/*         Closure in action that in inner function can have access to the outer function variables as well as all the global variable   */

const outerFun =(a)=>{
    let b=10;
    const innerFun =() =>{
        let sum =a+b;
        console.log(`Sum of two number is ${sum}`);
    }
    return innerFun;
}
const call =outerFun(5);
console.log(call());



//Exercise -2(Using Closure):
const interviewQuestion =(name)=>{
    return function(topic){
        if(name ==='Biplab'){
            console.log(`Hi ${name} whats is ${topic} explain it ?`);
        }else if(name == 'Raju'){
            console.log(`Hi ${name} whats is ${topic} explain it ?`);
        }else if(name == 'Palash'){
            console.log(`Hi ${name} whats is ${topic} explain it ?`);
        }
    }
}

//One away call method :

// interviewQuestion('Raju')("DSA");
// interviewQuestion('Biplab')("Higher Order Function");
//interviewQuestion('Dinesh')("For Loop");



//2nd away call Method: 
//I can Ask many question 
const question =interviewQuestion('Raju');
question('JavaScript');
question('Tree');
question('Graph');