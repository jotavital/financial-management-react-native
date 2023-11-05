import {
    ActivityIndicator,
    RefreshControl,
    ScrollView,
    Text,
} from 'react-native';
import styles from '~/components/Dashboard/styles';
import { Card } from '~/components/Dashboard/Card';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '~/styles/colors';
import { Table } from '~/components/Table';
import { TableColumns } from '~/components/Table/types';
import { formatTransactionType } from '~/utils/string';
import { centsToBrl } from '~/utils/currency';
import { useCallback, useEffect, useState } from 'react';
import api from '~/services/api';
import { TransactionProps } from '~/models/transaction';

export const Dashboard: React.FC = () => {
    const [transactions, setTransactions] = useState<TransactionProps[]>(null);
    const [isLoadingData, setIsLoadingData] = useState<boolean>(false);

    const columns: TableColumns<TransactionProps> = [
        {
            title: 'Título',
            render: (item) => {
                return <Text>{item?.title}</Text>;
            },
        },
        {
            title: 'Tipo',
            render: (item) => {
                return <Text>{formatTransactionType(item?.type)}</Text>;
            },
        },
        {
            title: 'Valor',
            render: (item) => {
                return <Text>{centsToBrl(item?.amount)}</Text>;
            },
        },
        {
            title: 'Data',
            render: (item) => {
                return <Text>{item?.date}</Text>;
            },
        },
    ];

    const handleFetchTransactions = useCallback(() => {
        setIsLoadingData(true);

        api.get('users/65446ba0f431cd94e768a0f3/transactions')
            .then(({ data }) => {
                setIsLoadingData(false);
                setTransactions(data);
            })
            .catch((error) => {
                setIsLoadingData(false);
                setTransactions(null);
            });
    }, []);

    useEffect(() => {
        handleFetchTransactions();
    }, []);

    return (
        <ScrollView
            contentContainerStyle={styles.contentContainer}
            refreshControl={
                <RefreshControl
                    refreshing={isLoadingData}
                    onRefresh={handleFetchTransactions}
                />
            }
        >
            <Card
                title='Receitas'
                text='R$ 4.500,00'
                color='green'
                icon={
                    <AntDesign name='arrowup' size={40} color={colors.green} />
                }
            />
            <Card
                title='Despesas'
                text='R$ 500,00'
                color='red'
                icon={
                    <AntDesign name='arrowdown' size={40} color={colors.red} />
                }
            />
            {isLoadingData ? (
                <ActivityIndicator size='large' color={colors.blue} />
            ) : (
                <Table columns={columns} data={transactions} />
            )}
        </ScrollView>
    );
};
