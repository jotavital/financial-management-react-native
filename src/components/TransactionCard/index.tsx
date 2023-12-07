import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';
import { FormattedAmount } from '~/components/Common/FormattedAmount';
import { styles } from '~/components/TransactionCard/styles';
import { colors } from '~/styles/colors';
import { TransactionProps } from '~/types/transaction';

interface Props {
    transaction: TransactionProps;
}

export const TransactionCard: React.FC<Props> = ({ transaction }) => {
    const navigation = useNavigation();

    return (
        <Pressable
            style={styles.container}
            onPress={() => {
                // @ts-ignore
                navigation.navigate('EditTransaction', transaction);
            }}
            android_ripple={{ color: colors.background }}
        >
            <Text style={styles.title}>{transaction.title}</Text>
            <View style={styles.rightContent}>
                <FormattedAmount
                    amount={transaction.amount}
                    type={transaction.type}
                    style={{ fontWeight: 'bold' }}
                />
                <Text style={styles.date}>{transaction.date}</Text>
            </View>
        </Pressable>
    );
};
