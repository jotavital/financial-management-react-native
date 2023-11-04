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

export const Dashboard: React.FC = () => {
    const [data, setData] = useState<any>([]);
    const [isLoadingData, setIsLoadingData] = useState<boolean>(false);

    //TODO: colocar em outro arquivo
    const columns: TableColumns = [
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

    useEffect(() => {
        handleFetchTransactions();
    }, []);

    const handleFetchTransactions = useCallback(() => {
        setIsLoadingData(true);

        api.get('users/65446ba0f431cd94e768a0f3/transactions').then(
            ({ data }) => {
                setIsLoadingData(false);
                setData(data);
            }
        );
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
                <Table columns={columns} data={data} />
            )}
        </ScrollView>
    );
};
