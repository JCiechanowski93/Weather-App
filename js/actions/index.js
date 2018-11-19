import axios from 'axios';

const API_KEY = 'babe19f50348eee482788e1cf33a50ff';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeater(city) {
    const url = `${ROOT_URL}&q=${city},pl`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}