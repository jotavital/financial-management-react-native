import axios from 'axios';
import { API_URL } from '@env';
import { ToastAndroid } from 'react-native';

const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error(error.request);
        ToastAndroid.show(
            'Ocorreu um erro ao processar a requisição.',
            ToastAndroid.SHORT
        );
        throw error;
    }
);

export default api;
