import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
    },
    inputContainer: {
        display: 'flex',
        gap: 5,
        width: '85%',
    },
    link: {
        color: colors.blue,
        fontSize: 14,
        textDecorationLine: 'underline',
    },
    logo: {
        height: 200,
        width: 300,
    },
    logoContainer: {
        marginBottom: 30,
    },
    signUpText: {
        fontSize: 13,
        marginTop: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default styles;
