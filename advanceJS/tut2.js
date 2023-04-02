//      ------------------------------- HOSTING ---------------------------------------

// Hosting :
/*           Hosting is a javascript mechanism variable and function declaration are move to 
            the top of their scope and before code execution.             */


// Example 1(Function Declaration): 
sum(5,10);  // Its Run(Its called hosting )
function sum(a,b){
    sum = a+b;
    console.log(sum);

}
//Note : Hosting is working only This type of function.

//Exam - 2(Function Expression)
console.log(sum); //O/P : undefined
//sum(5,5);// its not run

var sum =function(a,b){
    sum = a+b;
    console.log(sum);
}


//Exam -3

var sum =function(a,b){
    sum = a+b;
    console.log(sum);
}
sum(5,5);// its Run(Normal Function)