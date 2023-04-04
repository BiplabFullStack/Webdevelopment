//  -------------------------------Scop Chain --------------------------------

//Scop Chain :
/*           The Scop Chain Resolve the value of the variable name in njavaScript        */

//Lexical Scoping :
/*                  A function that is lexically within another function get access to the scope
                    of the outer function (Inner function can get access to there parent function 
                    variable but not can access parent function   )                    */


//Exam 1 :
var a="Hello Guys ";// Global variable 
function fun1(){
    var b ="How are you !"; //parent variable
    fun2();
    function fun2(){
        var c ="Myself Biplab Roy";
        console.log(a+b+c);
        //fun3();
    }
}
/*function fun3(){
    var d ="I am fun 3";
    console.log(a+b+c+d);//a and d value can access but can't be access to the b and c value
}*/
fun1();