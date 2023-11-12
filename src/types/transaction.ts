export type TransactionType = 'income' | 'outcome';

export enum TransactionTypeEnum {
    Income = 'income',
    Outcome = 'outcome',
}

export type ReadableTransactionType = 'Receita' | 'Despesa';

export interface TransactionProps {
    id: string;
    title: string;
    amount: number;
    date: string;
    type: TransactionType;
}

export interface TransactionsTotalsProps {
    incomesAmount: number;
    outcomesAmount: number;
}
