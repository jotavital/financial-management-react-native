import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from '~/contexts/Auth';
import { RootNavigation } from '~/navigators';

export default function App() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <RootNavigation />
            </AuthProvider>
        </NavigationContainer>
    );
}
