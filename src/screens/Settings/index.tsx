import { Ionicons } from '@expo/vector-icons';
import { Button, View } from 'react-native';
import { useAuth } from '~/contexts/Auth';
import { styles } from '~/screens/Settings/styles';
import { colors } from '~/styles/colors';

export const SettingsScreen: React.FC = () => {
    const { signOut } = useAuth();

    return (
        <View>
            <View style={styles.userInfo}>
                <Ionicons name='person-outline' size={60} color='black' />
            </View>
            <View>
                <Button
                    title='Sair'
                    color={colors.red}
                    onPress={() => signOut()}
                />
            </View>
        </View>
    );
};
