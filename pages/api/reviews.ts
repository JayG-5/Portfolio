import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page } = req.query;

  try {
    const response = await axios.get(`https://kmong.com/api/seller-profile/v2/2731732/ratings?page=${page}`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: 'Error fetching reviews' });
  }
}