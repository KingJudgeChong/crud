// Define an empty array to hold tasks
let data = [];
    
// Get references to DOM elements
const add = document.getElementById("add");
const added = document.getElementById("added");

// Function to render tasks on the screen
function options() {
  added.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const created = data[i];

    // Create DOM elements for the task
    const li = document.createElement("li");
    const view = document.createElement("span");
    view.innerText = created;
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = () => {
      editButton(i);
    };
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => {
      deleteButton(i);
    };

    // Add the task elements to the list item
    li.appendChild(view);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Add the list item to the task list
    added.appendChild(li);
  }
}

// Function to add a new task
function addButton() {
  const created = add.value;
  if (created) {
    data.push(created);
    add.value = "";
    options();
  }
}

// Function to edit an existing task
function editButton(index) {
  const newInput = prompt("Enter new input");
  if (newInput) {
    data[index] = newInput;
    options();
  }
}

// Function to delete a task
function deleteButton(index) {
  data.splice(index, 1);
  options();
}

// Render initial tasks
options();