const btnsubmitTask = document.getElementById("btn-submittask"); // botão enviar a task
const inputTask = document.getElementById("input-task"); // campo de seleção da tarefa
const taskField = document.getElementById("all-tasks");
const btnDelete = document.getElementById("btn-delete");
const task = document.querySelectorAll("taskfield");

const taskArr = [];

const returnAllTask = function (arr) {
  arr.forEach((task) => {
    let returnHTML = task.returnTask();
    taskField.innerHTML += returnHTML;
    console.log(returnHTML);
  });
};

//TODO: TAREFAS ESTÃO DUPLICANDO, 1 + 1 + 2

class Tarefas {
  constructor(task, data, id) {
    this.tarefa = task;
    this.data = data;
    this.id = id;
  }
  returnTask() {
    let htmlForTask = ` <div class="task" id="task">
          <p id="task-id">${this.id}<span><button type="submit" class="btn-delete" id="btn-delete">
                Delete
              </button></span>
          </p>
          <p id="task-title">${this.tarefa}</p>
        </div>`;
    return htmlForTask;
  }
}

btnsubmitTask.addEventListener("click", () => {
  let taskValue = inputTask.value;
  let newTask = new Tarefas(taskValue);
  let sendTask = taskArr.push(newTask);
  console.log(taskArr);
  returnAllTask(taskArr);
});
