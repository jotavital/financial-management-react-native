import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useAuth } from '~/contexts/Auth';
import { MainTabNavigator } from '~/navigators/tabs/Main';
import { SignInScreen } from '~/screens/SignIn';
import { SignUpScreen } from '~/screens/SignUp';
import { colors } from '~/styles/colors';

const Stack = createNativeStackNavigator();

export const RootNavigation: React.FC = () => {
    const { isSignedIn } = useAuth();

    return (
        <NavigationContainer>
            <View style={styles.container}>
                <StatusBar style='light' backgroundColor={colors.blue} />

                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {isSignedIn ? (
                        <Stack.Screen
                            name='MainTabs'
                            component={MainTabNavigator}
                        />
                    ) : (
                        <>
                            <Stack.Screen
                                name='SignIn'
                                component={SignInScreen}
                            />
                            <Stack.Screen
                                name='SignUp'
                                component={SignUpScreen}
                            />
                        </>
                    )}
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        marginTop: 50,
    },
});
