import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Navbar } from '~/components/Navbar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from '~/screens/Dashboard';
import { CreateTransactionScreen } from '~/screens/CreateTransaction';
import { colors } from '~/styles/colors';
import { getHeaderTitle } from '@react-navigation/elements';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <StatusBar style='auto' />

                <Tab.Navigator
                    screenOptions={{
                        tabBarActiveTintColor: colors.blue,
                        tabBarInactiveTintColor: colors.darkGray,
                        header: ({ navigation, route, options }) => {
                            return (
                                <Navbar
                                    title={getHeaderTitle(options, route.name)}
                                />
                            );
                        },
                    }}
                >
                    <Tab.Screen
                        name='Dashboard'
                        component={DashboardScreen}
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
