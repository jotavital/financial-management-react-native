import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Button, Image, Text, View } from 'react-native';
import { TextField } from '~/components/Form/TextField';
import { useAuth } from '~/contexts/Auth';
import { signUpSchema } from '~/screens/SignUp/schema';
import styles from '~/screens/SignUp/styles';
import { SignUpSchema } from '~/screens/SignUp/types';

export const SignUpScreen: React.FC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpSchema>({
        resolver: yupResolver(signUpSchema),
    });

    const navigation = useNavigation();
    const { signUp } = useAuth();

    const handleSignUp = (data: SignUpSchema) => {
        signUp(data);
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
                <TextField
                    label='Confirme sua Senha'
                    name='passwordConfirmation'
                    errors={errors.passwordConfirmation}
                    control={control}
                    secureTextEntry
                />
            </View>
            {/* TODO: customizar os botões do app */}
            <Button title='Cadastrar' onPress={handleSubmit(handleSignUp)} />
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
