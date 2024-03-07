import 'dotenv/config'
import mysql from "mysql2/promise"

export const connection = await mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')
