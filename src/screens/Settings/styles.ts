import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

export const styles = StyleSheet.create({
    avatar: {
        backgroundColor: colors.lighGray,
        borderRadius: 50,
        margin: 10,
        marginRight: 15,
        padding: 10,
    },
    buttons: {
        padding: 20,
    },
    userInfo: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        width: '75%',
    },
    userInfoContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
    },
    userName: {
        fontSize: 20,
        fontWeight: '500',
    },
});
