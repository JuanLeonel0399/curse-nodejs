let modal = document.getElementById('modal');
let formModal = document.getElementById('form-modal');
let clientes = JSON.parse(localStorage.getItem('users')) || [];

function editUser() {
  let name = document.getElementById('name-modal').value;
  let email = document.getElementById('email-modal').value;
  let userId = formModal.getAttribute('data-id');

  // Encontrar el índice del usuario que se va a editar
  let userIndex = clientes.findIndex(user => user.id == userId);

  // Si se encuentra el usuario, actualizar sus datos
  if (userIndex !== -1) {
    clientes[userIndex].name = name;
    clientes[userIndex].email = email;
  }

  localStorage.setItem('users', JSON.stringify(clientes));
  modal.style.display = 'none'; // Cierra el modal después de editar
}

// Evento para abrir el modal con los datos del usuario a editar
function openEditModal(userId) {
  let user = clientes.find(user => user.id == userId);
  if (user) {
    document.getElementById('name-modal').value = user.name;
    document.getElementById('email-modal').value = user.email;
    formModal.setAttribute('data-id', userId);
    modal.style.display = 'block';
  }
}

// Evento para el envío del formulario de edición
formModal.addEventListener('submit', function (e) {
  e.preventDefault();
  editUser();
});
