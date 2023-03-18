const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// const mongoAtlasUri = process.env.MONGO_URI
const mongoAtlasUri =
  "mongodb+srv://Ruchi:Roxie15@node-learn.am6ml.mongodb.net/storybooks?retryWrites=true&w=majority";

const mongooseConnection = async () => {
  try {
    // Connect to the MongoDB cluster
    await mongoose.set("strictQuery", false);
    await mongoose.connect(mongoAtlasUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.log("could not connect: " + e);
  }
  const dbConnection = mongoose.connection;
  console.log("connected");
  dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
  dbConnection.once("open", () => console.log("Connected to DB!"));
};
module.exports = mongooseConnection;
