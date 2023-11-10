import { createContext, useContext, useState } from 'react';
import { SignUpSchema } from '~/screens/SignUp/types';

interface AuthContextValue {
    isSignedIn: boolean;
    signUp: (data: SignUpSchema) => void;
    signIn: () => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export const AuthProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

    const signUp = (data: SignUpSchema) => {
        console.log(data);
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
