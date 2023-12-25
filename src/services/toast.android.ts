import { ToastAndroid } from 'react-native';

export const toast = {
    show: (message: string, duration: number = ToastAndroid.SHORT) => {
        ToastAndroid.show(message, duration);
    },
};
