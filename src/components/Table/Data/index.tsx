import { useNavigation } from '@react-navigation/native';
import { ReactElement } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from '~/components/Table/Data/styles';
import { TableColumns } from '~/components/Table/types';
import { colors } from '~/styles/colors';

interface Props<T> {
    data: any[];
    columns: TableColumns<T>;
}

export const Data = <T,>({ data, columns }: Props<T>): ReactElement => {
    const navigation = useNavigation();

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
                        onPress={() =>
                            navigation.navigate('EditTransaction' as never)
                        }
                        android_ripple={{ color: colors.background }}
                    >
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
                    </Pressable>
                );
            })}
        </>
    );
};
