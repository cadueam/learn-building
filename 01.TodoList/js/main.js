const btnsubmitTask = document.getElementById("btn-submittask"); // botão enviar a task
const inputTask = document.getElementById("input-task"); // campo de seleção da tarefa
const taskField = document.getElementById("all-tasks");
const allDelButtons = document.getElementsByClassName("btn-delete");
const task = document.querySelectorAll("taskfield");

const taskArr = [];

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
          <p id="task-id">${this.id}<span><button type="submit" class="btn-delete" >
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
//STILL NOT FIGURED IT OUT ON HOW TO LOOP THAT BTN DONT WANT TO USE GPT SO IM STOPPING FOR A MINUTE AND GOING TO CLEAN THE HOUSE UHUU
btnsubmitTask.addEventListener("click", () => {
  let taskValue = inputTask.value;

  if (!taskValue) {
    return alert("We need an input");
  } else {
    let newTask = new Tarefas(taskValue, "0", taskArr.length + 1);
    let sendTask = taskArr.push(newTask);
    newTask.returnTask();
    for (let i = 0; i < allDelButtons.length; i++) {
      allDelButtons[i].addEventListener("click", () => {
        console.log(`hello im btn ${i + 1}`);
      });
    }
  }
});

console.log(allDelButtons);
