// Process Argv : bisa mengambil input dari terminal.
// Command : show, add, delete, update

const command = process.argv[2];
const params = process.argv.slice(3);
const TodoController = require('./controller/TodoController');

switch(command){
    case 'show':
        TodoController.show();
        break;
    case 'add':
        TodoController.add(params);
        break;
    case 'delete':
        TodoController.delete(params);
        break;
    case 'update':
        TodoController.update(params);
        break;
    default:
        TodoController.message("Masukkan command yang benar!!!");
        break;
}