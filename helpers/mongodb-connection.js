const mongoose = require("mongoose");

// const mongoAtlasUri = process.env.MONGO_URI
const mongoAtlasUri =
  "mongodb+srv://RuchitaWagh:Ruchi03@atlascluster.beoc0fg.mongodb.net/Employee_Payroll?retryWrites=true&w=majority";

const mongooseConnection = async () => {
  try {
    // Connect to the MongoDB cluster
    let conn = await mongoose.connect(mongoAtlasUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(conn);
  } catch (e) {
    console.log("could not connect: " + e);
  }
  const dbConnection = mongoose.connection;
  dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
  dbConnection.once("open", () => console.log("Connected to DB!"));
};
module.exports = mongooseConnection;
