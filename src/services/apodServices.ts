import axios from 'axios';

const API_KEY = "IHtXX2VJmRuLZOhgDSsRIwJtMUjy9ollpMYXxy9k"
const BASE_URL = 'https://api.nasa.gov/planetary/apod';

export const fetchApod = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
    return response.data;
  } catch (error:any) {
    console.error('Error fetching APOD:', error.response.data);
    throw error;
  }
};

export const fetchHistoricalApods = async (count: number, startDate?: string) => {
  try {
    const params: any = { api_key: API_KEY, count };
    if (startDate) {
      params.start_date = startDate;
    }
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching historical APODs:', error);
    throw error;
  }
};
