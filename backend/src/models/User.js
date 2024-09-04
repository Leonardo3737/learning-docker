import { DataTypes, Model } from "sequelize";
import db from "../db/db.js";

export class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
},
  { sequelize: db }
)