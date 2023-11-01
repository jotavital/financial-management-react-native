import {
    FieldValues,
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
    label: string;
    errors: any;
    items?: PickerItem[];
    trigger: UseFormTrigger<FieldValues>;
    watch: UseFormWatch<FieldValues>;
}
