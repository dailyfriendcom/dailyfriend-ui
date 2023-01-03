import { zodResolver } from '@hookform/resolvers/zod';
import { Button, DefaultTheme, Form, useForm } from 'dailyfriend-ui';
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
  });

  type SchemaType = z.infer<typeof schema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: SchemaType) => {
    console.log(data);
    setError('firstName', {
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
