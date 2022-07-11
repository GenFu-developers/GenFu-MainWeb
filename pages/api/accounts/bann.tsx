import { NextApiRequest, NextApiResponse } from "next";
import MongoDBClient from '../../../lib/mongoDB/mongodbClient'


const db = new MongoDBClient({
    dataSource: 'Cluster0',
    database: 'test',
    collection: 'users',
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.send('need to code idiot!')
    }
}
