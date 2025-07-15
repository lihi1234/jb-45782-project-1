//localStorage.removeItem("products");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let index=0;

window.onload = function () {

    renderTable();
    
};


function renderTable(){
    //let products = JSON.parse(localStorage.getItem("products")) || [];
    document.getElementById("products-table").innerHTML= "";
    products.forEach((item, index) => {
        const tr = CreateNewLi(item, index);
        document.getElementById("products-table").innerHTML += tr;
        index++;
    });


}



function addTask(event) {
    event.preventDefault();
    const myData = getData();
    const newTask = CreateNewTask(myData, index);
    addToList(newTask);
   
    console.log(products);
    // form.reset();
    saveToLocalStorage(myData);  
    clearForm();



}

function saveToLocalStorage(myData){
    products.push(myData);
    localStorage.setItem("products", JSON.stringify(products));
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
    const {}
    const newTR= `<tr id="${index}">
                <td>${myData.name} </td>
                <td>${myData.price} </td>
                <td>${myData.category} </td>
                <td> <img src="${myData.pic}"></td>
                <td ><button onclick="deleteProduct(${index})">delete</button></td>
            </tr>`
            index++;
            return newTR;
}

function addToList(newTR) {

    document.getElementById("products-table").innerHTML += newTR;

}

function clearForm() {
    document.getElementById("myForm").reset();
}

function deleteProduct(index){

    // let animals = JSON.parse(localStorage.getItem("animals") || "[]");
    products.splice(index, 1); // Remove item at index
    localStorage.setItem("products", JSON.stringify(products)); // Save new list
    renderTable(); // Refresh table
}









