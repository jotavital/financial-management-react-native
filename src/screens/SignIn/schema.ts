import { object, string } from 'yup';
import { validationMessages } from '~/utils/validation';

export const signInSchema = object({
    email: string().required(validationMessages.required),
    password: string().required(validationMessages.required),
});
