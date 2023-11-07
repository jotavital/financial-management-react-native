import {
    FieldValues,
    UseControllerProps,
    UseFormTrigger,
} from 'react-hook-form';
import { Text, TextInputProps, View } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import { styles } from '~/components/Form/CurrencyField/styles';
import { Label } from '~/components/Form/Label';

interface Props {
    label: string;
    trigger: UseFormTrigger<FieldValues>;
    [x: string]: any;
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
                value={watch(name)}
                onChangeValue={handleChangeValue}
                prefix='R$ '
                placeholder={editable ? placeholder : null}
                {...rest}
            />

            <Text style={styles.errors}>{errors?.message}</Text>
        </View>
    );
};
