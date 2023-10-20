import { View } from 'react-native';
import styles from '~/components/Table/Data/styles';
import { TableColumns } from '~/components/Table/types';

interface Props {
    data: any; //TODO: tipar
    columns: TableColumns;
}

export const Data: React.FC<Props> = ({ data, columns }) => {
    return (
        <>
            {data?.map((item) => {
                return (
                    <View key={item?.id} style={styles.row}>
                        {columns?.map((column) => {
                            return (
                                <View key={column.title} style={styles.cell}>
                                    {column.render(item)}
                                </View>
                            );
                        })}
                    </View>
                );
            })}
        </>
    );
};
