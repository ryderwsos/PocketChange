import type { NextApiRequest, NextApiResponse } from 'next'
const cors = require('cors')({origin: true})
import getAmazon from './scraper'



export async function GET(request: NextApiRequest, response: NextApiResponse) {
  const data = await getAmazon(response.params.name)
  return Response.json({message: data})
}