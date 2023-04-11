const posts = [{title: 'POST1'}];
//Do not touch this function
function create2ndPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
            resolve()
        }, 3000)
    }) 
}
//Do not touch this function
function create3rPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve();
        }, 2000)
    }) 
}

//Do not touch this function
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}

//Using Try and Catch
async function fun1(){
    try{
        const sec =await create2ndPost();
        const del1 = await deletePost();
        console.log(del1);
        const thir =await create3rPost();
        const del2 = await deletePost();
        console.log(del2);
        const del3 = await deletePost();
        console.log(del3);

        const del4 = await deletePost();
        console.log(del4);
    }catch(err){
        console.log(err);
    }
    
}
fun1();

//Using Then and Catch :
/*
create2ndPost().then(() =>{
    deletePost().then((ele) =>{
        console.log(ele);
        create3rPost().then(() =>{
            deletePost().then((ele2) =>{
                console.log(ele2);
                deletePost().then((ele3) =>{
                    console.log(ele3);
                    deletePost().then((ele4) =>{
                        console.log(ele4);
                    }).catch((err) =>{
                        console.log(err);
                    })
                }).catch((err) =>{
                    console.log(err);
                })
            }).catch((err) =>{
                console.log(err);
            })
        })
    }).catch((err) =>{
        console.log(err);
    })
})                   */



    




