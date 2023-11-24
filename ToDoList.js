const ToDo = require('./ToDo');

class ToDoList {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description) {
    const newTask = ToDo(title, description);
    this.tasks.push(newTask);
    return newTask;
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  listTasks() {
    return this.tasks.map(
      (task) => `Task: ${task.isComplete} / Completed: ${task.isTitle}`
    );
  }
}

module.exports = ToDoList;
