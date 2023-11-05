import { ActivityIndicator, ColorValue, Text, View } from 'react-native';
import styles from '~/components/Dashboard/Card/styles';
import { colorStyles } from '~/styles/colors';
import { ReactElement } from 'react';

interface Props {
    title: string;
    text?: string;
    color?: ColorValue;
    icon?: ReactElement;
    isLoading: boolean;
}

export const Card: React.FC<Props> = ({
    title,
    text,
    color,
    icon,
    isLoading,
}) => {
    return (
        <View style={styles.card}>
            <View style={styles.amountContainer}>
                <Text style={[styles.title, colorStyles[color]]}>{title}</Text>
                <Text style={[styles.amountText, colorStyles[color]]}>
                    {isLoading ? <ActivityIndicator /> : text}
                </Text>
            </View>
            <View style={styles.iconContainer}>{icon}</View>
        </View>
    );
};
