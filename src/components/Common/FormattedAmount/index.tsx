import { Text } from 'react-native';
import { styles } from '~/components/Common/FormattedAmount/styles';
import { TransactionType, TransactionTypeEnum } from '~/types/transaction';
import { toBrl } from '~/utils/currency';

interface Props {
    amount: number;
    type: TransactionType;
}

export const FormattedAmount: React.FC<Props> = ({ amount, type }) => {
    return (
        <Text
            style={
                type === TransactionTypeEnum.Income
                    ? styles.incomeText
                    : styles.outcomeText
            }
        >
            {toBrl(amount)}
        </Text>
    );
};
