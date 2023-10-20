import { View } from 'react-native';
import { Cell } from '~/components/Table/Data/Row/Cell';
import styles from '~/components/Table/Data/Row/styles';

export const Row: React.FC = () => {
    return (
        <View style={styles.row}>
            <Cell />
            <Cell />
            <Cell />
            <Cell />
        </View>
    );
};
