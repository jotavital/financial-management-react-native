import { View } from 'react-native';
import { Data } from '~/components/Table/Data';
import { Header } from '~/components/Table/Header';
import styles from '~/components/Table/styles';
import { TableProps } from '~/components/Table/types';

export const Table: React.FC<TableProps> = ({ columns, data }) => {
    return (
        <View style={styles.tableContainer}>
            <Header columns={columns} />
            <Data data={data} columns={columns} />
        </View>
    );
};
