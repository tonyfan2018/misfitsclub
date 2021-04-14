const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require('cors');
const users = require("./routes/api/users");
const excercise = require("./routes/api/excercise");
const articles = require("./routes/api/articles");
const path =require("path");

const app = express();

const port = process.env.PORT || 8000; 

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGODB_URI || db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


app.use("/api/excercise", excercise);

app.use("/api/articles", articles);


app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);


// process.env.port is Heroku's port if you choose to deploy the app there

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));

  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })

}



app.listen(port, () => console.log(`Server up and running on port ${port} !`));