import { useNavigation } from '@react-navigation/native';
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store';
import { createContext, useContext, useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';
import { useDispatch } from 'react-redux';
import {
    signIn as dispatchSignIn,
    signOut as dispatchSignOut,
} from '~/redux/slices/authSlice';
import api from '~/services/api';
import { SignInResponse, SignInSchema } from '~/types/signIn';
import { SignUpSchema } from '~/types/signUp';
import { UserProps } from '~/types/user';

interface AuthContextValue {
    user: UserProps;

    signUp: (data: SignUpSchema) => void;
    signIn: (data: SignInSchema) => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState<UserProps>(null);
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
                await setItemAsync('authToken', data.token);

                if (!data.user) {
                    dispatch(dispatchSignOut());
                    return;
                }

                setUser(data.user);
                dispatch(dispatchSignIn());
            })
            .catch(() => {
                dispatch(dispatchSignOut());
            });
    };

    // TODO: deslogar automaticamente caso token expirado
    const signOut = () => {
        dispatch(dispatchSignOut());
        deleteItemAsync('authToken');
    };

    useEffect(() => {
        getItemAsync('authToken')
            .then((authToken) => {
                if (authToken) {
                    dispatch(dispatchSignIn());
                } else {
                    dispatch(dispatchSignOut());
                }
            })
            .catch(() => dispatch(dispatchSignOut()));
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
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
