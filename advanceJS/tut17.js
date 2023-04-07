// -------------------------  forEach Loop  ----------------------------

const newArray =[5,5,9,6,7,8,2,1,6];

//Index and element print
// newArray.forEach(function(ele,ind){
//     console.log(ind +"--->"+ele);
// })


//print o/p : newArray =[5+100,5+100,9+100,6+100,7+100,8+100,2+100,1+100,6+100]
newArray.forEach(function(ele,ind,arr){
    console.log(arr[ind]+100);
})



// -------------------------  for of Loop  ----------------------------
//For of statement loop through the value of an iterable object

for(ele of newArray){
    console.log(ele);
}


// -------------------------  for In Loop  ----------------------------
//For of statement loop through the propertice of an object
const student ={
    name :'Biplab',
    surname:'Roy'
}
for(item in student){
    console.log(item);
}

