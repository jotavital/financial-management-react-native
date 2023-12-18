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
    input: {
        ...formStyles.input,
    },
    invalid: {
        ...formStyles.invalid,
    },
});
