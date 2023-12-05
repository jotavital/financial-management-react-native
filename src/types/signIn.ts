import { InferType } from 'yup';
import { signInSchema } from '~/screens/SignIn/schema';
import { UserBasicInfo } from '~/types/user';

export type SignInSchema = InferType<typeof signInSchema>;

export interface SignInResponse {
    token: string;
    user: UserBasicInfo;
}
