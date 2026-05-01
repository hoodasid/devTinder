const express = require('express');
const { adminAuth, userAuth } = require('./middlewares/auth');
const app = express();
const connectDB = require('./config/database');
const User = require('./models/user');


// app.use will match to any req made to api i.e.e get, post, put, delete etc. and will execute the callback function
// app.get will match only to get req made to api and will execute the callback function
// app.post will match only to post req made to api and will execute the callback function
// app.put will match only to put req made to api and will execute the callback function
// app.delete will match only to delete req made to api and will execute the callback function
// app.patch will match only to patch req made to api and will execute the callback function
// in routes /abc will match anything that starts with /abc and will execute the callback function
// and /ab?c will match anything that starts with /ab and ends with c and will execute the callback function
// and /ab+c will match anything that starts with /ab and has one or more b and end with c will execute the callback function
// and /ab*c will match anything that starts with /a and ends with c and has zero or more b in between will execute the callback function
// and /ab|cd will match anything that starts with /a and ends with c or starts with /c and ends with d will execute the callback function
// and and /ab{2,4}c will match anything that starts with /a and ends with c and has 2 to 4 b in between will execute the callback function
// and /a(bc)?d will match anything that starts with /a and ends with d and has zero or one occurrence of bc in between will execute the callback function
// req.query will give us the query parameters in the url as an object
// function inside the api req is known as route handler and it will execute when the route is matched plus it is also called as controller in MVC (Model-View-Controller) architecture
// there can be multiple route handlers for a single route and they will be executed in the order they are defined in the code
// next() function is used to move to the next route handler in the order they are defined in the code


app.post("/register", async (req, res) => {

    const userObj = { firstName: "Siddharth", lastName: "Hooda", email: "siddharth.hooda@example.com", password: "password123", age: 25, gender: "Male" };

    // creating a new instance of the user model and passing the userObj to it which will create a new user document in the database
    const user = new User(userObj);
    await user.save()
    res.send("User registered successfully");
});

connectDB().then(() => {
    console.log("DB connection established...")

    app.use("/admin", adminAuth);

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });

    console.log("Starting a new project");
}).catch(() => {
    console.error("DB cannot be connected!!")
})