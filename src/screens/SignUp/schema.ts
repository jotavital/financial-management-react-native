import { object, string } from 'yup';

export const signUpSchema = object({
    name: string().required(),
    email: string().required(),
    password: string().required(),
});
