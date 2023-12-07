import { StyleProp, Text, TextStyle } from 'react-native';
import { styles } from '~/components/Common/FormattedAmount/styles';
import { TransactionType, TransactionTypeEnum } from '~/types/transaction';
import { toBrl } from '~/utils/currency';

interface Props {
    amount: number;
    type: TransactionType;
    style?: StyleProp<TextStyle>;
}

export const FormattedAmount: React.FC<Props> = ({
    amount,
    type,
    style = {},
}) => {
    const textStyle =
        type === TransactionTypeEnum.Income
            ? styles.incomeText
            : styles.outcomeText;

    const finalStyle = Object.assign({ ...textStyle }, style);

    return <Text style={finalStyle}>{toBrl(amount)}</Text>;
};
