import { Text } from 'react-native';
import { styles } from '~/components/Form/Label/styles';

interface Props {
    text: string;
}

export const Label: React.FC<Props> = ({ text }) => {
    return <Text style={styles.label}>{text}</Text>;
};
