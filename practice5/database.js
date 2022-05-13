const { Client } = require('pg');

const client = new Client({
    host: "54.169.213.81",
    port: 22,
    user: "postgres",
    password: "12345678",
    database: "postgres"
})

client.connect();

client.query('select * from locations', (err, result) => {
    if(!err){
        console.log(result.rows);
    }
    client.end();
})