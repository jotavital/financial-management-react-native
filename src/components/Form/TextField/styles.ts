import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    label: {
        fontSize: 17,
        marginBottom: 3,
    },
    input: {
        borderColor: colors.darkGray,
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 6,
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
});
