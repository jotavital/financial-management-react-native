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
import { UserProps } from '~/types/user';

export const SettingsScreen: React.FC = () => {
    const { signOut } = useAuth();
    const user = useSelector(selectUser);
    const nameInputRef = useRef<TextInput>(null);
    const [name, setName] = useState<string>(user.name);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [avatarSource, setAvatarSource] = useState<string>(user.avatar);
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

        api.put<UserProps>('users/avatar', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then(({ data: user }) => {
            toast.show('Perfil atualizado com sucesso');

            dispatch(userUpdated({ user }));
        });
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
                        source={avatarSource}
                        contentFit='cover'
                        transition={1000}
                        onError={() =>
                            setAvatarSource(
                                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
                            )
                        }
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
