import {
    GestureResponderEvent,
    Pressable,
    StyleProp,
    Text,
    ViewStyle,
} from 'react-native';
import { styles } from '~/components/Common/Button/styles';
import { colors } from '~/styles/colors';

interface Props {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    color?: string;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
}

export const Button: React.FC<Props> = ({
    onPress,
    title,
    color,
    disabled,
    style,
}) => {
    const finalStyle = Object.assign(
        {
            ...styles.button,
            backgroundColor: color ?? colors.blue,
            ...(disabled && styles.disabled),
        },
        style
    );

    return (
        <Pressable
            style={finalStyle}
            onPress={onPress}
            android_ripple={{ color: colors.transparent }}
            disabled={disabled}
        >
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
};
