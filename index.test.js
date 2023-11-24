const ToDoList = require('./ToDoList');
const ToDo = require('./ToDo');

describe('ToDoList', () => {
  test('should add and list tasks with completed status', () => {
    const myToDoList = new ToDoList();

    const task1 = myToDoList.addTask('Learn JavaScript', 'Build a ToDo List');

    task1.markAsComplete();

    const result = myToDoList.listTasks();

    expect(result).toEqual(['Task: Learn JavaScript / Completed: true']);
  });

  xtest('should remove task', () => {
    const myToDoList = new ToDoList();
    const task = myToDoList.addTask('Learn JavaScript');
    myToDoList.removeTask(task);

    expect(myToDoList.tasks).toEqual([]);
  });

  xtest('should not remove task if not in the list', () => {
    const myToDoList = new ToDoList();
    const task = new ToDo('Learn JavaScript', 'Build a ToDo List');
    myToDoList.removeTask(task);

    expect(myToDoList.tasks).toEqual([]);
  });

  xtest('should list no tasks when the list is empty', () => {
    const myToDoList = new ToDoList();

    const result = myToDoList.listTasks();

    expect(result).toEqual([]);
  });
});

xdescribe('ToDo', () => {
  xtest('should mark task as complete', () => {
    const task = new ToDo('Learn JavaScript', 'Build a ToDo List');
    task.markAsComplete();

    expect(task.isComplete).toBe(true);
  });

  xtest('should mark task as incomplete', () => {
    const task = new ToDo('Learn JavaScript', 'Build a ToDo List');
    task.markAsIncomplete();

    expect(task.isComplete).toBe(false);
  });

  xtest('should create a task with title and description', () => {
    const task = new ToDo('Learn JavaScript', 'Build a ToDo List');

    expect(task.title).toBe('Learn JavaScript');
    expect(task.description).toBe('Build a ToDo List');
    expect(task.isComplete).toBe(false);
  });
});
