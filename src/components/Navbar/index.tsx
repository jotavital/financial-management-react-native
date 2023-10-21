import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '~/components/Navbar/styles';
import { colors } from '~/styles/colors';

interface Props {
    title: string;
}

export const Navbar: React.FC<Props> = ({ title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Ionicons
                    name='person-circle-outline'
                    size={38}
                    color={colors.white}
                    onPress={() => alert('ok')}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
};
