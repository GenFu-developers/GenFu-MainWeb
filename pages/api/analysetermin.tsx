import { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const payload = req.body
        // console.log(payload);

        const doc = {
            _type: 'webserviceOrder',
            customerName: payload.name,
            companyName: payload.companyName,
            customeremailEmail: payload.email,
            telNumber: payload.phone,
            analyseterminDatetime: `${payload.date}T${payload.time}`,
            customerNotion: payload.customerNotion,
        }

        // await sanityClient.create(doc)
        res.redirect(307, '/')
    }
}
