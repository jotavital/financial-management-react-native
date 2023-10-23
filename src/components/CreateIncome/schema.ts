import { object, string } from 'yup';
import { genericValidation } from '~/utils/validation';

export const createIncomeSchema = object({
    title: string().required(genericValidation.required),
    amount: string().required(genericValidation.required),
});
