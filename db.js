const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = "mongodb://localhost:27017/mydatabase";
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected");
};

module.exports = connectDB;
