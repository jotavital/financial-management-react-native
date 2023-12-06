import { Picker as PickerLibrary } from '@react-native-picker/picker';
import { Text, View } from 'react-native';
import { Label } from '~/components/Form/Label';
import { styles } from '~/components/Form/Picker/styles';
import { PickerProps } from '~/components/Form/Picker/types';

export const Picker: React.FC<PickerProps> = ({
    name,
    label,
    placeholder,
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
            {label ? <Label text={label} disabled={!editable} /> : null}
            <View
                style={[
                    styles.pickerInput,
                    errors && styles.invalid,
                    !editable && styles.disabled,
                ]}
            >
                <PickerLibrary
                    mode='dropdown'
                    onValueChange={(value) => handleSetValue(value)}
                    selectedValue={watch(name)}
                    enabled={editable}
                >
                    <PickerLibrary.Item
                        label={placeholder ?? 'Selecione um item'}
                        value=''
                    />
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
            {errors?.message && (
                <Text style={styles.errors}>{String(errors?.message)}</Text>
            )}
        </View>
    );
};
