// ------------------------------ High Order Function ------------------------

const interviewQuestion =(name)=>{
    if(name == 'Biplab'){
        return function(topic){
            console.log(`Hi ${name} whats is ${topic} explain it ?`);
        }
    }
    else if(name == 'Raju'){
        return function(topic){
            console.log(`Hi ${name} whats is ${topic} explain it ?`);
        }
    }
    else if(name == 'Palash'){
        return function(topic){
            console.log(`Hi ${name} whats is ${topic} explain it ?`);
        }
    }else{
        console.log('Wel come to Cooding Test');
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