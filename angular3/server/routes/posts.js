const express = require("express");
const router = express.Router();
const request = require('request');

const postAPI = 'https://jsonplaceholder.typicode.com/posts';


router.get('/', (req,res)=>{
	//res.send("POST WORKS");
		request(postAPI, function(error, response, body){
			if (error){
				console.log("there is some error");
				console.log(error);
			}
			else if (response.statusCode == 200){
				//console.log(body);	
				var json = JSON.parse(body);
				res.send(json);
			}	
		});

});


module.exports = router;