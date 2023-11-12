import { TransactionProps } from '~/types/transaction';

export interface UserProps {
    _id: string;
    name: string;
    email: string;
    transactions: TransactionProps[];
    createdAt: Date;
    updatedAt: Date;
    accessToken?: string;
}
