import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    ActivityIndicator,
    Alert,
    Button,
    ToastAndroid,
    View,
} from 'react-native';
import { InferType } from 'yup';
import { createTransactionSchema } from '~/components/CreateTransaction/schema';
import { styles } from '~/components/CreateTransaction/styles';
import { CurrencyField } from '~/components/Form/CurrencyField';
import { DateTimePicker } from '~/components/Form/DateTimePicker';
import { Picker } from '~/components/Form/Picker';
import { TextField } from '~/components/Form/TextField';
import { TransactionProps, TransactionTypeEnum } from '~/models/transaction';
import api from '~/services/api';
import { colors } from '~/styles/colors';

interface Props {
    transaction: TransactionProps;
}

export const CreateTransaction: React.FC<Props> = ({ transaction }: Props) => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState<boolean>(false);

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

    // mover as api para provider
    const onSubmit = (data: unknown /* TODO: tipar*/) => {
        if (transaction) {
            return api
                .put(
                    `users/65446ba0f431cd94e768a0f3/transactions/${transaction?.id}`,
                    data
                )
                .then((response) => {
                    ToastAndroid.show(
                        'Dados salvos com sucesso.',
                        ToastAndroid.SHORT
                    );

                    if (response) {
                        // @ts-ignore
                        navigation.goBack();
                    }
                });
        }

        api.post(`users/65446ba0f431cd94e768a0f3/transactions`, data).then(
            () => {
                reset();
                ToastAndroid.show(
                    'Dados salvos com sucesso.',
                    ToastAndroid.SHORT
                );
            }
        );
    };

    const handleConfirmDelete = (transactionId: string) => {
        Alert.alert('Tem certeza?', 'Deseja mesmo deletar esta movimentação?', [
            {
                text: 'Voltar',
                style: 'cancel',
            },
            { text: 'Excluir', onPress: () => handleDelete(transactionId) },
        ]);
    };

    const handleDelete = (transactionId: string) => {
        setIsLoading(true);
        api.delete(
            `users/65446ba0f431cd94e768a0f3/transactions/${transactionId}`
        )
            .then((response) => {
                if (response) {
                    // @ts-ignore
                    navigation.goBack();
                }
            })
            .finally(() => setIsLoading(false));
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
                label='Título'
                placeholder='Título'
                control={control}
                errors={errors.title}
                editable={!isLoading}
            />
            <CurrencyField
                name='amount'
                label='Valor'
                placeholder='Valor'
                errors={errors.amount}
                setValue={setValue}
                trigger={trigger}
                watch={watch}
                editable={!isLoading}
            />
            <DateTimePicker
                name='date'
                label='Data'
                placeholder='Data'
                control={control}
                errors={errors.date}
                setValue={setValue}
                trigger={trigger}
                editable={!isLoading}
            />
            <Picker
                name='type'
                label='Tipo'
                setValue={setValue}
                errors={errors.type}
                items={[
                    { label: 'Receita', value: TransactionTypeEnum.Income },
                    { label: 'Despesa', value: TransactionTypeEnum.Outcome },
                ]}
                trigger={trigger}
                watch={watch}
                editable={!isLoading}
            />

            <View style={styles.buttonContainer}>
                <Button
                    onPress={handleSubmit(onSubmit)}
                    title={'Salvar'}
                    color={colors.green}
                    disabled={isLoading}
                />
                {transaction && (
                    <Button
                        onPress={() => handleConfirmDelete(transaction?.id)}
                        title={'Excluir'}
                        color={colors.red}
                        disabled={isLoading}
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
