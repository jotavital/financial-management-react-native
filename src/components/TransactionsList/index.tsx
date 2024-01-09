import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';
import { TransactionCard } from '~/components/TransactionCard';
import { styles } from '~/components/TransactionsList/styles';
import { colors } from '~/styles/colors';
import { TransactionProps } from '~/types/transaction';

interface Props {
    transactions: TransactionProps[];
}

export const TransactionsList: React.FC<Props> = ({ transactions }) => {
    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Transações</Text>
                <Pressable
                    style={styles.seeAll}
                    // @ts-expect-error because of navigation type
                    onPress={() => navigate('TransactionsList')}
                >
                    <Text style={styles.seeAllText}>Todas</Text>
                    <Entypo
                        name='chevron-thin-right'
                        size={15}
                        color={colors.blue}
                    />
                </Pressable>
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
