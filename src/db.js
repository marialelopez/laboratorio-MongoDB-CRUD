const { MongoClient } = require("mongodb");
const dotenv = require('dotenv');
dotenv.config();


const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbName = "test";

const connectDB = async () => {
  await client.connect();
  return client.db(dbName);
  }

module.exports = connectDB;
