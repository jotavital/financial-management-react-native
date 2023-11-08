import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Button, Image, View } from 'react-native';
import { TextField } from '~/components/Form/TextField';
import styles from '~/screens/Login/styles';

export const LoginScreen: React.FC = () => {
    const navigation = useNavigation();
    const { control } = useForm();

    return (
        <View style={styles.container}>
            <Image
                source={require('~/assets/icon-transparent.png')}
                style={styles.logo}
            />
            <View style={styles.inputContainer}>
                <TextField
                    label='E-mail'
                    name='email'
                    control={control}
                    keyboardType='email-address'
                />
                <TextField
                    label='Senha'
                    name='password'
                    control={control}
                    secureTextEntry
                />
            </View>
            <Button
                title='Entrar'
                // @ts-ignore
                onPress={() => navigation.navigate('MainTabs')}
            />
        </View>
    );
};
