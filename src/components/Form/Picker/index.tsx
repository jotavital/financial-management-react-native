import { Picker as PickerLibrary } from '@react-native-picker/picker';
import { Text, View } from 'react-native';
import { Label } from '~/components/Form/Label';
import { styles } from '~/components/Form/Picker/styles';
import { PickerProps } from '~/components/Form/Picker/types';

export const Picker: React.FC<PickerProps> = ({
    name,
    label,
    errors,
    setValue,
    trigger,
    watch,
    items,
    editable,
}) => {
    const handleSetValue = (value: unknown) => {
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
                    selectedValue={watch(name)}
                    enabled={editable}
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
