import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        maxWidth: '100%',
        borderRadius: 7,
        elevation: 4,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        minHeight: 60,
        alignItems: 'center',
    },
    rightContent: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 15,
        fontWeight: '500',
    },
    amount: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 12,
    },
});
