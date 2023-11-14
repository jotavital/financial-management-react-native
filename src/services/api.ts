import axios from 'axios';
import { getItemAsync } from 'expo-secure-store';
import { ToastAndroid } from 'react-native';

const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
});

getItemAsync('authToken').then((authToken: string) => {
    api.defaults.headers.common = {
        Authorization: `Bearer ${authToken}`,
    };
});

// remove that cache headers in production
api.defaults.headers.common = {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: '0',
};

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(error);
        console.log(error.response?.data);

        if (error.response?.status === 401) {
            console.log('sign out');
        }

        ToastAndroid.show(
            error.response?.data.errors[0].message ??
                'Ocorreu um erro ao processar a requisição.',
            ToastAndroid.SHORT
        );

        throw error;
    }
);

export default api;
