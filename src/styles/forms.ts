import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const formStyles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    disabled: {
        opacity: 0.4,
    },
    errors: {
        color: colors.red,
        marginLeft: 5,
        marginTop: 2,
    },
    input: {
        backgroundColor: colors.background,
        borderRadius: 20,
        height: 46,
        maxHeight: 46,
        padding: 10,
    },
    invalid: {
        borderColor: colors.red,
        borderWidth: 0.7,
    },
});

export { formStyles };
