document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener('submit', function(event) {
    event.preventDefault();

    let taskName = document.getElementById('new-task-description').value;
    const ul = document.getElementById('tasks');
    const li = document.createElement('li');
    li.innerHTML = taskName;
    ul.appendChild(li);
    console.log(taskName);

  })

});
