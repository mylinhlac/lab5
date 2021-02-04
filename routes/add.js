var data = require("../data.json");


exports.addFriend = function(request, response) { 
	// Your code goes here
  object = {"name": request.query.name,
  "description": request.query.description,
  "imageURL": "http://loremflickr.com/400/400/people"
}
  data.friends.push(object)
  response.render('index', data);
}
