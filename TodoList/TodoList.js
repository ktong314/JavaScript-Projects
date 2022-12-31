const allTasks = [];
const completeTasks = [];
const incompleteTasks = [];

let currentFilter = 2;

function showDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function addTask(){
    incompleteTasks.push(document.getElementById("task").value);
    document.getElementById("task").value = null;
    showCurrent();
}

function showCurrent(){
    switch(currentFilter){
        case 0:
            showIncomplete();
            break;
        case 1:
            showCompleted();
            break;
        case 2:
            showAll()
            break;
    }
}

function showAll(){
    currentFilter = 2;
    let table = document.getElementById("list");
    table.innerHTML = null;
    document.getElementById("filtered").innerHTML = "All";
    for(let i = 0; i < incompleteTasks.length; i++){
        let row = table.insertRow(-1);
        let taskCell = row.insertCell(0);
        let doneCell = row.insertCell(1);
        let trashCell = row.insertCell(2);
        taskCell.innerHTML = incompleteTasks[i];
        doneCell.innerHTML = "<button id = 'doneCheck' onclick = 'done(" + i + ")'>✅</button>";
        trashCell.innerHTML = "<button id = 'deleteCheck' onclick = 'deletei(" + i + ")'>❌</button>";
    }
    for(let i = 0; i < completeTasks.length; i++){
        let row = table.insertRow(-1);
        let taskCell = row.insertCell(0);
        let doneCell = row.insertCell(1);
        let trashCell = row.insertCell(2);
        taskCell.innerHTML = completeTasks[i];
        trashCell.innerHTML = "<button id = 'deleteCheck' onclick = 'deleter(" + i + ")'>❌</button>";
    }
}

function showCompleted(){
    currentFilter = 1;
    let table = document.getElementById("list");
    table.innerHTML = null;
    document.getElementById("filtered").innerHTML = "Complete";
    for(let i = 0; i < completeTasks.length; i++){
        let row = table.insertRow(-1);
        let taskCell = row.insertCell(0);
        let doneCell = row.insertCell(1);
        let trashCell = row.insertCell(2);
        taskCell.innerHTML = completeTasks[i];
        trashCell.innerHTML = "<button id = 'deleteCheck' onclick = 'deleter(" + i + ")'>❌</button>";
    }
}
function done(index){
    let x = incompleteTasks.splice(index, 1);
    completeTasks.push(x);
    showCurrent();
}
function deleter(index){
    completeTasks.splice(index, 1);
    showCurrent();
}
function deletei(index){
    incompleteTasks.splice(index, 1);
    showCurrent();
}

function showIncomplete(){
    currentFilter = 0;
    let table = document.getElementById("list");
    table.innerHTML = null;
    document.getElementById("filtered").innerHTML = "Incomplete";
    for(let i = 0; i < incompleteTasks.length; i++){
        let row = table.insertRow(-1);
        let taskCell = row.insertCell(0);
        let doneCell = row.insertCell(1);
        let trashCell = row.insertCell(2);
        taskCell.innerHTML = incompleteTasks[i];
        doneCell.innerHTML = "<button id = 'doneCheck' onclick = 'done(" + i + ")'>✅</button>";
        trashCell.innerHTML = "<button id = 'deleteCheck' onclick = 'deletei(" + i + ")'>❌</button>";
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}