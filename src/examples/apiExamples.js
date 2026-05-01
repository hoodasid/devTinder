app.use("/admin", (req, res) => {
    console.log("This is the second route handler for /admin endpoint");
    res.send("Hello World from /admin endpoint");
});

app.get(/^\/a(bc)d$/, (req, res) => {
    res.send("Data retrieved successfully from /abc endpoint");
});

app.get("/test/:userID/:userName/:userPass", userAuth,(req, res, next) => {
    // this will log the query parameters in the url as an object, for example if the url is /test/123?name=John&age=30 then it will log { name: 'John', age: '30' }
    console.log(req.query);
    //this will match to any req made to /test endpoint with any dynamic userID and will execute the callback function
    console.log(req.params);
    // res.send("Data retrieved successfully from /test endpoint");
    next();
}, (req, res) => {
    console.log("This is the second route handler for /test endpoint");
    res.send("Data retrieved successfully from /test endpoint in second route handler");
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

app.use("/hello", (req, res) => {
    res.send("Hello World from /hello endpoint");
})

app.get("/getUserData", (req, res) => {
   try {
    throw new Error("This is a test error");
    res.send("Data retrieved successfully from /getUserData endpoint");
   } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error from /getUserData endpoint");
   }
});

app.use("/", (err, req, res, next) => {
    if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
    // res.send("Home page");
})