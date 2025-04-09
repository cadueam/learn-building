const btnsubmitTask = document.getElementById("btn-submittask");
const inputTask = document.getElementById("input-task");
const taskField = document.getElementById("all-tasks-submited");

btnsubmitTask.addEventListener("click", () => {
  let taskvalue = inputTask.value;
  let taskHTML = ` <div class="task" id="task">
          <p id="task-id">
            #001<span
              ><button type="submit" class="btn-delete">Delete</button></span
            >
          </p>
          <p id="task-title">${taskvalue}</p>
        </div>
`;
  alert("wow");
  taskField.innerHTML += taskHTML;
});

console.log(btnsubmitTask, inputTask);
