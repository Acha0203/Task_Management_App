export class Task {
  constructor(id, title, sectionId, memo, doneFlag, starFlag) {
    this.id = id;
    this.title = title;
    this.sectionId = sectionId;
    this.memo = memo;
    this.doneFlag = doneFlag;
    this.starFlag = starFlag;
  }

  // getSectionName(sectionList) {
  //   for (let i = 0; i < sectionList.length; i++) {
  //     if (sectionList[i].id === this.id) {
  //       return sectionList[i].sectionName;
  //     }
  //   }
  // }
}

export class Section {
  constructor(id, sectionName, taskList) {
    this.id = id;
    this.sectionName = sectionName;
    this.taskList = taskList;
  }
}

export class SectionList {
  static head = new Section(0, "dammy", null);

  static createSection() {
    let newSectionId = this.getLastSection().id + 1;

    this.getLastSection().next = new Section(
      newSectionId,
      "",
      new TaskList(newSectionId)
    );
  }

  static getLastSection() {
    let iterator = this.head;

    while (iterator.next !== undefined) {
      iterator = iterator.next;
    }

    return iterator;
  }

  static createSectionArray() {
    let sectionArray = [];
    let iterator = this.head.next;

    while (iterator !== undefined) {
      sectionArray.push(iterator);
      iterator = iterator.next;
    }

    return sectionArray;
  }
}

export class TaskList {
  constructor(sectionId) {
    this.head = new Task(0, "dammy", sectionId, "", false, false);
  }

  createNewTask(sectionId) {
    this.getLastTask().next = new Task(
      this.getLastTask().id + 1,
      "",
      sectionId,
      "",
      false,
      false
    );

    return this.getLastTask();
  }

  getLastTask() {
    let iterator = this.head;

    while (iterator.next !== undefined) {
      iterator = iterator.next;
    }

    return iterator;
  }

  deleteTask(id) {
    let iterator = this.head;
    let preTask = null;

    while (iterator.id !== id) {
      preTask = iterator;
      iterator = iterator.next;
    }

    preTask.next = iterator.next;
    return this.head;
  }

  createTaskArray() {
    let taskArray = [];
    let iterator = this.head.next;

    while (iterator !== undefined) {
      taskArray.push(iterator);
      iterator = iterator.next;
    }

    return taskArray;
  }

  toggleDoneFlag(id) {
    let iterator = this.head;

    while (iterator.id !== id) {
      iterator = iterator.next;
    }

    iterator.doneFlag = iterator.doneFlag ? false : true;
  }

  toggleStarFlag(id) {
    let iterator = this.head;

    while (iterator.id !== id) {
      iterator = iterator.next;
    }

    iterator.starFlag = iterator.starFlag ? false : true;
  }
}
