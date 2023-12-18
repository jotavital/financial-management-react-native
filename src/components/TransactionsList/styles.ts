import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 12,
    },
    header: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    seeAll: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
    },
    seeAllText: {
        color: colors.blue,
        fontSize: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: '400',
    },
});
