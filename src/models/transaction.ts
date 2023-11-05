export type TransactionType = 'income' | 'outcome';

export type ReadableTransactionType = 'Receita' | 'Despesa';

export interface TransactionProps {
    id: string;
    title: string;
    amount: number;
    date: string;
    type: TransactionType;
}
