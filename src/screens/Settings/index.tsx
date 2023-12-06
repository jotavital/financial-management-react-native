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
            <View style={styles.userInfoContainer}>
                <View style={styles.avatar}>
                    <Ionicons name='person-outline' size={60} color='white' />
                </View>
                <View>
                    <Text style={styles.userName}>{user?.name}</Text>
                    <Text>{user?.email}</Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <Button
                    title='Sair'
                    color={colors.red}
                    onPress={() => signOut()}
                />
            </View>
        </View>
    );
};
