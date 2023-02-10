import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.set('strictQuery', true);
const connectToMongo = async () => {
  try {
     const res = await mongoose.connect(process.env.MONGODB_URI);
    //const res = await mongoose.connect('mongodb://localhost:27017/crud-app');

    if (res) console.log('connected to mongodb');
  } catch (error) {
    console.log(error);
  }
};
export default connectToMongo;
