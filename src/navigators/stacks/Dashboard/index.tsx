import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DashboardScreen } from '~/screens/Dashboard';
import { EditTransactionScreen } from '~/screens/EditTransaction';
import { colors } from '~/styles/colors';

const Stack = createNativeStackNavigator();

export const DashboardStackNavigator: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                presentation: 'modal',
                contentStyle: { backgroundColor: colors.white },
            }}
        >
            <Stack.Screen
                name='DashboardScreen'
                component={DashboardScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='EditTransaction'
                component={EditTransactionScreen}
                options={{ headerTitle: 'Editar transação' }}
            />
        </Stack.Navigator>
    );
};
