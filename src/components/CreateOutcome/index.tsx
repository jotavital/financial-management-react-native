import { useForm } from 'react-hook-form';
import { Button, View, ToastAndroid } from 'react-native';
import { InferType } from 'yup';
import { styles } from '~/components/CreateIncome/styles';
import { TextField } from '~/components/Form/TextField';
import { colors } from '~/styles/colors';
import { yupResolver } from '@hookform/resolvers/yup';
import { DateTimePicker } from '~/components/Form/DateTimePicker';
import { createOutcomeSchema } from '~/components/CreateOutcome/schema';

export const CreateOutcome: React.FC = () => {
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
        setValue,
    } = useForm<InferType<typeof createOutcomeSchema>>({
        resolver: yupResolver(createOutcomeSchema),
    });

    const onSubmit = (data: any /* TODO: tipar*/) => {
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
            />

            <Button
                onPress={handleSubmit(onSubmit)}
                title={'Salvar'}
                color={colors.green}
            />
        </View>
    );
};
