let tasks = [];

function displaytask() {
    let html = "";
    for (let i = 0; i < tasks.length; i++) {
        html += "<li><div class='task-row'>"
              + "<span class='task-text'>" + tasks[i].text + "</span>"
              + "<span class='task-actions'>"
              + "<span onclick='togglecheck(" + i + ")' style='cursor:pointer; color:" + (tasks[i].done ? "green" : "black") + ";'>✓</span>"
              + " <span onclick='deletetask(" + i + ")' style='cursor:pointer; color:red;'>✕</span>"
              + "</span>"
              + "</div></li>";
    }
    document.getElementById("list").innerHTML = html;
}

function togglecheck(i) {
    tasks[i].done = !tasks[i].done;
    savetask();
    displaytask();
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

function deletetask(i) {
    tasks.splice(i, 1);
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