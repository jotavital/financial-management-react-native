import { Entypo } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { TransactionCard } from '~/components/TransactionCard';
import { styles } from '~/components/TransactionsList/styles';
import { colors } from '~/styles/colors';
import { TransactionProps } from '~/types/transaction';

interface Props {
    transactions: TransactionProps[];
}

export const TransactionsList: React.FC<Props> = ({ transactions }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Transações</Text>
                <View style={styles.seeAll}>
                    <Text style={styles.seeAllText}>Todas</Text>
                    <Entypo
                        name='chevron-thin-right'
                        size={15}
                        color={colors.blue}
                    />
                </View>
            </View>
            {transactions?.map((transaction) => {
                return (
                    <TransactionCard
                        key={transaction.id}
                        transaction={transaction}
                    />
                );
            })}
        </View>
    );
};
