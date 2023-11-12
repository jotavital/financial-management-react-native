import axios from 'axios';
import { ToastAndroid } from 'react-native';

const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(error.response.data);

        ToastAndroid.show(
            error.response.data.errors[0].message ??
                'Ocorreu um erro ao processar a requisição.',
            ToastAndroid.SHORT
        );

        throw error;
    }
);

export default api;
