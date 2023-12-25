import { AntDesign, Feather } from '@expo/vector-icons';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { useRef, useState } from 'react';
import { Pressable, Text, TextInput, ToastAndroid, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '~/components/Common/Button';
import { useAuth } from '~/contexts/Auth';
import { selectUser, userUpdated } from '~/redux/slices/authSlice';
import { styles } from '~/screens/Settings/styles';
import api from '~/services/api';
import { toast } from '~/services/toast.android';
import { updateUser } from '~/services/user';
import { colors } from '~/styles/colors';

export const SettingsScreen: React.FC = () => {
    const { signOut } = useAuth();
    const user = useSelector(selectUser);
    const nameInputRef = useRef<TextInput>(null);
    const [name, setName] = useState<string>(user.name);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleEditProfileInfo = () => {
        setIsEditing(true);

        nameInputRef.current.focus();
    };

    const handleSaveProfileInfo = () => {
        setIsEditing(false);

        nameInputRef.current.blur();

        updateUser({ name }).then(({ data: user }) => {
            dispatch(userUpdated({ user }));

            toast.show('Dados salvos com sucesso');
        });
    };

    const handlePickImage = async () => {
        const { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            toast.show(
                'É necessário permitir o acesso às fotos e vídeos para continuar.',
                ToastAndroid.LONG
            );
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        if (pickerResult.canceled === true) {
            return;
        }

        const data = new FormData();
        data.append('avatar', {
            uri: pickerResult.assets[0].uri,
            name: pickerResult.assets[0].uri.split('/').pop(),
            type: 'image/jpeg',
        });

        api.put('users/avatar', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(() => toast.show('Perfil atualizado com sucesso'))
            .catch((error) => console.log(error));
    };

    return (
        <View>
            <View style={styles.userInfoContainer}>
                <Pressable
                    style={styles.avatarContainer}
                    android_ripple={{ color: colors.background }}
                    onPress={() => handlePickImage()}
                >
                    <Image
                        style={styles.avatar}
                        source='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQDGQ55_znshhGDlxv5sDZz96tD3hxPc5j8CVWMKvJcw&s'
                        contentFit='cover'
                        transition={1000}
                    />
                </Pressable>

                <View style={styles.userInfo}>
                    <View>
                        <TextInput
                            ref={nameInputRef}
                            value={name}
                            style={styles.userName}
                            onEndEditing={() => handleSaveProfileInfo()}
                            onChangeText={(value: string) => setName(value)}
                        />
                        <Text>{user?.email}</Text>
                    </View>
                    {isEditing ? (
                        <Pressable
                            android_ripple={{ color: colors.background }}
                            onPress={() => handleSaveProfileInfo()}
                            style={styles.buttons}
                        >
                            <AntDesign
                                name='checkcircleo'
                                size={24}
                                color='black'
                            />
                        </Pressable>
                    ) : (
                        <Pressable
                            android_ripple={{ color: colors.background }}
                            onPress={() => handleEditProfileInfo()}
                            style={styles.buttons}
                        >
                            <Feather name='edit-2' size={24} color='black' />
                        </Pressable>
                    )}
                </View>
            </View>
            <View style={styles.buttons}>
                <Button
                    title='Sair'
                    color={colors.red}
                    onPress={() => signOut()}
                />
            </View>
        </View>
    );
};
