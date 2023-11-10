import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useAuth } from '~/contexts/Auth';
import { styles } from '~/navigators/styles';
import { MainTabNavigator } from '~/navigators/tabs/Main';
import { SignInScreen } from '~/screens/SignIn';
import { SignUpScreen } from '~/screens/SignUp';
import { colors } from '~/styles/colors';

const Stack = createNativeStackNavigator();

export const RootNavigation: React.FC = () => {
    const { isSignedIn } = useAuth();

    return (
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
                        <Stack.Screen name='SignIn' component={SignInScreen} />
                        <Stack.Screen name='SignUp' component={SignUpScreen} />
                    </>
                )}
            </Stack.Navigator>
        </View>
    );
};
