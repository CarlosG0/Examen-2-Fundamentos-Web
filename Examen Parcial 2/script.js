function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskContainer = document.getElementById('taskContainer');
    const prioritySelect = document.getElementById('prioritySelect');
  
    if (taskInput.value.trim()) {
      const card = document.createElement('div');
      card.classList.add('card', prioritySelect.value); // Añade la clase base y la clase de prioridad
  
      const taskText = document.createElement('p');
      taskText.textContent = taskInput.value;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Eliminar';
      deleteBtn.onclick = function () {
        if (card.classList.contains('alta')) {
          const confirmDelete = confirm('¿Seguro que deseas eliminar esta tarea de alta prioridad?');
          if (!confirmDelete) return;
        }
        taskContainer.removeChild(card);
      };
  
      card.appendChild(taskText);
      card.appendChild(deleteBtn);
      taskContainer.appendChild(card);
  
      taskInput.value = ''; // Limpia el campo de entrada
    }
  }
  