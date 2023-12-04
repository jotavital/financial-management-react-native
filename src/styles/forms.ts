import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const formStyles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    input: {
        borderColor: colors.lighGray,
        borderWidth: 0.5,
        borderRadius: 6,
        padding: 6,
        height: 43,
        maxHeight: 43,
        backgroundColor: colors.white,
    },
    invalid: {
        borderColor: colors.red,
        borderWidth: 0.7,
        borderRadius: 5,
    },
    errors: {
        color: colors.red,
    },
    disabled: {
        opacity: 0.4,
    },
});

export { formStyles };
