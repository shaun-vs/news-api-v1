require('dotenv').config();
export const MAIN_REQUEST_URL = `${process.env.REACT_APP_NEWS_API_URL}?apiKey=${process.env.REACT_APP_NEW_API_KEY}`;
export const PAGE_SIZE = 10;