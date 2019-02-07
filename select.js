const mysql=require('mysql2')
const connection=mysql.createConnection({
    host : 'localhost',
    user: 'myuser',
    password:'mypass',
    database:'mydb'
})
connection.query(`select * from person`,(err,result,fields)=>{
        if(err){
            console.error(err)
        }else{
            //result are rows and col are fields 
            console.log('data inserted successfully')
            console.log(fields)
            console.log(result)
        }
        connection.close()
    })