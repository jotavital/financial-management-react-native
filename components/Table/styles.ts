import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    tableContainer: {
        minWidth: '100%',
        display: 'flex',
        borderColor: colors.darkGray,
        borderWidth: 0.6,
        borderRadius: 5,
    },
});

export default styles;
