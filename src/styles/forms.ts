import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const formStyles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    input: {
        borderRadius: 20,
        padding: 10,
        height: 46,
        maxHeight: 46,
        backgroundColor: colors.background,
    },
    invalid: {
        borderColor: colors.red,
        borderWidth: 0.7,
    },
    errors: {
        color: colors.red,
        marginTop: 2,
        marginLeft: 5,
    },
    disabled: {
        opacity: 0.4,
    },
});

export { formStyles };
