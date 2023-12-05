import { createSlice } from '@reduxjs/toolkit';
import { deleteItemAsync, setItemAsync } from 'expo-secure-store';
import { RootState } from '~/redux/store';
import { SignInResponse } from '~/types/signIn';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isSignedIn: false,
    },
    reducers: {
        signIn: (
            state,
            action: {
                payload: SignInResponse;
            }
        ) => {
            // TODO precisa fazer isso assincrono
            setItemAsync('authToken', action.payload.token);

            state.isSignedIn = true;
        },
        signOut: (state) => {
            deleteItemAsync('authToken');

            state.isSignedIn = false;
        },
    },
});

export const { signIn, signOut } = authSlice.actions;

export const selectIsSignedIn = (state: RootState) => state.isSignedIn;
