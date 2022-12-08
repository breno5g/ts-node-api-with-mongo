/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URL = process.env.MONGO_URI ?? 'mongodb://localhost:27017/template';

const connectToDatabase = (
  mongoDatabaseURI = MONGO_DB_URL
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
