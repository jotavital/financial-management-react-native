import { ReactElement } from 'react';
import { Text, View } from 'react-native';
import styles from '~/components/Table/Header/styles';
import { TableColumns } from '~/components/Table/types';

interface Props<T> {
    columns: TableColumns<T>;
}

export const Header = <T,>({ columns }: Props<T>): ReactElement => {
    return (
        <View style={styles.headerContainer}>
            {columns?.map((item, index) => {
                const borderRightStyle =
                    index !== columns.length - 1 ? styles.borderRight : null;

                return (
                    <View
                        key={index}
                        style={[styles.headerCell, borderRightStyle]}
                    >
                        <Text style={styles.headerText}>{item?.title}</Text>
                    </View>
                );
            })}
        </View>
    );
};
