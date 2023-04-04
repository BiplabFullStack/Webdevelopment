// ------------------------------- Variable Hosting -----------------------------
//Exam -1
/*
console.log(a); //O/P : undefined
var a =10;
*/

//Exam -2
 
console.log("I am a "+ job); //O/P : I am a undefined
var job ="Web Development ";
console.log("I am a "+ job);
function whoIAm(){
    console.log("I am a "+ job);  //O/p : I am a undefined
    var job = "Backend Developer";
    console.log("I am a "+ job);
}
whoIAm();
