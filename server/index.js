const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({

	host: 'localhost',
	database:'reactnode',
	user: 'root',
	password: ''

});

// Employees api
app.post('/create',(req,res) => {
	const name = req.body.name
	const age = req.body.age
	const country = req.body.country
	const position = req.body.position
	const wage = req.body.wage
 
	db.query("INSERT INTO employees (name,age,country,position,wage) VALUES (?,?,?,?,?)",
	[name,age,country,position,wage],
	(err,result) => {
		if(err){
			console.log(err);
		}else{
			res.send("Record Successfully Added");
		}
	});
});
app.get('/employees',(req,res)=>{
	db.query("SELECT * FROM employees", (err,result) => {
		if(err){
			console.log(err);
		}else{
			res.send(result);
		}
	});
});
app.put('/update',(req,res) => {

	const id = req.body.id;
	const name = req.body.name;
	const age = req.body.age;
	const country = req.body.country;
	const position = req.body.position;
	const wage = req.body.wage;

	db.query("UPDATE employees SET name=?,age=?,country=?,position=?,wage=? WHERE id=?",
		[name,age,country,position,wage,id],
		(err,result) =>{
			if(err){
				console.log(err);
			}else{
				res.send("Record Successfully Updated");
			}
		});
});

app.delete('/delete/:id',(req,res)=>{
	const id = req.params.id;
	db.query("DELETE FROM employees WHERE id=?",id,
	(err,result)=>{
		if(err){
			console.log(err);
		}else{
			res.send("Record Successfully Deleted");
		}
	});
});
// END Employees api

app.listen(3001,function(){
	console.log("works, server is running. check localhost:3001");
});