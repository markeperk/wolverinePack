var express = require('express'); 
var bodyParser = require('body-parser'); 
var cors = require('cors'); 

var app = express(); 

//Middleware
app.use(cors()); 
app.use(bodyParser().JSON); 
app.use(express.static(__dirname+"/public"));
app.use(passport.initialize()); 
app.use(session({secret: 'wolverinePack'})); 
app.use(passport.session()); 

//Models
var User = require('./models/User'); 

//Configuration Files 
var configAuth = require('./auth'); 

//Auth -- Local Strategy 
passport.use(new LocalStrategy({
	usernameField: 'email'
}, function(email, password, done) {
	//define how we match user credentials to db values
	User.findOne({ email: email }, function(err, user){
		if (!user) {
			done(new Error("This user does not exist :)"));
		}
		user.verifyPassword(password).then(function(doesMatch) {
			if (doesMatch) {
				done(null, user);
			}
			else {
				done(new Error("Please verify your password and try again :)"));
			}
		});
	});
}));

passport.use(new GoogleStrategy())

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

//Auth Endpoints 
//Sign Up && Add User 
app.post('/api/users', function(req, res) {
	User.findOne({ email: req.body.email }).exec().then(function(user) {
		//if we found a user, it's a duplicate
		if (user) {
			return res.status(400).json({message: "User with this email already exists."});
		}
		//if the user's password is too short ...
		if (req.body.password.length <= 4) {
			return res.status(400).json({message: "Your password must be longer than 4 characters."});
		}
		//otherwise, create the user
		var user = new User(req.body);
		user.save(function(err, new_user) {
			if (err) {
				console.log("can't create user", err);
			}
			res.json(new_user);
		});
	})
});

//Login 
app.post('/api/users/auth', passport.authenticate('local', { failureRedirect: '/login' }), function(req, res) {
	return res.json({message: "you logged in"});
});

//get users 

//End of Auth 

//Database Connection 
mongoose.connect('mongodb://localhost/booklet');

//Server Port 
var port = 8080; 
app.listen(process.env.EXPRESS_PORT || port, function(){
	console.log("The Wolverine Pack is hunting on port ", port); 
});
