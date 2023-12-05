import { Ionicons } from '@expo/vector-icons';
import { Button, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useAuth } from '~/contexts/Auth';
import { selectUser } from '~/redux/slices/authSlice';
import { styles } from '~/screens/Settings/styles';
import { colors } from '~/styles/colors';

export const SettingsScreen: React.FC = () => {
    const { signOut } = useAuth();
    const user = useSelector(selectUser);

    return (
        <View>
            <View style={styles.userInfo}>
                <Ionicons name='person-outline' size={60} color='black' />
                <Text>{user?.name}</Text>
                <Text>{user?.email}</Text>
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
