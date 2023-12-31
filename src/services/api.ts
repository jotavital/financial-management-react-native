import axios from 'axios';
import { getItemAsync } from 'expo-secure-store';
import { signOut } from '~/redux/slices/authSlice';
import { store } from '~/redux/store';
import { toast } from '~/services/toast.android';

const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    timeout: 10000,
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

api.interceptors.request.use(
    async (config) => {
        const authToken = await getItemAsync('authToken').then(
            (authToken: string) => authToken
        );

        if (authToken) {
            config.headers.Authorization = `Bearer ${authToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(error);
        console.log(error.response?.data);

        if (error.response?.status === 401) {
            store.dispatch(signOut());
        }

        toast.show(
            error.response?.data.errors[0].message ??
                'Ocorreu um erro ao processar a requisição.'
        );

        throw error;
    }
);

export default api;
