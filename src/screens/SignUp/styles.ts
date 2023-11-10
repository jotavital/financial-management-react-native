import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    inputContainer: {
        display: 'flex',
        width: '85%',
    },
    logo: {
        width: 250,
        height: 250,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
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
