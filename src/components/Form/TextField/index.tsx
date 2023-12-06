import {
    Control,
    Controller,
    FieldError,
    FieldErrorsImpl,
    FieldValues,
    Merge,
    UseControllerProps,
} from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { Label } from '~/components/Form/Label';
import { styles } from '~/components/Form/TextField/styles';

interface Props {
    label?: string;
    control: Control<FieldValues>;
    errors: FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>>;
    [x: string]: unknown;
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
        {label ? <Label text={label} disabled={!editable} /> : null}

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

        {errors?.message && (
            <Text style={styles.errors}>{String(errors?.message)}</Text>
        )}
    </View>
);
