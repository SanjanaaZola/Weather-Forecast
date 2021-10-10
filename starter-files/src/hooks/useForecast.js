import { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForecast = () => {
    const [Error, setError] = useState(false);
    const [Loading, setLoading] = useState(false);
    const [Forecast, setForecast] = useState(null);

    const getWoeid = async location => {
        const { data } = await axios(`${REQUEST_URL}/search`, { params: { query: location } });

        console.log({ data });

        if (!data || data.length === 0) {
            setError('There is no such location');
            return;
        }
    };

    const submitRequest = async location => {
        const data = await getWoeid(location);

        const response = await axios(`${REQUEST_URL}/${data[0].woeid}`);
        console.log({ response });
    };

    return {
        Error,
        Loading,
        Forecast,
        submitRequest,
    };
};
export default useForecast;
