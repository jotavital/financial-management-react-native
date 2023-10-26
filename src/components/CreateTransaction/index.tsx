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

export const CreateTransaction: React.FC = () => {
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
        setValue,
        trigger,
    } = useForm<InferType<typeof createTransactionSchema>>({
        resolver: yupResolver(createTransactionSchema),
    });

    const onSubmit = (data: any /* TODO: tipar*/) => {
        console.log(data);
        reset();
        ToastAndroid.show('Dados salvos com sucesso.', ToastAndroid.SHORT);
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
            <TextField
                name='amount'
                label='Valor'
                placeholder='Valor'
                control={control}
                keyboardType='numeric'
                errors={errors.amount}
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
            />

            <Button
                onPress={handleSubmit(onSubmit)}
                title={'Salvar'}
                color={colors.green}
            />
        </View>
    );
};
