//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

/*MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
	const db = client.db('ToDoApp');
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}

	db.collection('ToDos').findOneAndUpdate({
		_id : new ObjectId('5aab5c5e54f49e4f391b84fd')
	}, {
		$set : {
			completed: true
		}
	}, {
		returnOriginal: false
	}).then((result)=>{
		console.log(result);
	});
});*/

MongoClient.connect('mongodb://localhost:27017/Users', (err, client) => {
	const db = client.db('Users');
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}

	db.collection('User').findOneAndUpdate({
		name: 'Anshika Singh'
	}, {
		$set : {
			name: 'Andrew Mead',
		},
		$inc : {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result)=>{
		console.log(result);
	});
});