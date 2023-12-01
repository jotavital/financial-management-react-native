import { StyleSheet } from 'react-native';
import { formStyles } from '~/styles/forms';

export const styles = StyleSheet.create({
    container: { ...formStyles.container },
    input: {
        ...formStyles.input,
    },
    invalid: {
        ...formStyles.invalid,
    },
    errors: {
        ...formStyles.errors,
    },
    disabled: {
        ...formStyles.disabled,
    },
});
