//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
	const db = client.db('ToDoApp');
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}

	//deleteMany

/*	db.collection('ToDos').deleteMany({text : 'eat lunch'}).then((result)=>{
		console.log(result);
	});
*/
	//deleteOne

/*	db.collection('ToDos').deleteOne({text : 'eat lunch'}).then((result)=>{
		console.log(result);
	});*/

	//findOneAndDelete
	db.collection('ToDos').findOneAndDelete({_id : new ObjectId('5aab6e33825b81c1df6df733')}).then((result)=>{
		console.log(result);
	});
});