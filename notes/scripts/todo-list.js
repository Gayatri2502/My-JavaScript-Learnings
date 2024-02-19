const todoList=[
   {
    taskName: "wash clothes",
    taskDate: "2024-1-25",
   },
   {
    name: 'make dinner',
    dueDate: '2022-12-22'
  }, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
  }
];

function addTodo() {

    const nameInputElement = document.querySelector(".js-input-field");
    todoName = nameInputElement.value;

    const dateInputElement = document.querySelector(".js-date-field");
    todoDate = dateInputElement.value;

    todoList.push({taskName : todoName , taskDate : todoDate});
    nameInputElement.value="";  //clear the field after adding a task to the list
    dateInputElement.value="";
    displayTodo();

}

function displayTodo() {
    let displayNames = '';

    for (let i = 0; i < todoList.length; i++) { 
        const taskName = todoList[i].taskName;
        const taskDate = todoList[i].taskDate;
        
        const html = `
        <div>${taskName}</div>
        <div>${taskDate}</div>   
        <button onclick="deleteTodo(${i})" 
        class="delete-todo-button">
        Delete</button>`;
        
        displayNames += html; 
    }

    console.log(displayNames);
    document.querySelector(".js-todo-list").innerHTML = displayNames;
}



function deleteTodo(index) {
    todoList.splice(index, 1);
    displayTodo();
}
