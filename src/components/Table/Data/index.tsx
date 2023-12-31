import { ReactElement } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from '~/components/Table/Data/styles';
import { TableColumns } from '~/components/Table/types';
import { colors } from '~/styles/colors';

interface Props<T> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[];
    columns: TableColumns<T>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onPress?: (item: any) => void;
}

export const Data = <T,>({
    data,
    columns,
    onPress,
}: Props<T>): ReactElement => {
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
                    <Pressable
                        key={item?.id}
                        style={styles.row}
                        onPress={() => onPress(item)}
                        android_ripple={{ color: colors.background }}
                    >
                        {columns?.map((column, index) => {
                            const borderRightStyle =
                                index !== columns.length - 1
                                    ? styles.borderRight
                                    : null;
                            const borderBottomStyle =
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
                    </Pressable>
                );
            })}
        </>
    );
};
