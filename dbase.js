const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'online_vidya',
  password: 'dpkcdtth',
  port: 5432,
})
client.connect();
client.query("select * from students",(err,result)=>{
    if(!err){
        console.log(result.rows);
    }
    client.end();
    }
)
