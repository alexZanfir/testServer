var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;


app.get('/', function (req, res) {
	res.send(console.log('test begins'),
console.time('timer');
setTimeout(function(){
   console.timeEnd('timer');
   console.log('first task sent has finished');
},1000)

console.log('second task sent has finished '););
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Server started on port ' + PORT + '!');
});

// test 1



