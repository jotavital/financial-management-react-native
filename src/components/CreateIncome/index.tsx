import { useForm } from 'react-hook-form';
import { Button, View, ToastAndroid } from 'react-native';
import { InferType } from 'yup';
import { createIncomeSchema } from '~/components/CreateIncome/schema';
import { styles } from '~/components/CreateIncome/styles';
import { TextField } from '~/components/Form/TextField';
import { colors } from '~/styles/colors';
import { yupResolver } from '@hookform/resolvers/yup';

export const CreateIncome: React.FC = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<InferType<typeof createIncomeSchema>>({
        resolver: yupResolver(createIncomeSchema),
    });

    const onSubmit = (data: any /* TODO: tipar*/) => {
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
            <Button
                onPress={handleSubmit(onSubmit)}
                title={'Salvar'}
                color={colors.green}
            />
        </View>
    );
};
