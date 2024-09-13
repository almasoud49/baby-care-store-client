import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  
 const globalClient = global as typeof globalThis & { _mongoClient?: MongoClient };
  if (!globalClient._mongoClient) {
    globalClient._mongoClient = client;
  }
  clientPromise = Promise.resolve(globalClient._mongoClient);
} else {
  clientPromise = client.connect();
}

export default clientPromise;
