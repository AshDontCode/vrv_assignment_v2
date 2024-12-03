const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI,{
      family:4
    });
    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    console.error("Details:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
