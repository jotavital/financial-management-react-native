import { Control, Controller } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';
import { styles } from '~/components/Form/TextField/styles';

interface Props {
    name: string;
    label: string;
    control: Control;
    [x: string]: any;
}

export const TextField: React.FC<Props> = ({
    name,
    label,
    control,
    ...rest
}: Props) => (
    <View>
        <Text style={styles.label}>{label}</Text>

        <Controller
            control={control}
            rules={{
                required: !!rest.required,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    {...rest}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                />
            )}
            name={name}
        />
    </View>
);
