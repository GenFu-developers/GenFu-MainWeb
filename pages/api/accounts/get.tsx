import { NextApiRequest, NextApiResponse } from "next";
import MongoDBClient from '../../../lib/mongoDB/mongodbClient'


const db = new MongoDBClient({
    dataSource: 'Cluster0',
    database: 'test',
    collection: 'users',
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        console.log(req.query)
        var filter = {}
        db.find(filter).then(res => {
            const result = res.documents
            res.json(result)
        }).catch(e => {
            res.send(e)
        })
    }
}
