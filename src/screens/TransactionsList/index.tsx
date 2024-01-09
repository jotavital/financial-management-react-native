import { RefreshControl, ScrollView } from 'react-native';
import { TransactionCard } from '~/components/TransactionCard';
import { useTransactions } from '~/contexts/Transactions';
import { styles } from '~/screens/TransactionsList/styles';

export const TransactionsListScreen: React.FC = () => {
    const { transactions, fetchTransactions, isLoadingTransactions } =
        useTransactions();

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={isLoadingTransactions}
                    onRefresh={fetchTransactions}
                />
            }
        >
            {transactions?.map((transaction) => {
                return (
                    <TransactionCard
                        key={transaction.id}
                        transaction={transaction}
                    />
                );
            })}
        </ScrollView>
    );
};
