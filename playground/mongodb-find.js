//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
	const db = client.db('ToDoApp');
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}

	/*db.collection('ToDos').find().toArray().then((docs)=> {
		console.log('ToDos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err)=>{
		console.log('Unablr to fetch data from the DB');
	});*/

	/*db.collection('ToDos').find({_id : new ObjectId('5aab5c5e54f49e4f391b84fd')}).toArray().then((docs)=> {
		console.log('ToDos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err)=>{
		console.log('Unablr to fetch data from the DB');
	})*/

	db.collection('ToDos').find({completed : false}).count().then((count)=> {
		console.log('ToDos count');
		console.log(count);
	}, (err)=>{
		console.log('Unablr to fetch data from the DB');
	})

});