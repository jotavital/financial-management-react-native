import { object, string } from 'yup';
import { validationMessages } from '~/utils/validation';

export const signInSchema = object({
    email: string()
        .email(validationMessages.email)
        .required(validationMessages.required),
    password: string()
        .min(8, validationMessages.min(8))
        .required(validationMessages.required),
});
