import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import {
    ActivityIndicator,
    RefreshControl,
    ScrollView,
    Text,
} from 'react-native';
import { FormattedAmount } from '~/components/Common/FormattedAmount';
import { Card } from '~/components/Dashboard/Card';
import styles from '~/components/Dashboard/styles';
import { Table } from '~/components/Table';
import { TableColumns } from '~/components/Table/types';
import { useTransactions } from '~/contexts/Transactions';
import { colors } from '~/styles/colors';
import { TransactionProps } from '~/types/transaction';
import { toBrl } from '~/utils/currency';

export const DashboardScreen: React.FC = () => {
    const navigation = useNavigation();
    const {
        fetchTotals,
        totals,
        isLoadingTotals,
        fetchTransactions,
        isLoadingTransactions,
        transactions,
    } = useTransactions();

    const columns: TableColumns<TransactionProps> = [
        {
            title: 'Título',
            render: (item) => {
                return <Text>{item?.title}</Text>;
            },
        },
        {
            title: 'Valor',
            render: (item) => {
                return (
                    <FormattedAmount amount={item?.amount} type={item?.type} />
                );
            },
        },
        {
            title: 'Data',
            render: (item) => {
                return <Text>{item?.date}</Text>;
            },
        },
    ];

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
            <Card
                title='Receitas'
                text={toBrl(totals?.incomesAmount)}
                color='green'
                icon={
                    <AntDesign name='arrowup' size={40} color={colors.green} />
                }
                isLoading={isLoadingTotals && !totals}
            />
            <Card
                title='Despesas'
                text={toBrl(totals?.outcomesAmount)}
                color='red'
                icon={
                    <AntDesign name='arrowdown' size={40} color={colors.red} />
                }
                isLoading={isLoadingTotals && !totals}
            />

            {isLoadingTransactions && !transactions ? (
                <ActivityIndicator size='large' color={colors.blue} />
            ) : (
                <Table
                    columns={columns}
                    data={transactions}
                    onPress={(item: TransactionProps) => {
                        // @ts-ignore
                        navigation.navigate('EditTransaction', item);
                    }}
                />
            )}
        </ScrollView>
    );
};
