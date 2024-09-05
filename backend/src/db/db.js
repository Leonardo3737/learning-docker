import { Sequelize } from "sequelize";

const db = new Sequelize({
  host: process.env.DB_HOST,
  dialect: process.env.DB,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})

export default db;

 export async function dbConnectionTest() {
  try {
    await db.authenticate();
    await db.sync()
    console.log('Conectado ao banco de dados!');
  } catch (error) {
    console.error('Error ao conectar com banco de dados:', error);
  }
}