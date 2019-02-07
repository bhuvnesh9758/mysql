const mysql=require('mysql2')
const connection=mysql.createConnection({
    host : 'localhost',
    user: 'myuser',
    password:'mypass',
    database:'mydb'
})
const insert={
    name:process.argv[2],
    age:parseInt(process.argv[3]),
    city:process.argv[4]
}
connection.query(`
 insert into person (name,age,city)values(
     '${insert.name}',
      ${insert.age},
     '${insert.city}'
 )`,(err,result)=>{
        if(err){
            console.error(err)
        }else{
            console.log('data inserted successfully')
            console.log(result)
        }
        connection.close()
    })