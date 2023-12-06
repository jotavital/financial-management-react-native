import {
    FieldError,
    FieldErrorsImpl,
    FieldValues,
    Merge,
    UseFormSetValue,
    UseFormTrigger,
    UseFormWatch,
} from 'react-hook-form';

interface PickerItem {
    label: string;
    value: string | number;
}

export interface PickerProps {
    name: string;
    setValue: UseFormSetValue<FieldValues>;
    label?: string;
    placeholder?: string;
    errors: FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>>;
    items?: PickerItem[];
    trigger: UseFormTrigger<FieldValues>;
    watch: UseFormWatch<FieldValues>;
    editable: boolean;
}
