import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

export const styles = StyleSheet.create({
    button: {
        height: 46,
        width: '100%',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    title: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 15,
    },
});
