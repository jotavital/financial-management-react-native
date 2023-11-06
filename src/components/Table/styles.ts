import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    tableContainer: {
        minWidth: '100%',
        display: 'flex',
        borderColor: colors.darkGray,
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: colors.white,
    },
});

export default styles;
