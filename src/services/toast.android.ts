import { ToastAndroid } from 'react-native';

export const toast = {
    show: (message: string) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    },
};
