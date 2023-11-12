import { object, string } from 'yup';
import { momentDate } from '~/schemas/date';
import { TransactionType, TransactionTypeEnum } from '~/types/transaction';
import { validationMessages } from '~/utils/validation';

const transactionTypes: TransactionType[] = [
    TransactionTypeEnum.Income,
    TransactionTypeEnum.Outcome,
];

export const createTransactionSchema = object({
    title: string().required(validationMessages.required),
    amount: string().required(validationMessages.required),
    date: momentDate().required(validationMessages.required),
    type: string()
        .oneOf(transactionTypes)
        .transform((value) => (value === '' ? null : value))
        .required(validationMessages.required),
});
