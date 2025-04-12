const btnsubmitTask = document.getElementById("btn-submittask"); // botão enviar a task
const inputTask = document.getElementById("input-task"); // campo de seleção da tarefa
const taskField = document.getElementById("all-tasks");
const btnDelete = document.getElementById("btn-delete");
const task = document.querySelectorAll("taskfield");

const taskArr = [];

//TODO: TAREFAS ESTÃO DUPLICANDO, 1 + 1 + 2

class Tarefas {
  constructor(task, data, id) {
    this.tarefa = task;
    this.data = data;
    this.id = id;
  }
  returnTask() {
    let createDiv = document.createElement("div");
    createDiv.className = "task";
    createDiv.Id = "task";

    createDiv.innerHTML = `
          <p id="task-id">${this.id}<span><button type="submit" class="btn-delete" id="btn-delete">
                Delete
              </button></span>
          </p>
          <p id="task-title">${this.tarefa}</p>
        </div>`;
    taskField.appendChild(createDiv);
    return createDiv;
  }
}

//TODO: ADD SCRIPT TO DEL BTN , LOOP ARR SEE WICH DEL WAS PRESSED AND DELETE ITS DIV

btnsubmitTask.addEventListener("click", () => {
  let taskValue = inputTask.value;
  let newTask = new Tarefas(taskValue, "0", taskArr.length + 1);
  let sendTask = taskArr.push(newTask);
  newTask.returnTask();
});
