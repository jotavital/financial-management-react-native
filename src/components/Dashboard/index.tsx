import { Text, View } from 'react-native';
import styles from '~/components/Dashboard/styles';
import { Card } from '~/components/Dashboard/Card';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '~/styles/colors';
import { Table } from '~/components/Table';
import { TableColumns } from '~/components/Table/types';
import { formatTransactionType } from '~/utils/string';
import { centsToBrl } from '~/utils/currency';
import { useEffect } from 'react';
import api from '~/services/api';

export const Dashboard: React.FC = () => {
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

    // TODO: tipar
    const data: any = [
        {
            id: 1,
            type: 'income',
            amount: '501',
            date: '23/07/2022 11:45',
        },
        {
            id: 2,
            type: 'income',
            amount: '3599',
            date: '23/07/2022 11:45',
        },
        {
            id: 3,
            type: 'outcome',
            amount: '125000',
            date: '23/07/2022 11:45',
        },
        {
            id: 4,
            type: 'outcome',
            amount: '1250099',
            date: '23/07/2022 11:45',
        },
    ];

    useEffect(() => {
        api.get('users')
            .then(({ data }) => {
                console.log(data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <View style={styles.container}>
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
            <View>
                <Table columns={columns} data={data} />
            </View>
        </View>
    );
};
