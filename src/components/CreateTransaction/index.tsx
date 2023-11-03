import { useForm } from 'react-hook-form';
import { Button, View, ToastAndroid } from 'react-native';
import { InferType } from 'yup';
import { createTransactionSchema } from '~/components/CreateTransaction/schema';
import { styles } from '~/components/CreateTransaction/styles';
import { TextField } from '~/components/Form/TextField';
import { colors } from '~/styles/colors';
import { yupResolver } from '@hookform/resolvers/yup';
import { DateTimePicker } from '~/components/Form/DateTimePicker';
import { Picker } from '~/components/Form/Picker';
import { CurrencyField } from '~/components/Form/CurrencyField';
import api from '~/services/api';

export const CreateTransaction: React.FC = () => {
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

    const onSubmit = (data: any /* TODO: tipar*/) => {
        api.post(`users/65446ba0f431cd94e768a0f3/transactions`, data)
            .then((response) => {
                reset();
                ToastAndroid.show(
                    'Dados salvos com sucesso.',
                    ToastAndroid.SHORT
                );
            })
            .catch((error) => {
                console.error(error);
                ToastAndroid.show(
                    'Ocorreu um erro ao salvar os dados.',
                    ToastAndroid.SHORT
                );
            });
    };

    return (
        <View style={styles.container}>
            <TextField
                name='title'
                label='Título'
                placeholder='Título'
                control={control}
                errors={errors.title}
            />
            <CurrencyField
                name='amount'
                label='Valor'
                placeholder='Valor'
                errors={errors.amount}
                setValue={setValue}
                trigger={trigger}
                watch={watch}
            />
            <DateTimePicker
                name='date'
                label='Data'
                placeholder='Data'
                control={control}
                errors={errors.date}
                setValue={setValue}
                trigger={trigger}
            />
            <Picker
                name='type'
                label='Tipo'
                setValue={setValue}
                errors={errors.type}
                items={[
                    { label: 'Receita', value: 'income' },
                    { label: 'Despesa', value: 'outcome' },
                ]}
                trigger={trigger}
                watch={watch}
            />

            <Button
                onPress={handleSubmit(onSubmit)}
                title={'Salvar'}
                color={colors.green}
            />
        </View>
    );
};
