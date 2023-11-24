const ToDoList = require('./ToDoList');

const myToDoList = new ToDoList();

myToDoList.addTask('Learn JavaScript', 'Build a ToDo List');
myToDoList.addTask('Exercise', 'Go for a jog');

myToDoList.tasks[0].markAsComplete();
myToDoList.tasks[2].markAsComplete();

console.log(myToDoList.listTasks());
