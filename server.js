const express = require("express")
const app = express();
const path = require("path");

const posts = require('./server/routes/posts');

app.use(express.static(path.join(__dirname,'dist')));

app.use('/posts',posts);



// catch all other routes

app.get('*', function (req,res){
	res.sendFile(path.join(__dirname,'dist/angular3/index.html'));
});

app.listen(4600, function (req, res){
	console.log("Server is running!");
});