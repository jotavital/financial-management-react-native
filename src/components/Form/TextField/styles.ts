import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

export const styles = StyleSheet.create({
    label: {
        fontSize: 17,
        marginBottom: 3,
    },
    input: {
        borderColor: colors.darkGray,
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 6,
        marginBottom: 15,
    },
});
