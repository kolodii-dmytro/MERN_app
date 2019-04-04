const mongoose = require ('./mongose');
const db = mongoose.connection;

db.on('connected', function() {
	console.log('Mongoose connected to ' + mongoUrl);
});

db.on('error', function(err) {
	console.log('Mongoose connection error: ' + err);
});

db.on('disconnected', function() {
	console.log('Mongoose disconnected');
});

process.once('SIGUSR2', function() {
	gracefulShutdown('nodemon restart', function() {
		process.kill(process.pid, 'SIGUSR2');
	});
});

process.on('SIGINT', function() {
	gracefulShutdown('app termination', function() {
		process.exit(0);
	});
});

process.on('SIGTERM', function() {
	gracefulShutdown('app shutdown', function() {
		process.exit(0);
	});
});

const gracefulShutdown = function(msg, callback) {
	mongoose.connection.close(function() {
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};


