import axios from 'axios';
import { ToastAndroid } from 'react-native';

const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
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
