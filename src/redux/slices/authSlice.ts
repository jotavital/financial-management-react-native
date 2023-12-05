import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store';
import { RootState } from '~/redux/store';
import { SignInResponse } from '~/types/signIn';
import { UserBasicInfo } from '~/types/user';

export const getUserFromStorage = createAsyncThunk(
    'auth/getUserFromStorage',
    async () => {
        let user = await getItemAsync('user');
        return JSON.parse(user) as UserBasicInfo;
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isSignedIn: false,
        user: {} as UserBasicInfo,
    },
    reducers: {
        signIn: (
            state,
            action: {
                payload: SignInResponse;
            }
        ) => {
            // TODO precisa fazer isso assincrono
            if (action.payload) {
                setItemAsync('authToken', action.payload.token);
                setItemAsync('user', JSON.stringify(action.payload.user));

                state.user = action.payload.user;
            }

            state.isSignedIn = true;
        },
        signOut: (state) => {
            deleteItemAsync('authToken');
            deleteItemAsync('user');

            state.isSignedIn = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUserFromStorage.fulfilled, (state, action) => {
            state.user = action.payload;
        });
    },
});

export const { signIn, signOut } = authSlice.actions;

export const selectIsSignedIn = (state: RootState) => state.isSignedIn;
export const selectUser = (state: RootState) => state.user;
