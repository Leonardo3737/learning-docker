export class UserController {
  constructor (
    app,
    userService
  ) {
    app.get('/users', async (req, res) => {
      try {
        const users = await userService.findAll()        
        res.status(200).send(users)
      }
      catch(err) {
        res.status(500).send('Error: '+ err.message)
      } 
    })

    app.get('/users/:id', async (req, res) => {
      try {
        const id = parseInt(req.params.id)
        res.status(200).send(await userService.findById(id))
      }
      catch(err) {
        res.status(500).send('Error: ' + err.message)
      }
    })

    app.post('/users', async (req, res) => {
      try {
        const user = req.body
        await userService.create(user)
        res.status(201).send("criado com sucesso")
      }
      catch(err) {
        res.status(500).send('Error: ' + err.message)
      }
    })

    app.put('/users/:id', async (req, res) => {
      try {
        const id = parseInt(req.params.id)
        const user = req.body
        if(user.id !== id) {
          console.log(user.id, "  ", id);
          
          res.status(400).send('id do objeto não corresponde ao id da url')
          return
        }
        await userService.alter(user)
        res.status(200).send("atualizado com sucesso")
      }
      catch(err) {
        res.status(500).send('Error: ' + err.message)
      }
    })

    app.delete('/users/:id', async (req, res) => {
      try {
        const id = parseInt(req.params.id)
        await userService.remove(id)
        res.status(200).send("deletado com sucesso")
      }
      catch(err) {
        res.status(500).send('Error: ' + err.message)
      }
    })
  }
}