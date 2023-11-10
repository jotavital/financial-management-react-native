import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Button, Image, Text, View } from 'react-native';
import { InferType } from 'yup';
import { TextField } from '~/components/Form/TextField';
import { useAuth } from '~/contexts/Auth';
import { signInSchema } from '~/screens/SignIn/schema';
import styles from '~/screens/SignIn/styles';

export const SignInScreen: React.FC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<InferType<typeof signInSchema>>({
        resolver: yupResolver(signInSchema),
    });

    const { signIn } = useAuth();
    const navigation = useNavigation();

    const handleSignIn = (data: any /* TODO: tipar */) => {
        console.log(data, errors);
        signIn();
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('~/assets/icon-transparent.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Bem-vindo!</Text>
            <View style={styles.inputContainer}>
                <TextField
                    label='E-mail'
                    name='email'
                    control={control}
                    errors={errors.email}
                    keyboardType='email-address'
                />
                <TextField
                    label='Senha'
                    name='password'
                    control={control}
                    errors={errors.password}
                    secureTextEntry
                />
            </View>
            <Button title='Entrar' onPress={handleSubmit(handleSignIn)} />
            <Text style={styles.signUpText}>
                Não tem uma conta?{' '}
                <Text
                    style={styles.link}
                    // @ts-ignore
                    onPress={() => navigation.navigate('SignUp')}
                >
                    Cadastre-se
                </Text>
            </Text>
        </View>
    );
};
