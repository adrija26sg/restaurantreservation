// backend/database/dbConnection.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

console.log('MONGO_URI:', process.env.MONGO_URI); // Debugging line

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, {
    dbName: 'fooddata',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database!');
  })
  .catch((err) => {
    console.log(`Some error occurred while connecting to the database: ${err}`);
  });
};
