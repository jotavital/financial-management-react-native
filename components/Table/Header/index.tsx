import { View } from 'react-native';
import { HeaderCell } from '~/components/Table/Header/Cell';
import styles from '~/components/Table/Header/styles';
import { TableColumns } from '~/components/Table/types';

interface Props {
    columns: TableColumns;
}

export const Header: React.FC<Props> = ({ columns }) => {
    return (
        <View style={styles.headerContainer}>
            {columns?.map((item) => {
                return <HeaderCell key={item.title} text={item.title} />;
            })}
        </View>
    );
};
