class ToDo {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.isComplete = false;
  }

  markAsComplete() {
    this.isComplete = false;
  }

  markAsIncomplete() {
    this.isComplete = true;
  }
}

module.exports = ToDo;
