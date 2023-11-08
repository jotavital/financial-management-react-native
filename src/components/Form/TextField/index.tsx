import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { Label } from '~/components/Form/Label';
import { styles } from '~/components/Form/TextField/styles';

interface Props {
    label: string;
    control: any;
    [x: string]: any;
}

export const TextField = <FormType extends FieldValues>({
    name,
    label,
    control,
    errors,
    editable = true,
    placeholder,
    ...rest
}: UseControllerProps<FormType> & Props & TextInputProps) => (
    <View style={styles.container}>
        <Label text={label} disabled={!editable} />

        <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={[
                        styles.input,
                        errors && styles.invalid,
                        !editable && styles.disabled,
                    ]}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    editable={editable}
                    placeholder={editable ? placeholder : null}
                    {...rest}
                />
            )}
            name={name}
        />

        <Text style={styles.errors}>{errors?.message}</Text>
    </View>
);
