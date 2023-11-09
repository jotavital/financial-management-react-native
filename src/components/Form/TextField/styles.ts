import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

export const styles = StyleSheet.create({
    input: {
        borderColor: colors.darkGray,
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 6,
        height: 43,
        maxHeight: 43,
    },
    invalid: {
        borderColor: colors.red,
        borderWidth: 0.7,
        borderRadius: 5,
        padding: 6,
    },
    errors: {
        color: colors.red,
    },
    disabled: {
        opacity: 0.4,
    },
});
