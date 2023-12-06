import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Image, Text, View } from 'react-native';
import { Button } from '~/components/Common/Button';
import { TextField } from '~/components/Form/TextField';
import { useAuth } from '~/contexts/Auth';
import { signUpSchema } from '~/screens/SignUp/schema';
import styles from '~/screens/SignUp/styles';
import { SignUpSchema } from '~/types/signUp';

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
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('~/assets/icon-transparent.png')}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextField
                    placeholder='Nome'
                    name='name'
                    control={control}
                    errors={errors.name}
                />
                <TextField
                    placeholder='E-mail'
                    name='email'
                    control={control}
                    errors={errors.email}
                    keyboardType='email-address'
                />
                <TextField
                    placeholder='Senha'
                    name='password'
                    errors={errors.password}
                    control={control}
                    secureTextEntry
                />
                <TextField
                    placeholder='Confirme sua Senha'
                    name='passwordConfirmation'
                    errors={errors.passwordConfirmation}
                    control={control}
                    secureTextEntry
                />
                <Button
                    title='Cadastrar'
                    onPress={handleSubmit(handleSignUp)}
                />
            </View>
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
