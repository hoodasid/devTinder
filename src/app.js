const express = require('express');

const app = express();

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



app.get(/^\/a(bc)d$/, (req, res) => {
    res.send("Data retrieved successfully from /abc endpoint");
});

app.get("/test/:userID/:userName/:userPass", (req, res) => {
        // this will log the query parameters in the url as an object, for example if the url is /test/123?name=John&age=30 then it will log { name: 'John', age: '30' }
        console.log(req.query);
        //this will match to any req made to /test endpoint with any dynamic userID and will execute the callback function
        console.log(req.params);
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