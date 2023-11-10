import { object, ref, string } from 'yup';
import { validationMessages } from '~/utils/validation';

export const signUpSchema = object({
    name: string()
        .min(5, validationMessages.min(5))
        .required(validationMessages.required),
    email: string()
        .email(validationMessages.email)
        .required(validationMessages.required),
    password: string()
        .min(8, validationMessages.min(8))
        .required(validationMessages.required),
    passwordConfirmation: string()
        .min(8, validationMessages.min(8))
        .oneOf([ref('password'), null], 'As senhas devem ser iguais!')
        .required(validationMessages.required),
});
