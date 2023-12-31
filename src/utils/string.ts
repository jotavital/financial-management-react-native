import {
    ReadableTransactionType,
    TransactionType,
    TransactionTypeEnum,
} from '~/types/transaction';

export const formatTransactionType = (
    type: TransactionType
): ReadableTransactionType => {
    switch (type) {
        case TransactionTypeEnum.Income:
            return 'Receita';
        case TransactionTypeEnum.Outcome:
            return 'Despesa';
        default:
            break;
    }
};
