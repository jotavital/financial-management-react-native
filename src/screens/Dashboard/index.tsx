import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
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
import { useAuth } from '~/contexts/Auth';
import api from '~/services/api';
import { colors } from '~/styles/colors';
import { TransactionProps, TransactionsTotalsProps } from '~/types/transaction';
import { toBrl } from '~/utils/currency';

export const DashboardScreen: React.FC = () => {
    const [transactions, setTransactions] = useState<TransactionProps[]>(null);
    const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
    const [isLoadingTotals, setIsLoadingTotals] = useState<boolean>(false);
    const [totals, setTotals] = useState<TransactionsTotalsProps>(null);
    const navigation = useNavigation();
    const { user } = useAuth();

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

    // TODO: colocar num context
    const handleFetchTotals = useCallback(() => {
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
    }, []);

    const handleFetchTransactions = useCallback(() => {
        setIsLoadingData(true);

        api.get<TransactionProps[]>(`transactions`)
            .then(({ data }) => {
                setIsLoadingData(false);
                setTransactions(data);
            })
            .catch(() => {
                setIsLoadingData(false);
                setTransactions(null);
            });
    }, []);

    const handleFetchDashboard = useCallback(() => {
        handleFetchTotals();
        handleFetchTransactions();
    }, []);

    useFocusEffect(handleFetchDashboard);

    return (
        <ScrollView
            contentContainerStyle={styles.contentContainer}
            refreshControl={
                <RefreshControl
                    refreshing={isLoadingData}
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

            {isLoadingData && !transactions ? (
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
