const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');

var id = '5aab944eee1fc24b148359f5';

/*Todo.remove({}).then((docs)=>{
	console.log('All docs removed');
});*/
/*
Todo.findOneAndRemove({_id : id}).then((docs)=>{
	console.log('Todo was removed');
});*/

Todo.findByIdAndRemove(id).then((docs)=>{
	console.log('Todo removed : ', docs);
}, (e)=>{
	console.log(e);
});