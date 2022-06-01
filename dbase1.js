const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'online_vidya',
  password: 'dpkcdtth',
  port: 5432,
})
module.exports=client;
