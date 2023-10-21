import { StyleSheet, ColorValue } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: colors.blue,
        display: 'flex',
        flexDirection: 'row',
        gap: 5
    },
    avatarContainer: {
        width: '15%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: colors.white,
    },
});

export default styles;
