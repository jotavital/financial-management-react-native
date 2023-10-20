import { Text, View } from 'react-native';
import styles from '~/components/Table/Header/Cell/styles';

interface Props {
    text: string;
}

export const HeaderCell: React.FC<Props> = ({ text }) => {
    return (
        <View style={styles.headerCell}>
            <Text>{text}</Text>
        </View>
    );
};
