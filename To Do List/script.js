const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

const addTask = () => {
    if (inputBox.value === ''){
        alert("Write Something");
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);

        const editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        li.appendChild(editBtn);
        
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }
    inputBox.value = "";
}

taskList.addEventListener("click", function(event){
    if (event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
    else if (event.target.tagName === "BUTTON"){
        const li = event.target.parentElement;
        const newText = prompt("Edit your task:", li.firstChild.textContent);
        if (newText !== "") {
            li.firstChild.textContent = newText;
        }
    }
    else if (event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
    }
});