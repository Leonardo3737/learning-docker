const table = document.getElementById('table')

const newRow = (user) => `
  <tr>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.phone}</td>
    <td>
      <div>
        <form action="editar">
          <input type="hidden" name="id" value="${user.id}">
          <input type="submit" value="Editar">
        </form>
        <button onclick="deleteUser(${user.id})">Excluir</button>
      </div>
    </td>
  </tr>
    `

document.addEventListener('DOMContentLoaded', async () => {
  await loadData();
});

async function loadData() {
  const res = await fetch('http://localhost:5050/users');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const users = await res.json();
  console.log(users);

  const table = document.getElementById('table');
  table.innerHTML = `
  <tr>
      <th>Nome</th>
      <th>Email</th>
      <th>Telefone</th>
      <th>Ações</th>
    </tr>`;
  users.forEach(user => {
    table.innerHTML += newRow(user);
  });
}

async function deleteUser(id) {
  try {
    const res = await fetch(`http://localhost:5050/users/${id}`, {
      method: 'DELETE'
    })
    console.log(res);

    if (res.status >= 400) {
      throw new Error('error')
    }
    loadData()
  }
  catch (err) {
    console.log('error: ', err);
    alert('Ocorreu um erro ao deletar usuario')
  }
}