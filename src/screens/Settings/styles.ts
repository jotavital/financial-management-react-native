import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

export const styles = StyleSheet.create({
    userInfoContainer: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        padding: 10,
        backgroundColor: colors.lighGray,
        borderRadius: 50,
        margin: 10,
        marginRight: 18,
    },
    userName: {
        fontSize: 20,
        fontWeight: '500',
    },
    buttons: {
        padding: 20,
    },
});
