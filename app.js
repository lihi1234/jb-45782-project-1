//localStorage.removeItem("products");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let index = 0;

window.onload = function () {

    renderList();

};


function renderList() {
    //let products = JSON.parse(localStorage.getItem("products")) || [];
    document.getElementById("tasks-list").innerHTML = "";
    tasks.forEach((item, index) => {
        const newTask = CreateNewTask(item, index);
        document.getElementById("tasks-list").innerHTML += newTask;
        index++;
    });


}



function addTask(event) {
    event.preventDefault();
    const myData = getData();
    const newTask = CreateNewTask(myData, index);
    // fadeIn(newTask);

    addToList(newTask, true);

    index++;
    console.log(tasks);
    // form.reset();
    saveToLocalStorage(myData);
    clearForm();



}

function saveToLocalStorage(myData) {
    tasks.push(myData);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function getData() {

    const describe = document.getElementById("task-describe").value
    const date = document.getElementById("task-date").value
    const time = document.getElementById("task-time").value

    return {
        describe,
        date,
        time,
    };
}

function CreateNewTask(myData, index) {
    const { describe, date, time } = myData;

    const newTask = `<div id="${index}" class="task ">
    
    <div class="delete-btn-div">
  <button class="delete-btn" onclick="deleteTask(${index})">  
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
</svg></button></div>
                    ${describe}
                    <br>
                    ${date}
                    <br>
                    ${time}
            </div>`

    return newTask;
}

function addToList(newTask, isAnimation) {
         const taskContainer = document.createElement("task-container");

    if (isAnimation) {
   
        taskContainer.classList.add("fade-in");
    }
    taskContainer.innerHTML+=newTask;
    document.getElementById("tasks-list").appendChild(taskContainer);


}

function clearForm() {
    document.getElementById("task-form").reset();
}

function deleteTask(index) {

    // let animals = JSON.parse(localStorage.getItem("animals") || "[]");
    tasks.splice(index, 1); // Remove item at index
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save new list
    renderList(); // Refresh table
}










