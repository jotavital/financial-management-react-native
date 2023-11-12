import {
    FieldError,
    FieldErrorsImpl,
    FieldValues,
    Merge,
    UseControllerProps,
    UseFormSetValue,
    UseFormTrigger,
} from 'react-hook-form';
import { Text, TextInputProps, View } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import { styles } from '~/components/Form/CurrencyField/styles';
import { Label } from '~/components/Form/Label';

interface Props {
    label: string;
    trigger: UseFormTrigger<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
    errors: FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>>;
    [x: string]: unknown;
}

export const CurrencyField = <FormType extends FieldValues>({
    name,
    label,
    errors,
    setValue,
    trigger,
    watch,
    editable,
    placeholder,
    ...rest
}: UseControllerProps<FormType> & Props & TextInputProps) => {
    const handleChangeValue = (value: number) => {
        // @ts-ignore
        setValue(name, value);
        trigger(name);
    };

    return (
        <View style={styles.container}>
            <Label text={label} disabled={!editable} />

            <CurrencyInput
                style={[
                    styles.input,
                    errors && styles.invalid,
                    !editable && styles.disabled,
                ]}
                // @ts-ignore
                value={watch(name)}
                onChangeValue={handleChangeValue}
                prefix='R$ '
                placeholder={editable ? placeholder : null}
                {...rest}
            />

            {errors?.message && (
                <Text style={styles.errors}>{String(errors?.message)}</Text>
            )}
        </View>
    );
};
