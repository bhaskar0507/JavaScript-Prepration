// Selecting all the required elements.

var input = document.querySelector(".todo_input");

var main_todo_container = document.getElementById("todos");

var addingButton = document.querySelector(".add-item");

var deleteAllButton = document.querySelector(".deleteBtn");

addingButton.addEventListener("click", function(e){
    //Creating all the elements--

  if(input.value.trim()){
      //ul tag
      var ulTag = document.createElement("ul");
      ulTag.classList.add("todo_list_container");
  } 
//todolist div (where we gonna append our new items or we can say our tasks)

var todoList = document.createElement("div");
todoList.classList.add("todo_list");

//Li tag (where our input value gonna saved that is why we have to use innerHTML there);

var liTag = document.createElement("li");
liTag.innerHTML = input.value;
liTag.classList.add("todo_item");

//we need three buttons along with our tasks for editing and deleting and for mark completion.

var buttonDiv = document.createElement("div");
buttonDiv.classList.add("button");
  
//completion button.

var completeButton = document.createElement("button");
completeButton.classList.add("completed");
completeButton.innerHTML ='<i class="fas fa-check-square"></i>'
  
//Edit Button

var editButton = document.createElement("button");
editButton.classList.add("editBtn");
editButton.innerHTML ='<i class="fas fa-trash"></i>';

//Trash BUtton

var trashButton = document.createElement("button");
trashButton.classList.add("trash");
trashButton.innerHTML ='<i class="fas fa-trash"></i>';

//Appending elements into each others----------------

ulTag.appendChild(todoList);
todoList.appendChild(liTag);
todoList.appendChild(buttonDiv);
buttonDiv.appendChild(completeButton);
buttonDiv.appendChild(editButton);
buttonDiv.appendChild(trashButton);

//Appending all the elements on the DOM main DIV --------------------------------

main_todo_container.appendChild(ulTag);

// When the input button clicked, clear the input box-----
 input.value = ""; 

})

deleteAllButton.addEventListener("click", function(){
    console.log("buttonDEleteClicked");
})