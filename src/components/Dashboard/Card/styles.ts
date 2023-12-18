import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    amountContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '50%',
    },
    amountText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: colors.white,
        borderRadius: 7,
        display: 'flex',
        elevation: 5,
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        shadowColor: colors.black,
        width: '90%',
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
    },
});

export default styles;
