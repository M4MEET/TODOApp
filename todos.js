let insert = prompt("What would you like to do?")
const todos = ['Collect Chicken eggs' , 'clean table']
while (insert !== 'quit' && insert !== 'q'){
    if (insert === 'list'){
        console.log('*************')
            for (let i = 0; i < todos.length; i++){
                console.log(`${i}: ${todos[i]}`);
            }
        console.log('*************')
    }
    else if (insert === 'new'){
        const newTodo = prompt ('ok, what is the new todo');
        todos.push(newTodo);
        console.log(` ${newTodo} added to the list `)
    }
    else if  (insert === 'delete'){
        const index = parseInt(prompt('enter an index to delete'));
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index, 1);
            console.log(`ok deleted ${deleted[0]} `);
        } else {
            console.log('unknown index')
        }
        
    }
    insert = prompt("What would you like to do?")
}
console.log('OK quit the app!')