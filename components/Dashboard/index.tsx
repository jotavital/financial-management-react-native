import { Text, View } from 'react-native';
import styles from '~/components/Dashboard/styles';
import { Card } from '~/components/Dashboard/Card';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '~/styles/colors';
import { Table } from '~/components/Table';
import { TableColumns } from '~/components/Table/types';

export const Dashboard: React.FC = () => {
    const columns: TableColumns = [
        {
            title: 'ID',
            render: (item) => {
                return <Text>{item?.id}</Text>;
            },
        },
        {
            title: 'Name',
            render: (item) => {
                return <Text>{item?.name}</Text>;
            },
        },
        {
            title: 'Age',
            render: (item) => {
                return <Text>{item?.age}</Text>;
            },
        },
    ];

    // TODO: tipar
    const data: any = [
        {
            id: 1,
            name: 'joão',
            age: 23,
        },
        {
            id: 2,
            name: 'maria',
            age: 23,
        },
        {
            id: 3,
            name: 'bia',
            age: 23,
        },
        {
            id: 4,
            name: 'juca',
            age: 23,
        },
    ];

    return (
        <View style={styles.container}>
            <Card
                text='R$ 4.500,00'
                color='green'
                icon={
                    <AntDesign name='arrowup' size={40} color={colors.green} />
                }
            />
            <Card
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
