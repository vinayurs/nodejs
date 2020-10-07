const mys = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "employees"
  });

  const exceptionHandler=(error,req,res,next)=>{
      res.send(error.toString())
  }

  module.exports(con,exceptionHandler)