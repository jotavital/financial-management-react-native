import { AuthProvider } from '~/contexts/Auth';
import { RootNavigation } from '~/navigators';

export default function App() {
    return (
        <AuthProvider>
            <RootNavigation />
        </AuthProvider>
    );
}
