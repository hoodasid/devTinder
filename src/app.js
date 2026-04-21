const express = require('express');

const app = express();

app.use("/test", (req, res) => {
    res.send("Hello World from /test endpoint");
})

app.use("/hello", (req,res) => {
    res.send("Hello World from /hello endpoint");
}  )

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

console.log("Starting a new project");