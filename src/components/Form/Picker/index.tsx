import { Text, View } from 'react-native';
import { Picker as PickerLibrary } from '@react-native-picker/picker';
import { Label } from '~/components/Form/Label';
import { styles } from '~/components/Form/Picker/styles';
import { useState } from 'react';
import { PickerProps } from '~/components/Form/Picker/types';

export const Picker: React.FC<PickerProps> = ({
    name,
    label,
    errors,
    setValue,
    trigger,
    items,
}) => {
    const [selectedValue, setSelectedValue] = useState<unknown>();

    const handleSetValue = (value: unknown) => {
        setSelectedValue(value);
        setValue(name, value);

        trigger(name);
    };

    return (
        <View style={styles.container}>
            <Label text={label} />
            <View style={[styles.pickerInput, errors && styles.invalid]}>
                <PickerLibrary
                    mode='dropdown'
                    onValueChange={(value) => handleSetValue(value)}
                    selectedValue={selectedValue}
                >
                    <PickerLibrary.Item label='Selecione um item' value='' />
                    {items &&
                        items.map((item) => {
                            return (
                                <PickerLibrary.Item
                                    key={item.value}
                                    label={item.label}
                                    value={item.value}
                                />
                            );
                        })}
                </PickerLibrary>
            </View>
            <Text style={styles.errors}>{errors?.message}</Text>
        </View>
    );
};
