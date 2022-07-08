import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const payload = req.body
        console.log(payload);
        res.redirect(307, '/')
    }
}
