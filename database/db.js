const mongoose = require("mongoose");

function connection() {
  dbConnect().catch((err) => console.log(err));

  async function dbConnect() {
    await mongoose.connect(
      "mongodb://root:4LLTwFb6LXXxI8h@188.40.185.120:27017/?",
    );
    console.log("Connected to DB");
  }
}


module.exports = connection;