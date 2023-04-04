//------------------------------------ Call Back Function ------------------------------
//Call Back Function :
//Any function that is passed as an argument is called a Callback function
const myName =() =>{
    return 'Hey Biplab,' ;
}

const greeting =(sayHi,name)=>{
    console.log(sayHi()+" "+ name);

}
greeting(myName,"How are you !")



//Call Back Function :
/*                   A call back is a function that is to be executed after another function 
                     has finish executing ---hence the name Call Back Function.                            */

const funA =() =>{
    setTimeout(function(){
        console.log("Timer Run");
    },3000);
}

const funB =() =>{
    console.log("Normal Function Run");
}
funA();
funB();

