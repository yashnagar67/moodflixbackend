const mongoose = require("mongoose");
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI; // Uncomment this if using environment variables

// const MONGO_URI = "mongodb://127.0.0.1:27017/moodyflix"; // Change if using cloud DB

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
