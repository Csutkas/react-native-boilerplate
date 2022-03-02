import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import config from '../../io/api/config';

axios.defaults.baseURL = config.api_url;

export const useAxios = (axiosParams: any) => {
    const [response, setResponse] = useState<any>();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async (params: AxiosRequestConfig<any>) => {
      try {
       const result = await axios.request(params);
       setResponse(result.data);
       } catch( error ) {
         setError(String(error));
       } finally {
         setLoading(false);
       }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, []); 

    return { response, error, loading };
};