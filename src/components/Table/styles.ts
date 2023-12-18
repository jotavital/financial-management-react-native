import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    tableContainer: {
        backgroundColor: colors.white,
        borderColor: colors.darkGray,
        borderRadius: 5,
        borderWidth: 0.5,
        display: 'flex',
        minWidth: '100%',
    },
});

export default styles;
