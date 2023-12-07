import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import {
    ActivityIndicator,
    RefreshControl,
    ScrollView,
    View,
} from 'react-native';
import { Card } from '~/components/Dashboard/Card';
import styles from '~/components/Dashboard/styles';
import { TransactionsList } from '~/components/TransactionsList';
import { useTransactions } from '~/contexts/Transactions';
import { colors } from '~/styles/colors';
import { toBrl } from '~/utils/currency';

export const DashboardScreen: React.FC = () => {
    const {
        fetchTotals,
        totals,
        isLoadingTotals,
        fetchTransactions,
        isLoadingTransactions,
        transactions,
    } = useTransactions();

    const handleFetchDashboard = useCallback(() => {
        fetchTotals();
        fetchTransactions();
    }, []);

    useFocusEffect(handleFetchDashboard);

    return (
        <ScrollView
            contentContainerStyle={styles.contentContainer}
            refreshControl={
                <RefreshControl
                    refreshing={isLoadingTransactions}
                    onRefresh={handleFetchDashboard}
                />
            }
        >
            <View style={styles.headerContainer}>
                <Card
                    title='Receitas'
                    text={toBrl(totals?.incomesAmount)}
                    color='green'
                    icon={
                        <AntDesign
                            name='arrowup'
                            size={40}
                            color={colors.green}
                        />
                    }
                    isLoading={isLoadingTotals && !totals}
                />
                <Card
                    title='Despesas'
                    text={toBrl(totals?.outcomesAmount)}
                    color='red'
                    icon={
                        <AntDesign
                            name='arrowdown'
                            size={40}
                            color={colors.red}
                        />
                    }
                    isLoading={isLoadingTotals && !totals}
                />
            </View>

            <View style={styles.bodyContainer}>
                {isLoadingTransactions && !transactions ? (
                    <ActivityIndicator size='large' color={colors.blue} />
                ) : (
                    <TransactionsList transactions={transactions} />
                )}
            </View>
        </ScrollView>
    );
};
