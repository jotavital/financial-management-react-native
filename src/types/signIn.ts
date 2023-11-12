import { InferType } from 'yup';
import { signInSchema } from '~/screens/SignIn/schema';
import { UserProps } from '~/types/user';

export type SignInSchema = InferType<typeof signInSchema>;

export interface SignInResponse {
    user: UserProps;
    token: string;
}
