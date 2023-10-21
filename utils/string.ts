import {
    FormattedTransactionType,
    TransactionType,
} from '~/models/Transaction';

export const formatTransactionType = (
    type: TransactionType
): FormattedTransactionType => {
    switch (type) {
        case 'income':
            return 'Receita';
        case 'outcome':
            return 'Despesa';
        default:
            break;
    }
};
