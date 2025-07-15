//localStorage.removeItem("products");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let index=0;

window.onload = function () {

    renderList();
    
};


function renderList(){
    //let products = JSON.parse(localStorage.getItem("products")) || [];
    document.getElementById("tasks-list").innerHTML= "";
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
    //fadeIn(newTask);
    addToList(newTask);
   
   index++;
    console.log(tasks);
    // form.reset();
    saveToLocalStorage(myData);  
    clearForm();



}

function saveToLocalStorage(myData){
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
    const newTask= `<div id="${index}" class="task ">
    <br><br>
                    ${describe}
                    <br>
                    ${date}
                    <br>
                    ${time}
            </div>`
            return newTask;
}

function addToList(newTask) {

    document.getElementById("tasks-list").innerHTML += newTask;

}

function clearForm() {
    document.getElementById("task-form").reset();
}

function deleteTask(index){

    // let animals = JSON.parse(localStorage.getItem("animals") || "[]");
    tasks.splice(index, 1); // Remove item at index
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save new list
    renderList(); // Refresh table
}

 function fadeIn(index) {
    //tasks[index].classList.add("fade-in");
    index.classList.add("fade-in");
  }









