// -------------------------First Class Citizens ------------------------

//First Class Citizens:
  /*                    A Programming language is said to be a First Class Function when function
                      in that language are treated like a any other variable            */



//We can assign a function as a variable 
//Exe -1: 
const youtube =function(){
    console.log("Code with Biplab");
}
youtube();

//Exe -2(With Object ): 
const student ={
    name :"Biplab Roy",
    Qualif :function(){
        console.log("I did B -Tech");
    }
}   
student.Qualif(); // call  


//Pass Function as an Argument Proved 
// Call back Function:
//                   The function that we pass as an argument to another function is calles a Call back Function
//Any function that is passed as an argument is called a Callback function
const myName =() =>{
    return 'Hey Biplab,' ;
}

const greeting =(sayHi,name)=>{
    console.log(sayHi()+" "+ name);

}
greeting(myName,"How are you !")



//Returning Function
function a (){
    return function b (){
        console.log("Inner Function Called");
    }
}
a()(); // function call

