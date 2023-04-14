const posts = [{ title: 'POST1' }];
//Do not touch this function
function create2ndPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST2' });
            resolve()
        }, 3000)
    })
}
//Do not touch this function
function create3rPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST3' });
            resolve();
        }, 2000)
    })
}
 const create4thPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST4' });
            console.log("post 4 is created");
            resolve();
        }, 2000)
    })
}

//Do not touch this function
function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const poppedElement = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}
function updateLastUserActivityTime() {
    let currentDate = new Date();
    let cDay = currentDate.getDate()
    let cMonth = currentDate.getMonth() + 1
    let cYear = currentDate.getFullYear()
    let date = cDay+","+ cMonth +","+cYear;
    let lastTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    console.log(`last activity time is : ${date} ${lastTime}`);
    //return lastTime;

}


//Use Promise.all

Promise.all([create4thPost(), updateLastUserActivityTime()]).then(() => {
    updateLastUserActivityTime();
})
.catch((err) => {
    console.error(err);
})


//Modify the lines below and use .then and .catch smartly to get the correct output.
/*
create2ndPost().then(() =>{
    deletePost().then((ele) =>{
        console.log(ele.title);
        create3rPost().then(() =>{
            deletePost().then((ele2) =>{
                console.log(ele2.title);
                deletePost().then((ele3) =>{
                    console.log(ele3.title);
                    deletePost().then((ele4) =>{
                        console.log(ele4.title);
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
})  */