var {  Client } = require('pg');
const client = new Client(
{
    host: "49.145.164.211",
    user: "ec2-user",
    port: 22,
    password: "12345678",
    database: "postgres"
});
client.connect();

client.query(`Select * from books`, (err, res) => {
    if(!err){
        console.log(res. rows);
    }else {
        console.log(err.message);
    }
    client.end;
})


var { Pool, Client } = require('pg');
const connectionString = 'postgresql://ec2-user:12345678@49.145.164.211:22/postgres'

const client = new Client({
    connectionString:connectionString
})

client.connect()

client.query('SELECT * from locations', (err, res) => {
    console.log(err,res)
    client.end()
})
