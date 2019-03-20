// try{
// 	const a = 1;
// 	const c = a+b;
// } catch(err){
// 	console.log(err);
// }

const fs = require('fs');
function nodeStyleCallback(err,data) {
	if (err) {
		console.error('There was an error', err);
		return;
	}
	console.log(data);
}
//fs.readFile('test.cpp',nodeStyleCallback);
fs.readFile('timer.js',nodeStyleCallback);