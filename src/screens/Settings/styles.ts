import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    avatar: {
        borderRadius: 100,
        flexGrow: 1,
        width: '100%',
    },
    avatarContainer: {
        flexGrow: 1,
        padding: 5,
    },
    buttons: {
        padding: 20,
    },
    userInfo: {
        alignItems: 'center',
        flexDirection: 'row',
        flexGrow: 2,
        justifyContent: 'space-between',
        padding: 10,
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
