import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ActivityIndicator, Alert, View } from 'react-native';
import { InferType } from 'yup';
import { Button } from '~/components/Common/Button';
import { createTransactionSchema } from '~/components/CreateTransaction/schema';
import { styles } from '~/components/CreateTransaction/styles';
import { CurrencyField } from '~/components/Form/CurrencyField';
import { DateTimePicker } from '~/components/Form/DateTimePicker';
import { Picker } from '~/components/Form/Picker';
import { TextField } from '~/components/Form/TextField';
import { useTransactions } from '~/contexts/Transactions';
import { colors } from '~/styles/colors';
import { TransactionProps, TransactionTypeEnum } from '~/types/transaction';

interface Props {
    transaction?: TransactionProps;
}

export const CreateTransaction: React.FC<Props> = ({ transaction }: Props) => {
    const {
        updateTransaction,
        storeTransaction,
        deleteTransaction,
        isLoading,
    } = useTransactions();

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
        setValue,
        trigger,
        watch,
    } = useForm<InferType<typeof createTransactionSchema>>({
        resolver: yupResolver(createTransactionSchema),
    });

    const onSubmit = (data: TransactionProps) => {
        if (transaction) {
            return updateTransaction(transaction.id, data);
        }

        storeTransaction(data, reset);
    };

    const handleConfirmDelete = (transactionId: string) => {
        Alert.alert('Tem certeza?', 'Deseja mesmo deletar esta movimentação?', [
            {
                text: 'Voltar',
                style: 'cancel',
            },
            {
                text: 'Excluir',
                onPress: () => deleteTransaction(transactionId),
            },
        ]);
    };

    useEffect(() => {
        if (transaction) {
            setValue('title', transaction.title);
            setValue('amount', transaction.amount);
            setValue('date', transaction.date);
            setValue('type', transaction.type);
        }
    }, [transaction]);

    return (
        <View style={styles.container}>
            <TextField
                name='title'
                placeholder='Título'
                control={control}
                errors={errors.title}
                editable={!isLoading}
            />
            <CurrencyField
                name='amount'
                placeholder='Valor'
                errors={errors.amount}
                setValue={setValue}
                trigger={trigger}
                watch={watch}
                editable={!isLoading}
            />
            <DateTimePicker
                name='date'
                placeholder='Data'
                control={control}
                errors={errors.date}
                setValue={setValue}
                trigger={trigger}
                editable={!isLoading}
            />
            <Picker
                name='type'
                setValue={setValue}
                errors={errors.type}
                items={[
                    { label: 'Receita', value: TransactionTypeEnum.Income },
                    { label: 'Despesa', value: TransactionTypeEnum.Outcome },
                ]}
                trigger={trigger}
                watch={watch}
                editable={!isLoading}
                placeholder='Selecione o tipo'
            />

            <View style={styles.buttonContainer}>
                <Button
                    onPress={handleSubmit(onSubmit)}
                    title={'Salvar'}
                    color={colors.green}
                    disabled={isLoading}
                    style={transaction ? styles.width50 : styles.width100}
                />
                {transaction && (
                    <Button
                        onPress={() => handleConfirmDelete(transaction?.id)}
                        title={'Excluir'}
                        color={colors.red}
                        disabled={isLoading}
                        style={styles.width50}
                    />
                )}
            </View>

            {isLoading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size='large' />
                </View>
            )}
        </View>
    );
};
