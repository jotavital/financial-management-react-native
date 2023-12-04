import { createSlice } from '@reduxjs/toolkit';
import { deleteItemAsync } from 'expo-secure-store';
import { RootState } from '~/redux/store';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isSignedIn: false,
    },
    reducers: {
        signIn: (state) => {
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
