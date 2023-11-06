import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { CreateTransactionScreen } from '~/screens/CreateTransaction';
import { DashboardScreen } from '~/screens/Dashboard';
import { EditTransactionScreen } from '~/screens/EditTransaction';
import { colors } from '~/styles/colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const DashboardStack = () => {
    return (
        <Stack.Navigator screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen
                name='DashboardScreen'
                component={DashboardScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='EditTransaction'
                component={EditTransactionScreen}
                options={{ headerTitle: 'Editar movimentação' }}
            />
        </Stack.Navigator>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <StatusBar style='auto' />

                <Tab.Navigator
                    screenOptions={{
                        tabBarActiveTintColor: colors.blue,
                        tabBarInactiveTintColor: colors.darkGray,
                        headerShown: false,
                    }}
                >
                    <Tab.Screen
                        name='Dashboard'
                        component={DashboardStack}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <AntDesign
                                    name='home'
                                    size={24}
                                    color={color}
                                />
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
                        component={View}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <AntDesign
                                    name='setting'
                                    size={24}
                                    color={color}
                                />
                            ),
                            tabBarLabel: 'Configurações',
                            headerTitle: 'Configurações',
                        }}
                    />
                </Tab.Navigator>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
    },
});
