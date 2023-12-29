import { TransactionProps } from '~/types/transaction';

export interface UserProps {
    _id: string;
    name: string;
    email: string;
    transactions: TransactionProps[];
    createdAt: Date;
    updatedAt: Date;
}

export interface UpdateUserData {
    name: string;
}

export interface UserBasicInfo {
    name: string;
    email: string;
    avatar?: string;
}
