let tasks = [];

function displaytask() {
    let html = "";
    for (let i = 0; i < tasks.length; i++) {
        html += "<li><input type='checkbox' onclick='togglecheck(" + i + ")' " 
              + (tasks[i].done ? "checked" : "") + "> " + tasks[i].text + "</li>";
    }
    document.getElementById("list").innerHTML = html;
}

function togglecheck(i) {
    tasks[i].done = !tasks[i].done;
    savetask();
}

function addtask() {
    let taskIn = document.getElementById("task");
    let text = taskIn.value;

    if (text === "") {
        alert("you can't add an empty task");
        return;
    }

    tasks.push({ text: text, done: false });
    taskIn.value = "";
    savetask();
    displaytask();
}

function cleartask() {
    tasks = [];
    savetask();
    displaytask();
}

function savetask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadtask() {
    let savedtask = localStorage.getItem("tasks");
    if (savedtask !== null) {
        tasks = JSON.parse(savedtask);
    }
}

loadtask();
displaytask();