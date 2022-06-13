import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const detail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = new DB()
    const dataId = req.query.id as string

    const data = await db.getDataById(dataId)

    res.status(200).json(data)
  } catch (e) {
    console.error(e)
    res.status(404).end()
  }
}

export default detail