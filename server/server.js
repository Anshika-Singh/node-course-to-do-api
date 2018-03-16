const {mongoose} = require('./db/mongoose.js');
const {ObjectId} = require('mongodb');
const {Todo} = require('./models/todo.js');
const {User} = require('./models/user.js');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.listen(3000, () => {
	console.log('Started on port 3000')
});

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e)=> {
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e)=> {
		res.status(400).send(e);
	});
});

app.get('/todos/:id', (req, res) => {
	var id = req.params.id;
	if(!ObjectId.isValid(id)){
		return res.status(404).send();
	}

	Todo.findById(id).then((todo)=>{
		if(todo){
			res.send({todo});
		} else {
			res.status(404).send();
		}
	}).catch((e)=>{
		res.status(400).send();
	});
});














