console.log("TeamBoard loaded successfully!");

const title = document.querySelector("h1");

title.addEventListener("click", function () {
    alert("Welcome to TeamBoard!");
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const task = document.createElement("div");
    task.className = "task";

    task.innerHTML = `
        <span>${taskText}</span>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    taskList.appendChild(task);

    taskInput.value = "";
}