const lists = {
    1: {
        name: "Shopping list",
        todos: [
            {
                text: 'bananas', 
                completed: false
            },
            {
                text: '1 lbs ground turkey',
                completed: false
            },
            {
                text: 'chicken thighs',
                completed: false
            }
        ]
    },
    2: {
        name: "Honey do list",
        todos: [
            {
                text: 'help clean',
                completed: false
            },
            {
                text: 'take out trash',
                completed: false
            }
        ]
    },
    3: {
        name: "Workout steps",
        todos: [
            {
                text: 'stretch',
                completed: false
            },
            {
                text: 'jog',
                completed: false
            },
            {
                text: 'weight lifting',
                completed: false
            }
        ]
    }//took out the comma. May need later in the future.
}
const currentList = lists[0];



function render(){
    //Will hold the html from the sidebar
    let listsHTML = '<ul class = "list-group">';
    //Iterate through the lists to get the names
    lists.forEach((list)=> {
        listsHTML += `<li class = "list-group-item">${list.name}</li>`;
    });

    listsHTML += '</ul>';
    //prints out lists

    document.getElementById('lists').innerHTML = listsHTML;
    //prints out the name of the current list

    document.getElementById('current-list-name').innerText = currentList.name;
    //iterate over the todos in the current list

    let todosHtml = '<ul class = "list-group-flush">';
    currentList.todos.forEach((list) => {
        todosHtml += `<li class = "list-group-item">${todo.text}</li>`;
    });
    //print out the todos
    document.getElementById('current-list-todos').innerHTML = todosHtml;
}

render();
