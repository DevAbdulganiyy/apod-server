import { Request, Response } from 'express';
import { fetchApod, fetchHistoricalApods } from '../services/apodServices';

export const getApod = async (req: Request, res: Response) => {
  try {
    const apodData = await fetchApod();
    res.status(200).json(apodData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch APOD' });
  }
};

export const getHistoricalApods = async (req: Request, res: Response) => {
  const { count, startDate } = req.query;
  try {
    const historicalApods = await fetchHistoricalApods(Number(count), startDate as string);
    res.status(200).json(historicalApods);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch historical APODs' });
  }
};
