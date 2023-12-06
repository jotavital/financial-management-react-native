import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Image, Text, View } from 'react-native';
import { InferType } from 'yup';
import { Button } from '~/components/Common/Button';
import { TextField } from '~/components/Form/TextField';
import { useAuth } from '~/contexts/Auth';
import { signInSchema } from '~/screens/SignIn/schema';
import styles from '~/screens/SignIn/styles';
import { SignInSchema } from '~/types/signIn';

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

    const handleSignIn = (data: SignInSchema) => {
        signIn(data);
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('~/assets/icon-transparent.png')}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextField
                    name='email'
                    control={control}
                    errors={errors.email}
                    keyboardType='email-address'
                    placeholder='E-mail'
                />
                <TextField
                    name='password'
                    control={control}
                    errors={errors.password}
                    secureTextEntry
                    placeholder='Senha'
                />
                <Button title='Entrar' onPress={handleSubmit(handleSignIn)} />
            </View>
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
