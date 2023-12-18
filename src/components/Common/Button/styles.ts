import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

export const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
        height: 46,
        justifyContent: 'center',
        padding: 10,
        width: '100%',
    },
    disabled: {
        color: colors.white,
        fontSize: 15,
        fontWeight: '500',
        opacity: 0.7,
    },
    title: {
        color: colors.white,
        fontSize: 15,
        fontWeight: '500',
    },
});
