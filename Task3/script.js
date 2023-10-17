function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const pendingTasksList = document.getElementById("pending-tasks");
      const newTask = document.createElement("li");
      newTask.textContent = taskText;
      newTask.addEventListener("click", markAsComplete);
      pendingTasksList.appendChild(newTask);
      taskInput.value = "";
    }
  }
  
  // Function to mark a task as completed and move it to the completed tasks list
  function markAsComplete() {
    const completedTasksList = document.getElementById("completed-tasks");
    completedTasksList.appendChild(this);
    this.removeEventListener("click", markAsComplete);
    this.addEventListener("click", markAsPending);
  }
  
  // Function to mark a completed task as pending and move it back to the pending tasks list
  function markAsPending() {
    const pendingTasksList = document.getElementById("pending-tasks");
    pendingTasksList.appendChild(this);
    this.removeEventListener("click", markAsPending);
    this.addEventListener("click", markAsComplete);
  }
  
  // You can also add functions for editing and deleting tasks here
  // For editing, you can replace the task text with an input field, and for deleting, remove the task from the list.
  
  // Example of deleting a task
  function deleteTask() {
    this.remove();
  }
  