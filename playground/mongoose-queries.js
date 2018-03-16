const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

var id = "5aab87135edfdb483cf6ed8b";

Todo.find({_id : id}).then((docs)=> {
	console.log('Todos', docs);
}, (e)=> {
	console.log(e);
});

Todo.findOne({_id : id}).then((docs)=> {
	console.log('Todo', docs);
}, (e)=> {
	console.log(e);
});

Todo.findById(id).then((docs)=> {
	if(!docs) {
		return console.log('Id not found');
	}
	console.log('Todo by ID', docs);
}). catch((e)=> console.log(e));

