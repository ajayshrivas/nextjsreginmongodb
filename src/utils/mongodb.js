import { MongoClient } from 'mongodb';

//const uri = 'mongodb://localhost:27017/next_app_db'; // Replace with your MongoDB URI
const uri = 'mongodb://0.0.0.0:27017/next_app_db';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let cachedClient = null;

export async function connectToDatabase() {
  /*  
  if (cachedClient && cachedClient.isConnected()) {
    return cachedClient.db();
  }*/

  cachedClient = new MongoClient(uri, options);
  await cachedClient.connect();

  return cachedClient.db();
}

export default connectToDatabase;
