import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { MainTabNavigator } from '~/navigators/tabs/Main';
import { selectIsSignedIn } from '~/redux/slices/authSlice';
import { SignInScreen } from '~/screens/SignIn';
import { SignUpScreen } from '~/screens/SignUp';
import { colors } from '~/styles/colors';

const Stack = createNativeStackNavigator();

export const RootNavigation: React.FC = () => {
    const isSignedIn = useSelector(selectIsSignedIn);

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
        </SafeAreaView>
    );
};
