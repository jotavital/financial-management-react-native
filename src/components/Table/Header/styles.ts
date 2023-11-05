import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    headerItem: {
        height: 'auto',
        display: 'flex',
        flexGrow: 1,
        padding: 10,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    headerCell: {
        height: 'auto',
        display: 'flex',
        padding: 10,
        flexGrow: 1,
        flexBasis: 0,
        borderBottomColor: colors.darkGray,
        borderBottomWidth: 0.5,
    },
    headerText: {
        fontWeight: 'bold',
    },
    borderRight: {
        borderRightColor: colors.darkGray,
        borderRightWidth: 0.5,
    },
});

export default styles;
