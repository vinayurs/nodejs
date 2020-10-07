var express = require('express');
var router = express.Router();
var {con, exceptionHandler} =require('./baseUtil');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// http://localhost:3000/getroutes/emp

router.get('/emp',function(req,res,next){

  con.query("SELECT * FROM employees.employees limit 10",function(err,result){
    
    console.log(err);
    console.log(result);

    if(err){
      res.send(err)
    }
    else{
      res.send(result)
    }

  });

});



// http://localhost:3000/getroutes/getEmployeeByName/b

router.get('/getEmployeeByName/:id',function(req,res,next){

  console.log(req);

   var input =req.params.id+'%';
  con.query("SELECT * FROM employees WHERE first_name like ? limit 10",[input],function(err,result){

    if(err){
      res.send(err)
    }
    else{
      res.send(result)
    }

  });

});




module.exports = router;
