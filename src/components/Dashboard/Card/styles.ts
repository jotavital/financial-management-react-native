import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: 100,
        backgroundColor: colors.white,
        borderRadius: 7,
        elevation: 5,
        shadowColor: colors.black,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    amountContainer: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
    },
    amountText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 16,
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
});

export default styles;
