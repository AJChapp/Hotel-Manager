const express = require("express");
const PORT = process.env.PORT || 8080;
const genRoutes = require("./Routes/genRoutes.js")
const loginRoutes = require('./Routes/user.js')
const mongoose = require("mongoose");
const passport = require("passport");
const session = require('express-session');
const PassPort = require('./passport/passport.js')

// Initialize Express
const app = express();
//Bring in Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
}));//setup session
app.use(passport.initialize());//intialize passport
app.use(passport.session());

genRoutes(app);
loginRoutes(app, passport);
PassPort(passport);
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/project3'
mongoose.connect(mongoURI);

app.listen(PORT, function () {
  console.log(`App running on port ${PORT}!`);
});