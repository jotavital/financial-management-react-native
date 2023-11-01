import { useState } from 'react';
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
    control,
    errors,
    setValue,
    trigger,
    ...rest
}: UseControllerProps<FormType> & Props & TextInputProps) => {
    const [internalValue, setInternalValue] = useState<number>(null);

    const handleChangeValue = (value: number) => {
        setValue(name, value);
        setInternalValue(value);
        trigger(name);
    };

    return (
        <View style={styles.container}>
            <Label text={label} />

            <CurrencyInput
                style={[styles.input, errors && styles.invalid]}
                /* @ts-ignore because of value prop */
                value={internalValue}
                onChangeValue={handleChangeValue}
                prefix='R$ '
                {...rest}
            />

            <Text style={styles.errors}>{errors?.message}</Text>
        </View>
    );
};
