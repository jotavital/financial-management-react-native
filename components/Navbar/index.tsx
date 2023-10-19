import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '~/components/Navbar/styles';
import { colors } from '~/styles/colors';

export const Navbar: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Ionicons
                    name='person-circle-outline'
                    size={45}
                    color={colors.white}
                    onPress={() => alert('ok')}
                />
            </View>
        </View>
    );
};
