const client=require('./dbase1');
client.connect();
client.query("INSERT INTO students VALUES(6,'judy',8033,'judy@gmail.com','ISE')",(err,result)=>{
    if(!err){
        console.log("Data inserted successfully");
    }
    client.end();
})