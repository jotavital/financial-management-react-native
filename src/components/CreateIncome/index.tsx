import { useForm } from 'react-hook-form';
import { Button, View, ToastAndroid } from 'react-native';
import { styles } from '~/components/CreateIncome/styles';
import { TextField } from '~/components/Form/TextField';
import { colors } from '~/styles/colors';

export const CreateIncome: React.FC = () => {
    const { handleSubmit, control } = useForm();

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
            />
            <TextField
                name='amount'
                label='Valor'
                placeholder='Valor'
                control={control}
                keyboardType='numeric'
            />
            <Button
                onPress={handleSubmit(onSubmit)}
                title={'Salvar'}
                color={colors.green}
            />
        </View>
    );
};
