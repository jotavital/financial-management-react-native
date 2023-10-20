import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    cell: {
        borderColor: colors.darkGray,
        borderWidth: 0.6,
        height: 'auto',
        display: 'flex',
        padding: 10,
        width: '50%'
    },
});

export default styles;
