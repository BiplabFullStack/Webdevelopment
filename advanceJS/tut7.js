// Prove that Function is a Object 
/*const check =()=>{
    console.log("Checking");
}
check.name ="Biplab Roy";
console.log(check.name);           */


//Prove that Array is a Object

var arr =[5,8,9,5,4,6];
console.log(arr);

const obj ={
    0:5,//0 index 5 value
    1:8,
    2:9,
    3:5,
    4:4,
    5:6,
    
}
console.log(obj);

//How to tell array is present or not enter of the Object
console.log(Array.isArray(obj)); //O/P: false Because any array is not present in the object
console.log(Array.isArray(arr));//O/P :true Because arr variable is a array

