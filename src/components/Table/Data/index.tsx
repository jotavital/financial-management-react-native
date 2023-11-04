import { Text, View } from 'react-native';
import styles from '~/components/Table/Data/styles';
import { TableColumns } from '~/components/Table/types';

interface Props {
    data: any[];
    columns: TableColumns;
}

export const Data: React.FC<Props> = ({ data, columns }) => {
    if (!data || !data?.length) {
        return (
            <View style={[styles.row, styles.empty]}>
                <Text style={styles.emptyText}>
                    Nenhum registro encontrado.
                </Text>
            </View>
        );
    }

    return (
        <>
            {data?.map((item, rowIndex) => {
                return (
                    <View key={item?.id} style={styles.row}>
                        {columns?.map((column, index) => {
                            let borderRightStyle =
                                index !== columns.length - 1
                                    ? styles.borderRight
                                    : null;
                            let borderBottomStyle =
                                rowIndex !== data.length - 1
                                    ? styles.borderBottom
                                    : null;

                            return (
                                <View
                                    key={column.title}
                                    style={[
                                        styles.cell,
                                        borderRightStyle,
                                        borderBottomStyle,
                                    ]}
                                >
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
