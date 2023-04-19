function onsignup(event) {
    event.preventDefault();

    const expense = event.target.Expense.value;
    const description = event.target.Description.value;
    const category = event.target.Category.value;

    myObj = {
        expense,
        description,
        category
    }

    // localStorage.setItem(myObj.description, JSON.stringify(myObj));
    if (expense && description && category) {
        axios.post('https://crudcrud.com/api/5acdff13528b44b2a92970ca9484a30e/ExpenseTrackerNew', myObj)
            .then((resolve) => {
                onScreenFunction(myObj);
                console.log(resolve);
            })
            .catch((err) => {
                console.error(err);
            })
        // onScreenFunction(myObj);
    } else {
        alert('Enter All the things please');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/5acdff13528b44b2a92970ca9484a30e/ExpenseTrackerNew')
        .then((response) => {
            console.log(response);
            response.data.forEach((element) => {
                onScreenFunction(element)
            })
        })
        .catch((err) => {
            console.error(err)
        })
})
// Object.keys(localStorage).forEach((item) => {
//     onScreenFunction(JSON.parse(localStorage[item]));
// })

// Object.keys(localStorage).forEach((item) => {
//     onScreenFunction(JSON.parse(localStorage[item]));
// })
// })

function onScreenFunction(myObj) {
    const ul1 = document.getElementById('listOnScreen1');
    const ul2 = document.getElementById('listOnScreen2');
    const ul3 = document.getElementById('listOnScreen3');

    const li = document.createElement('li');
    li.innerHTML = JSON.stringify(myObj);

    const delBtn = document.createElement('input');
    delBtn.value = 'Delete';
    delBtn.type = 'button';
    delBtn.onclick = () => {
        //     localStorage.removeItem(myObj.description);
        //     ul.removeChild(li);
        // }
        const url = `https://crudcrud.com/api/5acdff13528b44b2a92970ca9484a30e/ExpenseTrackerNew/${myObj._id}`;
        axios.delete(url)
            .then(() => {
                if(myObj.category == 'Table 1'){
                    ul1.removeChild(li);
                }else if(myObj.category == 'Table 2'){
                    ul2.removeChild(li);
                }else{
                    ul3.removeChild(li);
                }
                
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const editBtn = document.createElement('input');
    editBtn.value = 'Edit';
    editBtn.type = 'button';
    editBtn.onclick = () => {

        document.getElementById('Expense').value = myObj.expense;
        document.getElementById('Description').value = myObj.description;
        document.getElementById('Category').value = myObj.category;

        axios.delete(`https://crudcrud.com/api/5acdff13528b44b2a92970ca9484a30e/ExpenseTrackerNew/${myObj._id}`)
            .then(() => {
                if(myObj.category == 'Table 1'){
                    ul1.removeChild(li);
                }else if(myObj.category == 'Table 2'){
                    ul2.removeChild(li);
                }else{
                    ul3.removeChild(li);
                }
             
            })
            .error((err) => {
                console.error(err);
            })
    };

    li.appendChild(delBtn);
    li.appendChild(editBtn);
    //ul.appendChild(li);
    if(myObj.category == 'Table 1'){
        ul1.appendChild(li);
    }else if(myObj.category == 'Table 2'){
        ul2.appendChild(li);
    }else{
        ul3.appendChild(li);
    }
    
}