const mysql=require('mysql2')
const connection=mysql.createConnection({
    host : 'localhost',
    user: 'myuser',
    password:'mypass',
    database:'mydb'
})
connection.query(`
create table if not exists person (
    id integer auto_increment primary key,
    name varchar(40) not null,
    age integer not null,
    city varchar(40)
    )`,(err,result)=>{
        if(err){
            console.error(err)
        }else{
            console.log('table created successfully')
        }
        connection.close()
    })