import { useNavigation } from '@react-navigation/native';
import { createContext, useContext, useState } from 'react';
import { ToastAndroid } from 'react-native';
import api from '~/services/api';
import { TransactionProps, TransactionsTotalsProps } from '~/types/transaction';

interface TransactionContextValue {
    totals: TransactionsTotalsProps;
    isLoadingTotals: boolean;
    fetchTotals: () => void;

    transactions: TransactionProps[];
    isLoadingTransactions: boolean;
    fetchTransactions: () => void;

    storeTransaction: (attributes: TransactionProps, reset: () => void) => void;

    updateTransaction: (
        transactionId: string,
        attributes: TransactionProps
    ) => void;

    deleteTransaction: (transactionId: string) => void;

    isLoading: boolean;
}

const TransactionsContext = createContext<TransactionContextValue>(
    {} as TransactionContextValue
);

export const TransactionsProvider = ({ children }) => {
    const [isLoadingTotals, setIsLoadingTotals] = useState<boolean>(false);
    const [totals, setTotals] = useState<TransactionsTotalsProps>(null);
    const [transactions, setTransactions] = useState<TransactionProps[]>(null);
    const [isLoadingTransactions, setIsLoadingTransactions] =
        useState<boolean>(false);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const navigation = useNavigation();
    const isLoading = isLoadingTotals || isLoadingTransactions || isDeleting;

    // TODO mover os fetch para services e eliminar os useState
    // TODO usar react-query
    const fetchTotals = () => {
        setIsLoadingTotals(true);

        api.get<TransactionsTotalsProps>(`transactions/totals`)
            .then(({ data }) => {
                setIsLoadingTotals(false);
                setTotals(data);
            })
            .catch(() => {
                setIsLoadingTotals(false);
                setTotals(null);
            });
    };

    const fetchTransactions = () => {
        setIsLoadingTransactions(true);

        api.get<TransactionProps[]>(`transactions`)
            .then(({ data }) => {
                setIsLoadingTransactions(false);
                setTransactions(data);
            })
            .catch(() => {
                setIsLoadingTransactions(false);
                setTransactions(null);
            });
    };

    const storeTransaction = (
        attributes: TransactionProps,
        reset: () => void // pleaseeee this is BAD
    ) => {
        api.post(`transactions`, attributes).then(() => {
            reset();
            ToastAndroid.show('Dados salvos com sucesso.', ToastAndroid.SHORT);
        });
    };

    const updateTransaction = (
        transactionId: string,
        attributes: TransactionProps
    ) => {
        api.put(`transactions/${transactionId}`, attributes).then(
            (response) => {
                ToastAndroid.show(
                    'Dados salvos com sucesso.',
                    ToastAndroid.SHORT
                );

                if (response) {
                    navigation.goBack();
                }
            }
        );
    };

    const deleteTransaction = (transactionId: string) => {
        setIsDeleting(true);

        api.delete(`transactions/${transactionId}`)
            .then((response) => {
                if (response) {
                    // @ts-ignore
                    navigation.goBack();
                }
            })
            .finally(() => setIsDeleting(false));
    };

    return (
        <TransactionsContext.Provider
            value={{
                fetchTotals,
                totals,
                isLoadingTotals,

                fetchTransactions,
                isLoadingTransactions,
                transactions,

                storeTransaction,
                updateTransaction,
                deleteTransaction,

                isLoading,
            }}
        >
            {children}
        </TransactionsContext.Provider>
    );
};

export function useTransactions() {
    const context = useContext(TransactionsContext);

    if (!Object.keys(context).length) {
        throw 'Trying to access useTransactions out of provider';
    }

    return context;
}
