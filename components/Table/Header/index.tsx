import { Text, View } from 'react-native';
import styles from '~/components/Table/Header/styles';

export const Header: React.FC = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerItem}>
                <Text>Header 1</Text>
            </View>
            <View style={styles.headerItem}>
                <Text>Header 2</Text>
            </View>
            <View style={styles.headerItem}>
                <Text>Header 3</Text>
            </View>
            <View style={styles.headerItem}>
                <Text>Header 4</Text>
            </View>
        </View>
    );
};
