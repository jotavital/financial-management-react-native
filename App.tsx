import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Navbar } from '~/components/Navbar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from '~/screens/Dashboard';
import { CreateIncomeScreen } from '~/screens/CreateIncome';
import { colors } from '~/styles/colors';
import { getHeaderTitle } from '@react-navigation/elements';
import { AntDesign } from '@expo/vector-icons';
import { CreateOutcomeScreen } from '~/screens/CreateOutcome';

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
                        name='CreateIncome'
                        component={CreateIncomeScreen}
                        options={{
                            tabBarIcon: () => (
                                <AntDesign
                                    name='arrowup'
                                    size={24}
                                    color={colors.green}
                                />
                            ),
                            tabBarLabel: 'Nova Receita',
                            headerTitle: 'Nova Receita',
                        }}
                    />
                    <Tab.Screen
                        name='CreateOutcome'
                        component={CreateOutcomeScreen}
                        options={{
                            tabBarIcon: () => (
                                <AntDesign
                                    name='arrowdown'
                                    size={24}
                                    color={colors.red}
                                />
                            ),
                            tabBarLabel: 'Nova Despesa',
                            headerTitle: 'Nova Despesa',
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
