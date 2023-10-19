import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Dashboard } from '~/components/Dashboard';
import { Navbar } from '~/components/Navbar';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Navbar />
            <Dashboard />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
    },
});
