import { useNavigation } from '@react-navigation/native';
import { createContext, useContext, useState } from 'react';
import { ToastAndroid } from 'react-native';
import { UserProps } from '~/models/user';
import api from '~/services/api';
import { SignInSchema } from '~/types/signIn';
import { SignUpSchema } from '~/types/signUp';

interface AuthContextValue {
    isSignedIn: boolean;
    user: UserProps;

    signUp: (data: SignUpSchema) => void;
    signIn: (data: SignInSchema) => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export const AuthProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    const [user, setUser] = useState<UserProps>(null);
    const navigation = useNavigation();

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
        api.post<UserProps>('signin', data)
            .then(({ data: user }) => {
                console.log(user);
                setUser(user);
                setIsSignedIn(true);
            })
            .catch(() => {
                setIsSignedIn(false);
            });
    };

    const signOut = () => {
        setIsSignedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isSignedIn,
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
