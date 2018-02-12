var express = require('express');
var router = express.Router();
var session = require('express-session');

const users = [{username: "user1",
                  userID: 1,
                  password: "pass1"},   
                {username: "user2",
                  userID: 2,
                  password: "pass2"},
                  {username: "user3",
                  userID: 3,
                  password: "pass3"},   
                {username: "user4",
                  userID: 1,
                  password: "pass4"}];

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');
  console.log(req.body);

  // And insert something like this instead:
  res.json({
  	users});
});

router.post('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');
  console.log(req.body);
  console.log(users);
  console.log(users[0].username === req.body.username);
  //console.log("user.a=" + req.session.user);
  req.session.user = users[0].username;
  console.log("user.b=" + req.session.user);

  for(let i = 0; i < users.length; i++) {
    if(users[i].username === req.body.username && users[i].password === req.body.password) {
      res.json(users[i]);
      break;
    }
    else if(i === users.length -1) {
      console.log("last user")
      res.json({username: "",
      userID: 0,
      password: ""});
    }
    else {
      console.log("user er ekki til")
    }
  }
  
  


  // And insert something like this instead:
  /*res.json(users
  );*/
});

module.exports = router;