import { StyleSheet } from 'react-native';
import { formStyles } from '~/styles/forms';

export const styles = StyleSheet.create({
    container: { ...formStyles.container },
    disabled: {
        ...formStyles.disabled,
    },
    errors: {
        ...formStyles.errors,
    },
    invalid: {
        ...formStyles.invalid,
    },
    pickerInput: {
        display: 'flex',
        justifyContent: 'center',
        ...formStyles.input,
    },
});
