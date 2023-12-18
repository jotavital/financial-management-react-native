import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    borderBottom: {
        borderBottomColor: colors.darkGray,
        borderBottomWidth: 0.5,
    },
    borderRight: {
        borderRightColor: colors.darkGray,
        borderRightWidth: 0.5,
    },
    cell: {
        display: 'flex',
        flexBasis: 0,
        flexGrow: 1,
        height: 'auto',
        padding: 10,
    },
    empty: {
        justifyContent: 'center',
        padding: 10,
    },
    emptyText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
});

export default styles;
