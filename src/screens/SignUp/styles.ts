import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    inputContainer: {
        display: 'flex',
        width: '85%',
        gap: 5,
    },
    logoContainer: {
        marginBottom: 30,
    },
    logo: {
        width: 250,
        height: 160,
    },
    signUpText: {
        fontSize: 13,
        marginTop: 20,
    },
    link: {
        textDecorationLine: 'underline',
        color: colors.blue,
        fontSize: 14,
    },
});

export default styles;
