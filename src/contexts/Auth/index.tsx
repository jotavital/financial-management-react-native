import { useNavigation } from '@react-navigation/native';
import { createContext, useContext, useState } from 'react';
import { ToastAndroid } from 'react-native';
import { SignUpSchema } from '~/screens/SignUp/types';
import api from '~/services/api';

interface AuthContextValue {
    isSignedIn: boolean;
    signUp: (data: SignUpSchema) => void;
    signIn: () => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export const AuthProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    const navigation = useNavigation();

    const signUp = async (data: SignUpSchema) => {
        api.post('users', data).then((response) => {
            ToastAndroid.show(
                'Cadastro realizado com sucesso.',
                ToastAndroid.SHORT
            );

            navigation.navigate('SignIn' as never);
        });
    };

    const signIn = () => {
        setIsSignedIn(true);
    };

    const signOut = () => {
        setIsSignedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isSignedIn,
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
