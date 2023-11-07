import { Text } from 'react-native';
import { styles } from '~/components/Form/Label/styles';

interface Props {
    text: string;
    disabled?: boolean;
}

export const Label: React.FC<Props> = ({ text, disabled = false }) => {
    return (
        <Text style={[styles.label, disabled && styles.disabled]}>{text}</Text>
    );
};
