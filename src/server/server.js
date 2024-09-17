import express from 'express';
import 'dotenv/config'

import mysql from 'mysql2';

const app = express();
const port = process.env.PORT;
const DB_PASSWORD = process.env.DB_PASSWORD;
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: DB_PASSWORD,
  database: 'finance'
})
connection.connect()

connection.end()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Finance app listening on port ${port}`)
})