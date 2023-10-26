import { object, string } from 'yup';
import { momentDate } from '~/schemas/date';
import { genericValidation } from '~/utils/validation';

export const createOutcomeSchema = object({
    title: string().required(genericValidation.required),
    amount: string().required(genericValidation.required),
    date: momentDate().required(genericValidation.required),
});
