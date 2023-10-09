const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://sandeep0306:sandeep123@cluster0.yk84fgz.mongodb.net/");
    console.log(`MongoDB connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
