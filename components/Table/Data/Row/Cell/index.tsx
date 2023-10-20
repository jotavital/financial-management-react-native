import { Text, View } from 'react-native';
import styles from '~/components/Table/Data/Row/Cell/styles';

export const Cell: React.FC = () => {
    return (
        <View style={styles.cell}>
            <Text>Cell 1</Text>
        </View>
    );
};
