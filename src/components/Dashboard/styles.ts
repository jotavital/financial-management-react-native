import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    contentContainer: {
        minHeight: '100%',
    },
    headerContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: 15,
        backgroundColor: colors.blue,
        position: 'absolute',
        top: 0,
        height: '35%',
    },
    bodyContainer: {
        backgroundColor: colors.white,
        width: '100%',
        padding: 20,
        height: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        position: 'absolute',
        top: '30%',
    },
});

export default styles;
