import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    cell: {
        height: 'auto',
        display: 'flex',
        padding: 10,
        flexGrow: 1,
        flexBasis: 0,
    },
    borderRight: {
        borderRightColor: colors.darkGray,
        borderRightWidth: 0.5,
    },
    borderBottom: {
        borderBottomColor: colors.darkGray,
        borderBottomWidth: 0.5,
    },
    empty: {
        padding: 10,
        justifyContent: 'center',
    },
    emptyText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default styles;
