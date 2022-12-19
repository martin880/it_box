const fs = require('fs');

class Todo{
    constructor(id, task, status){
        this.id = id;
        this.task = task;
        this.status = status || false;
    }
    static getTodos(){    
            let data = fs.readFileSync('./data.json','utf8');
            let parseData = JSON.parse(data);
            let todos = parseData.map(element => {
                const{id, task, status} = element;
                return new Todo(id, task, status);
            })
            return todos;
    }

    static show(){
        let todos = this.getTodos();
        return todos;
    }

    static add(todo){
        let todos = this.getTodos();
        let id = todos[todos.length-1].id + 1;
        let task = todo[0];
        let temp = new Todo(id, task);
        todos.push(temp)
        this.save(todos);
    }

    static delete(todo){
        let todos = this.getTodos();
        let id = Number(todo[0]);
        todos = todos.filter(todo => todo.id !== id);
        this.save(todos);
    }

    static update(todo){
        let todos = this.getTodos();
        let id = Number(todo[0]);
        let task = todo[1];
        todos = todos.map(todo => {
            if(todo.id === id){
                todo.task = task;
            }
            return todo;
        })
        this.save(todos);
    }

    static save(data){
        fs.writeFileSync('./data.json',JSON.stringify(data, null, 3))
    }

}

module.exports = Todo;