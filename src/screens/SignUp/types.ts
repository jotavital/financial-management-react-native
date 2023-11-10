import { InferType } from 'yup';
import { signUpSchema } from '~/screens/SignUp/schema';

export type SignUpSchema = InferType<typeof signUpSchema>;
