import 'dotenv/config';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function connectToMongo() {
    try {
        await client.connect();
        console.log("Connected to DB")
    } catch (err) {
        console.log("Error with connecting: ", err.message)
    }
}
export default client;
