import { Text, View } from 'react-native';
import styles from '~/components/Navbar/styles';

interface Props {
    title: string;
}

export const Navbar: React.FC<Props> = ({ title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
};
