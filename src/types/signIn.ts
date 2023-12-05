import { InferType } from 'yup';
import { signInSchema } from '~/screens/SignIn/schema';

export type SignInSchema = InferType<typeof signInSchema>;

export interface SignInResponse {
    token: string;
}
