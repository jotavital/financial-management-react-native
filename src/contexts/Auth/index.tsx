import { createContext, useContext, useState } from 'react';

interface AuthContextValue {
    isSignedIn: boolean;
    signIn: () => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export const AuthProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

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
