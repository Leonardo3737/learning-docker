import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { dbConnectionTest } from './db/db.js';
import { SyncModels } from './utils/SyncModels.js';
import { User } from './models/User.js';
import { UserService } from './services/userService.js';
import { UserController } from './controllers/UserController.js';

const app = express()

app.use(express.json())
app.use(cors())

async function testDb() {
  try {
    await dbConnectionTest()
    SyncModels([User])
  }
  catch (err) {
    console.log("erro ao conectar banco de dados: ", err);
  }
}

testDb()

const userService = new UserService(User)
new UserController(app, userService)

app.listen(5050, () => {
  console.log('rodando na porta 5050');
})