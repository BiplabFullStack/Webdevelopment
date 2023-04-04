// ----------------------------------- "This" Keyword --------------------------------------

//What is "This" Keyword ?
/* It has different values depend on where it is used
1. When alon its refer to global object       
2.In a regular function "This" refer to the global function
3.In a method "This" refer to the owner object                */


//Exam -2 :
/*function sum(){
    var add =2+2;
    console.log(add);
    console.log(this);//"This "keyword refer to the global object
}
sum();                       */


//Exam -3

/*const student ={
    name :"Biplab Roy",
    Qualif : "B.Tech",
    sum:function(){
        var add = 2+2;
        console.log(add);
        console.log(this);//"This" refer to the parent object not refer to global object
    }
}
student.sum()  */ //call


//Exam -4

const student ={
    name :"Biplab",
    Qualif : "B - Tech",
    sum :function(){
        console.log(this.name);
        var add =2+2;
        console.log(add);
        console.log(this); //"This" refer to the paren Object
        function child(){
            var name ="Biplab Roy";
            console.log(name);
            console.log(this);//"This" refer to the Global Object because this function is a Regular Function
        }
        child();


    }
    
}
student.sum();