const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://siddharthhooda24_db_user:z7OI2yvvqHlFbuJM@cluster0.mkfjvoq.mongodb.net/devTinder");
}

module.exports = connectDB;