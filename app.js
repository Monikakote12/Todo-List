let btn = document.querySelector(".btn");
let newBtn = document.querySelector(".new-btn");
let result = document.querySelector(".result");
let input = document.querySelector(".task");
let taskList = document.querySelector("#task-list");

btn.addEventListener("click", () => {
   
   let task = input.value;

   if(!input.value){
    result.innerText = "your are not enter the task, please enter your task.";
    return;
   } else if(input === "") {
     return;
   }
    const li = document.createElement("li");
    li.innerText = task;
    li.style.fontSize = "25px";
   

    taskList.appendChild(li);
    input.value = ""; 

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.style.margin = "8px";
    delBtn.style.borderRadius = "8px";
    delBtn.style.border = "none";
    delBtn.style.backgroundColor = "yellow"; 
    

    delBtn.addEventListener("click", () => {
        li.remove();
    })

    li.appendChild(delBtn);
});

newBtn.addEventListener("click", () => {
    input.value = "";
    taskList.innerHTML = "";
    result.innerText = "";
    
})