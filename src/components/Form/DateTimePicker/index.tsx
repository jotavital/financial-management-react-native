import {
    AndroidNativeProps,
    DateTimePickerAndroid,
    DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import moment from 'moment';
import {
    FieldError,
    FieldErrorsImpl,
    FieldValues,
    Merge,
    UseControllerProps,
    UseFormSetValue,
} from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { TextField } from '~/components/Form/TextField';

interface Props {
    label: string;
    errors: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
    setValue: UseFormSetValue<FieldValues>;
    [x: string]: any;
}

export const DateTimePicker = ({
    name,
    label,
    control,
    errors,
    setValue,
    ...rest
}: UseControllerProps<FieldValues> & Props & TextInputProps) => {
    const setDate = (event: DateTimePickerEvent, date: Date) => {
        setValue(name, moment(date).format('DD/MM/YYYY'));
    };

    const handleOpenPicker = () => {
        DateTimePickerAndroid.open({
            value: new Date(),
            onChange: setDate,
            timeZoneOffsetInMinutes: 0,
        } as AndroidNativeProps);
    };

    return (
        <TextField
            name={name}
            label={label}
            control={control}
            errors={errors}
            inputMode='none'
            caretHidden
            onPressIn={() => handleOpenPicker()}
            {...rest}
        />
    );
};
