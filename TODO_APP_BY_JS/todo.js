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
      ulTag.classList.add(todo_list_container);
  } 
//todolist div (where we gonna append our new items or we can say our tasks)

var todoList = document.createElement("div");
todoList.classList.add("")
  


})

deleteAllButton.addEventListener("click", function(){
    console.log("buttonDEleteClicked");
})