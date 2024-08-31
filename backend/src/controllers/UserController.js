class UserController {
  constructor (
    app,
    userService
  ) {
    app.get('/users', (req, res) => {
      try {
        res.send(userService.get())
      }
      catch(err) {
        res.status(500).send('Error: ', err.message)
      }
    })
  }
}