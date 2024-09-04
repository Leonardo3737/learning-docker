import express from 'express'

const app = express()

app.use(express.static('src/public'))

app.listen(3000, ()=> { console.log('Servidor rondando na porta 3000') })