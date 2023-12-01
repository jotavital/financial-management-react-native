import { NavigationContainer } from '@react-navigation/native';
import { preventAutoHideAsync } from 'expo-splash-screen';
import { Provider } from 'react-redux';
import { AuthProvider } from '~/contexts/Auth';
import { TransactionsProvider } from '~/contexts/Transactions';
import { RootNavigation } from '~/navigators';
import { store } from '~/redux/store';

preventAutoHideAsync();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AuthProvider>
                    <TransactionsProvider>
                        <RootNavigation />
                    </TransactionsProvider>
                </AuthProvider>
            </NavigationContainer>
        </Provider>
    );
}
