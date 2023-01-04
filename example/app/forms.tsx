import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  CheckboxItemProps,
  DefaultTheme,
  Form,
  Picker,
  RadioButton,
  useForm,
} from 'dailyfriend-ui';
import { StyleSheet, View } from 'react-native';
import { z } from 'zod';

export default function Forms() {
  const schema = z.object({
    firstName: z
      .string()
      .min(3, 'Pelo menos 3 caracteres')
      .max(5, 'No máximo 5 caracters'),
    lastName: z
      .string()
      .min(3)
      .max(5)
      .regex(
        /^[a-zA-Z]+$/,
        'Por favor prencha somente com letras números nada além disso!'
      ),
    language: z.object({
      label: z.string(),
      value: z.string(),
    }),
    terms: z.boolean(),
    gender: z.enum(['male', 'female']),
  });

  type SchemaType = z.infer<typeof schema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: SchemaType) => {
    console.log('dados:', data);
    setError('language', {
      type: 'custom',
      message: 'Esse é um erro customizado!',
    });
  };

  return (
    <View style={styles.container}>
      <Form.TextInput
        inputName="firstName"
        control={control}
        theme={DefaultTheme}
        text="First Name"
        label="First Name"
        error={errors.firstName?.message}
      />

      <Form.TextInput
        inputName="lastName"
        control={control}
        theme={DefaultTheme}
        text="Last Name"
        label="Last Name"
        secureTextEntry={true}
        error={errors.lastName?.message}
      />

      <Form.Picker
        placeholder="Selecione uma opção"
        inputName="language"
        control={control}
        error={errors.language?.message}
      >
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="Python" value="python" />
        <Picker.Item label="C++" value="c++" disabled />
        <Picker.Item label="Perl" value="perl" />
      </Form.Picker>

      <Form.Checkbox<CheckboxItemProps>
        inputName="terms"
        control={control}
        error={errors.terms?.message}
        label="Aceito os termos de uso"
        checkboxComponent="item"
      />

      <Form.RadioButton.Group
        inputName="gender"
        control={control}
        error={errors.gender?.message}
      >
        <RadioButton.Item label="Male" value="male" />
        <RadioButton.Item label="Female" value="female" />
      </Form.RadioButton.Group>

      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Enviar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});
