import { View } from 'react-native';
import { Data } from '~/components/Table/Data';
import { Header } from '~/components/Table/Header';
import styles from '~/components/Table/styles';

export const Table: React.FC = () => {
    return (
        <View style={styles.tableContainer}>
            <Header />
            <Data />
        </View>
    );
};
