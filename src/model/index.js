export class Task {
  constructor(id, title, sectionId, memo, doneFlag, starFlag) {
    this.id = id;
    this.title = title;
    this.sectionId = sectionId;
    this.memo = memo;
    this.doneFlag = doneFlag;
    this.starFlag = starFlag;
  }
}

export class Section {
  constructor(id, sectionName, taskArray) {
    this.id = id;
    this.sectionName = sectionName;
    this.taskArray = taskArray;
  }
}

export class SectionArray {
  static createNewSection(sectionArray) {
    let largestId = -1;
    for (let i = 0; i < sectionArray.length; i++) {
      if (sectionArray[i].id > largestId) largestId = sectionArray[i].id;
    }

    sectionArray.push(
      new Section(
        largestId + 1,
        "",
        TaskArray.createNewTaskArray(largestId + 1)
      )
    );

    return sectionArray;
  }

  static deleteSection(sectionArray, id) {
    sectionArray.splice(id, 1);
    sectionArray = Utility.updateIds(sectionArray);

    return sectionArray;
  }
}

export class TaskArray {
  static createNewTaskArray(sectionId) {
    let newTaskArray = [];
    newTaskArray.push(new Task(0, "", sectionId, "", false, false));

    return newTaskArray;
  }

  static createNewTask(taskArray, sectionId) {
    let largestId = 0;
    for (let i = 0; i < taskArray.length; i++) {
      if (taskArray[i].id > largestId) largestId = taskArray[i].id;
    }

    taskArray.push(new Task(largestId + 1, "", sectionId, "", false, false));

    return taskArray;
  }

  static deleteTask(taskArray, id) {
    taskArray.splice(id, 1);
    taskArray = Utility.updateIds(taskArray);

    return taskArray;
  }

  static updateSectionIds(taskArray, sectionId) {
    for (let i = 0; i < taskArray.length; i++) {
      taskArray[i].sectionId = sectionId;
    }

    return taskArray;
  }

  static toggleDoneFlag(taskArray, id) {
    for (let i = 0; i < taskArray.length; i++) {
      if (taskArray[i].id === id) {
        taskArray[i].doneFlag = taskArray[i].doneFlag ? false : true;
        break;
      }
    }

    return taskArray;
  }

  static toggleStarFlag(taskArray, id) {
    for (let i = 0; i < taskArray.length; i++) {
      if (taskArray[i].id === id) {
        taskArray[i].starFlag = taskArray[i].starFlag ? false : true;
        break;
      }
    }

    return taskArray;
  }

  static inputTitle(taskArray, id, title) {
    for (let i = 0; i < taskArray.length; i++) {
      if (taskArray[i].id === id) {
        taskArray[i].title = title;
        break;
      }
    }

    return taskArray;
  }

  static inputMemo(taskArray, id, memo) {
    for (let i = 0; i < taskArray.length; i++) {
      if (taskArray[i].id === id) {
        taskArray[i].memo = memo;
        break;
      }
    }

    return taskArray;
  }
}

export class Utility {
  static updateIds(array) {
    for (let i = 0; i < array.length; i++) {
      array[i].id = i;
    }

    return array;
  }
}
