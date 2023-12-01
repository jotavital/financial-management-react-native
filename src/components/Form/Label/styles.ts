import { StyleSheet } from 'react-native';
import { formStyles } from '~/styles/forms';

export const styles = StyleSheet.create({
    label: {
        fontSize: 15,
        marginBottom: 3,
    },
    disabled: {
        ...formStyles.disabled,
    },
});
