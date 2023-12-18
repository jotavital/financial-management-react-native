import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    borderRight: {
        borderRightColor: colors.darkGray,
        borderRightWidth: 0.5,
    },
    headerCell: {
        borderBottomColor: colors.darkGray,
        borderBottomWidth: 0.5,
        display: 'flex',
        flexBasis: 0,
        flexGrow: 1,
        height: 'auto',
        padding: 10,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    headerItem: {
        display: 'flex',
        flexGrow: 1,
        height: 'auto',
        padding: 10,
    },
    headerText: {
        fontWeight: 'bold',
    },
});

export default styles;
