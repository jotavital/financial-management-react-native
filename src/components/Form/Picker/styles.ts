import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 6,
    },
    pickerInput: {
        borderColor: colors.darkGray,
        borderWidth: 0.5,
        borderRadius: 5,
        maxHeight: 43,
        display: 'flex',
        justifyContent: 'center',
    },
    invalid: {
        borderColor: colors.red,
        borderWidth: 0.7,
        borderRadius: 5,
    },
    errors: {
        color: colors.red,
    },
});