import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const mongoClient = new MongoClient(`${process.env.MONGODB_URI}`);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const payload = req.body
        try {
            await mongoClient.connect();
            const db = mongoClient.db('studio'); // test -> dbName
            const collection = db.collection('waitinglist'); // users -> collection name
            // create unique index
            const index = await collection.createIndex({ "email": 1 }, { unique: true })
            // insert document 
            const result = await collection.insertOne(payload)
            console.log(result, index);
            res.redirect('/')
        }
        catch (e) {
            res.redirect('/')
        }
    }
}
