import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';
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
}: UseControllerProps<FormType> & Props) => (
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
                    {...rest}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                />
            )}
            name={name}
        />

        <Text style={styles.errors}>{errors?.message}</Text>
    </View>
);
