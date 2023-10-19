import { StyleSheet } from 'react-native';
import { colors } from '~/styles/colors';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: colors.background,
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 15,
    },
});

export default styles;
