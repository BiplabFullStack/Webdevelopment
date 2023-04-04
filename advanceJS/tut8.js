//  --------------------------Pass By Value && Pass By Reference --------------------------

//Pass By Value
var a=5;
var b=a;
b=b+5;
console.log(a); //Not change value of a
console.log(b);


//Pass By Reference 

//exam-1:
const obj ={
    user : "biplab",
    pass :"1997"
}
const obj2 = obj; //copy ref
console.log(obj2);
obj2.pass =" Biplab@1997"; //update password through obj2
console.log(obj); //pass is change 

//Exam -2
const arr1 =[1,5,8,9,6,7];
const arr2 =arr1; // copy ref not copy value
arr2.push(5);
console.log(arr1);//5 push into the arr1 and arr2
console.log(arr2);



//Exam 3: (copy only the value )
const arr =[1,5,8,9,6,7];
const arr3 =[].concat(arr);// Copy only value not copy, reference of the arr 
arr3.push(5);
console.log(arr);   //5 is not push into the arr
console.log(arr3);    //5 is push only into the arr3





//Exercise Question
let like =100;
const youtube ={
    name : "Code with Biplab ",
    subscriber:1700
}
const biplab=(a,b)=>{
    a =200;
    b.subscriber =2000;
}
biplab(like,youtube); //call biplab function but two parameter one is premitive and another is Non Premetive
console.log(like); //O/P : 100 Because like is a premetive data type 
console.log(youtube.subscriber); //O/P :2000 Because youtube is a Non Premetive Data Type

