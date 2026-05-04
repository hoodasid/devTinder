const express = require('express');
const { adminAuth, userAuth } = require('./middlewares/auth');
const app = express();
const connectDB = require('./config/database');
const User = require('./models/user');

// converts the incoming request body to json format and makes it available in req.body
app.use(express.json());


app.post("/register", async (req, res) => {

    // console.log(req.body);
    const userObj = req.body;

    // creating a new instance of the user model and passing the userObj to it which will create a new user document in the database
    const user = new User(userObj);
    try {
        await user.save()
        res.send("User registered successfully");
    } catch (error) {
        console.log(error);
        res.status(400).send("Error saving user to database" + error.message);
    }
});

app.delete("/deleteUser", async (req, res) => {
    const email = req.body.email;
    try {
        const user = await User.findOneAndDelete({email: email});
        if(user) {
            res.send("User deleted successfully with email: " + email); 
        } else {
            res.status(404).send("User not found with email: " + email);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Error deleting user from database" + error.message);
    }
});

app.patch("/updateUser", async (req, res) => {
    const email = req.body.email;
    const updateObj = req.body.updateObj;
    try {
        const user = await User.findOneAndUpdate({email: email}, updateObj, {new: true});
        if(user) {
            res.send("User updated successfully with email: " + email + " and updated user data is: " + user);  
        } else {
            res.status(404).send("User not found with email: " + email);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Error updating user in database" + error.message);
    }
});

app.get("/userByEmail", async (req, res) => {
    const email = req.body.email;
    try {
        const user = await User.find({email: email});
        if(user.length === 0) {
            return res.status(404).send("User not found with email: " + email);
        } else {
            res.send(user);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching user from database" + error.message);
    }
});

app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching users from database" + error.message);
    }
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