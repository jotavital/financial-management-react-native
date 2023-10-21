import { StyleSheet, ColorValue } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: colors.blue,
        display: 'flex',
        flexDirection: 'row',
    },
    titleContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: colors.white,
    },
});

export default styles;
