const express = require('express');

const app = express();

// app.use will match to any req made to api i.e.e get, post, put, delete etc. and will execute the callback function
// app.get will match only to get req made to api and will execute the callback function
// app.post will match only to post req made to api and will execute the callback function
// app.put will match only to put req made to api and will execute the callback function
// app.delete will match only to delete req made to api and will execute the callback function
// app.patch will match only to patch req made to api and will execute the callback function

app.get("/test", (req, res) => {
    res.send("Data retrieved successfully from /test endpoint");
});

app.post("/test", (req, res) => {
    res.send("Data posted successfully to /test endpoint");
});

app.put("/test", (req, res) => {
    res.send("Data updated successfully at /test endpoint");
});

app.delete("/test", (req, res) => {
    res.send("Data deleted successfully from /test endpoint");
});

app.patch("/test", (req, res) => {
    res.send("Data patched successfully at /test endpoint");
});

app.use("/test", (req, res) => {
    res.send("Hello World from /test endpoint");
})

app.use("/hello", (req,res) => {
    res.send("Hello World from /hello endpoint");
}  )

app.use("/", (req,res) => {
    res.send("Home page");
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

console.log("Starting a new project");