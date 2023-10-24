import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { styles } from '~/components/Form/TextField/styles';

interface Props {
    label: string;
    [x: string]: any;
}

export const TextField = <FormType extends FieldValues>({
    name,
    label,
    control,
    errors,
    ...rest
}: UseControllerProps<FormType> & Props & TextInputProps) => (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>

        <Controller
            control={control}
            rules={{
                required: !!rest.required,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={[styles.input, errors && styles.invalid]}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    {...rest}
                />
            )}
            name={name}
        />

        <Text style={styles.errors}>{errors?.message}</Text>
    </View>
);
