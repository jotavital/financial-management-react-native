import { Button, View } from 'react-native';
import { useAuth } from '~/contexts/Auth';
import { colors } from '~/styles/colors';

export const SettingsScreen: React.FC = () => {
    const { signOut } = useAuth();

    return (
        <View>
            <Button title='Sair' color={colors.red} onPress={() => signOut()} />
        </View>
    );
};
