import { ReadableTransactionType, TransactionType } from '~/models/transaction';

export const formatTransactionType = (
    type: TransactionType
): ReadableTransactionType => {
    switch (type) {
        case 'income':
            return 'Receita';
        case 'outcome':
            return 'Despesa';
        default:
            break;
    }
};
