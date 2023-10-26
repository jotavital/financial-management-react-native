import { TransactionType } from '~/models/transaction';
import { object, string } from 'yup';
import { momentDate } from '~/schemas/date';
import { genericValidation } from '~/utils/validation';

const transactionTypes: TransactionType[] = ['income', 'outcome'];

export const createTransactionSchema = object({
    title: string().required(genericValidation.required),
    amount: string().required(genericValidation.required),
    date: momentDate().required(genericValidation.required),
    type: string()
        .oneOf(transactionTypes)
        .transform((value) => (value === '' ? null : value))
        .required(genericValidation.required),
});
