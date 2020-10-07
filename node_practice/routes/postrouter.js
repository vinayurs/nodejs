var express = require('express');
const { con } = require('./baseUtil');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



// http://localhost:3000/postroutes/getEmployeeByDept

// {
//   "dept":"Development"
// }

router.post("/getEmployeeByDept",function(req,res,next){

var sql = `SELECT e.emp_no,CONCAT(first_name,' ',last_name) AS name, birth_date,hire_date 
FROM dept_emp de
INNER JOIN employees e
ON  de.emp_no = e.emp_no
INNER JOIN departments d
ON de.emp_no = e.emp_no
WHERE dept_name=?  LIMIT 10`

var deptName=req.body.dept;

console.log(deptName)
console.log(req.body)
console.log(sql)
  con.query(sql,[deptName],function(err,result){

    if(err){
      res.send(err)
    }
    else{
      res.send(result)
    }

  });


});

module.exports = router;
