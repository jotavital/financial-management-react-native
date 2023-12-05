import { useNavigation } from '@react-navigation/native';
import { getItemAsync } from 'expo-secure-store';
import { createContext, useContext, useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import { useDispatch } from 'react-redux';
import {
    signIn as dispatchSignIn,
    signOut as dispatchSignOut,
} from '~/redux/slices/authSlice';
import api from '~/services/api';
import { SignInResponse, SignInSchema } from '~/types/signIn';
import { SignUpSchema } from '~/types/signUp';

interface AuthContextValue {
    signUp: (data: SignUpSchema) => void;
    signIn: (data: SignInSchema) => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export const AuthProvider = ({ children }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const signUp = async (data: SignUpSchema) => {
        api.post('users', data).then(() => {
            ToastAndroid.show(
                'Cadastro realizado com sucesso.',
                ToastAndroid.SHORT
            );

            navigation.navigate('SignIn' as never);
        });
    };

    const signIn = (data: SignInSchema) => {
        api.post<SignInResponse>(
            `${process.env.EXPO_PUBLIC_API_HOST}/api/signin`,
            data
        )
            .then(async ({ data }) => {
                if (!data.token) {
                    dispatch(dispatchSignOut());
                    return;
                }

                dispatch(dispatchSignIn(data));
            })
            .catch(() => {
                dispatch(dispatchSignOut());
            });
    };

    const signOut = () => {
        dispatch(dispatchSignOut());
    };

    useEffect(() => {
        getItemAsync('authToken')
            .then((token) => {
                if (token) {
                    dispatch(dispatchSignIn({ token }));
                } else {
                    dispatch(dispatchSignOut());
                }
            })
            .catch((error) => {
                dispatch(dispatchSignOut());
            });
    }, []);

    return (
        <AuthContext.Provider
            value={{
                signUp,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);

    if (!Object.keys(context).length) {
        throw 'Trying to access useAuth out of provider';
    }

    return context;
}
