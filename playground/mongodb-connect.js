const MongoClient = require('mongodb').MongoClient;

/*MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
	const db = client.db('ToDoApp');
	if(err){
		return console.log('Unable to conect to MongoDB server');
	}

	db.collection('ToDos').insertOne({
		text: 'Something to do',
		completed: 'false'
	}, (err, result) => {
		if(err) {
			return console.log('Unable to insert the collection');
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
	});
	client.close();
});*/

MongoClient.connect('mongodb://localhost:27017/Users', (err, client) => {
	const db = client.db('Users');
	if(err){
		return console.log('Unable to conect to MongoDB server');
	}

	db.collection('User').insertOne({
		name : 'Anshika Singh',
		age : 25,
		location : 'Dallas'
	}, (err, result) => {
		if(err) {
			return console.log('Unable to insert the collection');
		}

		console.log(result.ops[0]._id.getTimestamp());
	});
	client.close();
});