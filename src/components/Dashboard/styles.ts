import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    bodyContainer: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: '100%',
        padding: 20,
        position: 'absolute',
        top: '30%',
        width: '100%',
    },
    contentContainer: {
        minHeight: '100%',
    },
    headerContainer: {
        alignItems: 'center',
        backgroundColor: colors.blue,
        display: 'flex',
        gap: 10,
        height: '35%',
        padding: 15,
        position: 'absolute',
        top: 0,
        width: '100%',
    },
});

export default styles;
