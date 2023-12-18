import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

export const styles = StyleSheet.create({
    userInfoContainer: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    userInfo: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '75%',
    },
    avatar: {
        padding: 10,
        backgroundColor: colors.lighGray,
        borderRadius: 50,
        margin: 10,
        marginRight: 15,
    },
    userName: {
        fontSize: 20,
        fontWeight: '500',
    },
    buttons: {
        padding: 20,
    },
});
