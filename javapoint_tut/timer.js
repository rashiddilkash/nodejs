// setInterval(function () {
// 	console.log("setInterval: Hey! 1 millisecond completed!..");
// },1000);

// setTimeout(function () {
// 	console.log("setTimeout: Hey 1000 millisecond completed!..");
// },1000);

// var recursive = function(){
// 	console.log("Hey! 1000 millisecond completed!..");
// 	setTimeout(recursive,1000);
// }
// recursive();

function welcome() {
	console.log("welcome to nodejs");
}

var id1 = setTimeout(welcome,1000);
var id2 = setInterval(welcome,1000);

//clearTimeout(id1);
clearInterval(id2);