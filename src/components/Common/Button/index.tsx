import { GestureResponderEvent, Pressable, Text } from 'react-native';
import { styles } from '~/components/Common/Button/styles';
import { colors } from '~/styles/colors';

interface Props {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    color?: string;
}

export const Button: React.FC<Props> = ({ onPress, title, color }) => {
    return (
        <Pressable
            style={{ ...styles.button, backgroundColor: color ?? colors.blue }}
            onPress={onPress}
            android_ripple={{ color: colors.transparent }}
        >
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
};
