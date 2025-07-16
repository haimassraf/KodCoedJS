import "dotenv/config"
import client, { connectToMongo } from "./lib/db.js"
import { ObjectId } from "mongodb"

await connectToMongo();

export async function insertData(body) {
    try {
        body.confirmed = false;
        body.timestamp = new Date().toLocaleString()
        const res = await client.db('arava').collection('intel_reports').insertOne(body)
        return res.insertedId;
    } catch (err) {
        console.log("Error with inserting data: ", err.message)
    }
}

export async function getAllData() {
    try {
        const res = await client.db('arava').collection('intel_reports').find().toArray();
        return res;
    } catch (err) {
        console.log("Error: ", err.message)
    }
}

export async function getHighReports() {
    try {
        const res = await client.db('arava').collection('intel_reports').find({ threatLevel: { $gte: 4 } }).toArray();
        return res;
    } catch (err) {
        console.log("Error: ", err.message);
    }
}

export async function changeConfirmToTrue(id) {
    try {
        const res = await client.db('arava').collection('intel_reports').findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: { confirmed: true } },
            {returnDocument: 'after'}
        )
        return res.value

    } catch (err) {
        console.log("Error: ", err.message)
    }
}