import { IncomingMessage, ServerResponse } from "http";
import DB from '@database'

const allData = async(req: IncomingMessage, res: ServerResponse) => {
    try {
        const db = new DB()
        const allEntries = await db.getAllData()
        const length: any = allEntries.length
        
        res.statusCode = 200
        res.setHeader('Content-type', 'application/json')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET')
        res.end(JSON.stringify({ length: length, data: allEntries }))
        res.json({ length: length, data: allEntries });

    } catch (error: unknown | object | any) {
        console.error(error)
        res.statusCode = 500
        res.end(JSON.stringify({ length: length, data: [], error: error.message }))
        
    }
}

export default allData;