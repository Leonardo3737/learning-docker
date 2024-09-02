const form = document.getElementById('form')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  const formData = new FormData(e.target);
  const formObject = {id: parseInt(id)};  

  formData.forEach((value, key) => {
    if (!value) return
    formObject[key] = value;
  });

  console.log(formObject);

  try {
    const res = await fetch(`http://localhost:5050/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formObject)
    })
    console.log(res);

    if (res.status >= 400) {
      throw new Error('error')
    }
    window.history.back();
  }
  catch (err) {
    console.log('error: ', err);
    alert('Ocorreu um erro ao criar usuario')
  }
})