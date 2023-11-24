import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { AuthProvider } from '~/contexts/Auth';
import { RootNavigation } from '~/navigators';
import { store } from '~/redux/store';

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AuthProvider>
                    <RootNavigation />
                </AuthProvider>
            </NavigationContainer>
        </Provider>
    );
}
