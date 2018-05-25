var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const creds = require('../config/creds');
const connection = mysql.createConnection(creds);
connection.connect();

const randToken = require('rand-token');

const bcrypt = require('bcrypt-nodejs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup' ,(req,res)=>{
	// console.log("in express ")
	const password = req.body.password;
	const email = req.body.email;
	const hashedPassword = bcrypt.hashSync(password);

	const token = randToken.uid(60);
	console.log(email,password);
	const insertQuery = `INSERT into users (email,password,token)
	VALUES(?,?,?)`;
	connection.query(insertQuery,[email,hashedPassword,token],
		(error,results)=>{
			if(error){throw error;}
			res.json({
				token:token,
				msg:"SignupSuccessful"
			})
		})
})

router.post('/login',(req,res)=>{
	let found = false;
	const password = req.body.password;
	const email = req.body.email;
	console.log("in login ",email,password);
   const getUser = `SELECT email,password FROM users WHERE email= ?`
   connection.query(getUser,[email],(error,results)=>{
      if(error){throw error;}
      if(results[0].email.length > 0){
      	 console.log("checking getUser",getUser);
      	 console.log(results.length)
      	 // for(let j = 0; j < results.length; j++) {
      	 // 	console.log(results[j].email,results[j].password);
      	 // }
      	 for(let i = 0; i < results.length; i++) {
      	 	if(results[i].email === email && results[i].password === password ) {
      	 		console.log("shw me results ",results[i])
      	 		found = true;
      	 		res.json({
				email: results[i].email,
				password:results[i].password,
				msg:"LoginSuccessful"
			})
      	 		i = 4;
      	 	 }
      	 }	
      	 if(found === false) {
      	 	console.log("error login")
      	 }

      }

   })


})
module.exports = router;
