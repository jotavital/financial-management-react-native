import { StyleSheet, ColorValue } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: colors.blue,
    },
    avatarContainer: {
        width: '15%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
