import { Text, View } from 'react-native';
import styles from '~/components/Table/Header/styles';
import { TableColumns } from '~/components/Table/types';

interface Props {
    columns: TableColumns;
}

export const Header: React.FC<Props> = ({ columns }) => {
    return (
        <View style={styles.headerContainer}>
            {columns?.map((item, index) => {
                let borderRightStyle =
                    index !== columns.length - 1 ? styles.borderRight : null;

                return (
                    <View
                        key={index}
                        style={[styles.headerCell, borderRightStyle]}
                    >
                        <Text>{item?.title}</Text>
                    </View>
                );
            })}
        </View>
    );
};
