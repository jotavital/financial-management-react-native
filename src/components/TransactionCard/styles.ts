import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

export const styles = StyleSheet.create({
    amount: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    container: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 7,
        display: 'flex',
        elevation: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxWidth: '100%',
        minHeight: 60,
        padding: 10,
    },
    date: {
        fontSize: 12,
    },
    rightContent: {
        alignItems: 'flex-end',
        display: 'flex',
    },
    title: {
        fontSize: 15,
        fontWeight: '500',
    },
});
