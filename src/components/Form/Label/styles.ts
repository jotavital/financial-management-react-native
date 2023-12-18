import { StyleSheet } from 'react-native';
import { formStyles } from '~/styles/forms';

export const styles = StyleSheet.create({
    disabled: {
        ...formStyles.disabled,
    },
    label: {
        fontSize: 15,
        marginBottom: 3,
    },
});
