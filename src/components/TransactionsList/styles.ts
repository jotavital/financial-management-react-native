import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 12,
    },
    title: {
        fontWeight: '400',
        fontSize: 20,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    seeAll: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
    },
    seeAllText: {
        color: colors.blue,
        fontSize: 15,
    },
});
