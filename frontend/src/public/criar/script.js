const form = document.getElementById('form')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const formData = new FormData(e.target);
  const formObject = {};

  try {
    formData.forEach((value, key) => {
      if (!value) throw new Error(`Campo ${key} esta vazio`)
      formObject[key] = value;
    });
  }
  catch (err) {
    alert(err)
    return
  }

  console.log(formObject);

  try {
    const res = await fetch('http://localhost:5050/users', {
      method: 'POST',
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