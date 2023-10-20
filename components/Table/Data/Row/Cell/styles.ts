import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    cell: {
        borderColor: colors.darkGray,
        borderWidth: 0.6,
        height: 'auto',
        display: 'flex',
        flexGrow: 1,
        padding: 10,
    },
});

export default styles;
