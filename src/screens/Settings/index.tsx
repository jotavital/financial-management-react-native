import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Button } from '~/components/Common/Button';
import { useAuth } from '~/contexts/Auth';
import { selectUser } from '~/redux/slices/authSlice';
import { styles } from '~/screens/Settings/styles';
import { colors } from '~/styles/colors';

export const SettingsScreen: React.FC = () => {
    const { signOut } = useAuth();
    const user = useSelector(selectUser);
    const nameInputRef = useRef<TextInput>(null);
    const [name, setName] = useState<string>(user.name);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleEditProfileInfo = () => {
        setIsEditing(true);

        nameInputRef.current.focus();
    };

    const handleSaveProfileInfo = () => {
        setIsEditing(false);

        nameInputRef.current.blur();
    };

    return (
        <View>
            <View style={styles.userInfoContainer}>
                <View style={styles.avatar}>
                    <Ionicons name='person-outline' size={60} color='white' />
                </View>

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
