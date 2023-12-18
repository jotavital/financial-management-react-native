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
        height: 160,
        width: 250,
    },
    logoContainer: {
        marginBottom: 30,
    },
    signUpText: {
        fontSize: 13,
        marginTop: 20,
    },
});

export default styles;
