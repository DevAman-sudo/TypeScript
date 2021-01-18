interface Todo{
    title: string;
    text: string;
}

function showTodo(todo: Todo) {
    console.log(`${todo.title} , ${todo.text}`)
}

let myTodo = {title: 'code' , text: 'wake and code at 6AM sharp'};

showTodo(myTodo);