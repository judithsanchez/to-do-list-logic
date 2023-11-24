// ToDo.js
// class ToDo {
//   constructor(title, description) {
//     this.title = title;
//     this.description = description;
//     this.isComplete = false;
//   }

//   markAsComplete() {
//     this.isComplete = true;
//   }

//   markAsIncomplete() {
//     this.isComplete = false;
//   }
// }

// module.exports = ToDo;

// ToDoList.js
// const ToDo = require('./ToDo');

// class ToDoList {
//   constructor() {
//     this.tasks = [];
//   }

//   addTask(title, description) {
//     const newTask = new ToDo(title, description);
//     this.tasks.push(newTask);
//     return newTask;
//   }

//   removeTask(task) {
//     const index = this.tasks.indexOf(task);
//     if (index !== -1) {
//       this.tasks.splice(index, 1);
//     }
//   }

//   listTasks() {
//     return this.tasks.map(
//       (task) => `Task: ${task.title} / Completed: ${task.isComplete}`
//     );
//   }
// }

// module.exports = ToDoList;

// index.js

// const ToDoList = require('./ToDoList');

// const myToDoList = new ToDoList();

// myToDoList.addTask('Learn JavaScript', 'Build a ToDo List');
// myToDoList.addTask('Exercise', 'Go for a jog');

// myToDoList.tasks[0].markAsComplete();
// myToDoList.tasks[2].markAsComplete();

// console.log(myToDoList.listTasks());

// index.test.js

// const ToDoList = require('./ToDoList');
// const ToDo = require('./ToDo');

// test('should add and list tasks with completed status', () => {
//   const myToDoList = new ToDoList();

//   const task1 = myToDoList.addTask('Learn JavaScript');
//   const task2 = myToDoList.addTask('Build a ToDo List');

//   task1.markAsComplete();

//   const result = myToDoList.listTasks();

//   expect(result).toEqual([
//     'Task: Learn JavaScript / Completed: true',
//     'Task: Build a ToDo List / Completed: false',
//   ]);
// });

// test('should remove task', () => {
//   const myToDoList = new ToDoList();
//   const task = myToDoList.addTask('Learn JavaScript');
//   myToDoList.removeTask(task);

//   expect(myToDoList.tasks).toEqual([]);
// });

// test('should mark task as complete', () => {
//   const task = new ToDo('Learn JavaScript', 'Build a ToDo List');
//   task.markAsComplete();

//   expect(task.isComplete).toBe(true);
// });

// test('should mark task as incomplete', () => {
//   const task = new ToDo('Learn JavaScript', 'Build a ToDo List');
//   task.markAsIncomplete();

//   expect(task.isComplete).toBe(false);
// });
