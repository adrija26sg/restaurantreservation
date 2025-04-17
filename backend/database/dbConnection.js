// backend/database/dbConnection.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("MONGODB_URI:", process.env.MONGODB_URI); // Debugging line

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log("Some error occurred while connecting to the database:", err);
    });
};

export default dbConnection;
