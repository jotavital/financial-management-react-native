import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Button, Image, Text, View } from 'react-native';
import { InferType } from 'yup';
import { TextField } from '~/components/Form/TextField';
import { signUpSchema } from '~/screens/SignUp/schema';
import styles from '~/screens/SignUp/styles';

export const SignUpScreen: React.FC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<InferType<typeof signUpSchema>>({
        resolver: yupResolver(signUpSchema),
    });

    const navigation = useNavigation();

    const handleSignUp = (data: any) => {
        console.log(data);
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('~/assets/icon-transparent.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Cadastre-se</Text>
            <View style={styles.inputContainer}>
                <TextField
                    label='Nome'
                    name='name'
                    control={control}
                    errors={errors.name}
                    placeholder='João Vital'
                />
                <TextField
                    label='E-mail'
                    name='email'
                    control={control}
                    errors={errors.email}
                    keyboardType='email-address'
                    placeholder='joao@gmail.com'
                />
                <TextField
                    label='Senha'
                    name='password'
                    errors={errors.password}
                    control={control}
                    secureTextEntry
                />
            </View>
            {/* TODO: customizar os botões do app */}
            <Button
                title='Cadastrar'
                onPress={() => handleSubmit(handleSignUp)}
            />
            <Text style={styles.signUpText}>
                Já tem uma conta?{' '}
                <Text
                    style={styles.link}
                    // @ts-ignore
                    onPress={() => navigation.navigate('SignIn')}
                >
                    Entre aqui
                </Text>
            </Text>
        </View>
    );
};
