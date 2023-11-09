import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardStackNavigator } from '~/navigators/stacks/Dashboard';
import { CreateTransactionScreen } from '~/screens/CreateTransaction';
import { SettingsScreen } from '~/screens/Settings';
import { colors } from '~/styles/colors';

const Tab = createBottomTabNavigator();

export const MainTabNavigator: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.blue,
                tabBarInactiveTintColor: colors.darkGray,
                headerShown: false,
            }}
        >
            <Tab.Screen
                name='Dashboard'
                component={DashboardStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name='home' size={24} color={color} />
                    ),
                    tabBarLabel: 'Dashboard',
                }}
            />
            <Tab.Screen
                name='CreateTransaction'
                component={CreateTransactionScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons
                            name='compare-arrows'
                            size={24}
                            color={color}
                        />
                    ),
                    tabBarLabel: 'Nova Movimentação',
                    headerTitle: 'Nova Movimentação',
                }}
            />
            <Tab.Screen
                name='Settings'
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name='setting' size={24} color={color} />
                    ),
                    tabBarLabel: 'Configurações',
                    headerTitle: 'Configurações',
                }}
            />
        </Tab.Navigator>
    );
};
