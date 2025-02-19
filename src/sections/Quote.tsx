import { useState } from 'react';
import { useForm } from '@mantine/form';
import { Text, Flex, Box, Image, Button, TextInput, Radio, Paper, Group, Title } from '@mantine/core';
import { zodResolver } from '@mantine/form';
import axios from 'axios';
import SocialNetwoks from '../components/SocialNetwoks';
import { quoteSchema } from '../schemas/schemas';

const portalId = "49319136";
const formId = "9dbc45be-2460-4c96-88aa-833fef4da798";


const Quote = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const form = useForm({
    initialValues: {
      nombre: "",
      email: "",
      tipoServicio: "",
    },
    validate: zodResolver(quoteSchema),
  });

  const enviarFormulario = async (data: { nombre: string, email: string, tipoServicio: string }) => {
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;
    const payload = {
      fields: [
        { name: "firstname", value: data.nombre },
        { name: "email", value: data.email },
        { name: "tipoServicio", value: data.tipoServicio },
      ],
    };

    setLoading(true);
    try {
      await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_APP_HUBSPOT_APP_TOKEN}`,
        },
      });
      setSuccess(true);
      form.reset()
    } catch (error) {
      setError("Hubo un error al enviar tus datos.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.validate();
    if (form.isValid()) {
      enviarFormulario(form.values);
    }
  };

  return (
    <Flex justify={"center"} w={"100%"} bg={"#EF1154"} pos={"relative"} id='quote' py={8}>
      <Box w={"25%"} my={20} visibleFrom="md">
        <Flex justify="center" direction={"column"} align={'center'}>
          <Image src={"./image_telefono.svg"} w={230} fit="contain" />
        </Flex>
      </Box>
      <Box w={{ base: "90%", md: "35%" }} my={20} pos={"relative"}>
        <Title c="#ffff" fz={{ base: 35, xs: 40 }}>Contáctanos</Title>
        <Text c={"#ffff"} fz={16} mb={"xs"}>Ingresa tus datos y nos pondremos en contacto contigo.</Text>
        <Box pos="absolute" top={360} right={{xs:-30, md:-70}} visibleFrom='xs'>
          <Image src="/image_mensaje.svg" w={120} h="auto" />
        </Box>
        <Paper>
          <form onSubmit={handleSubmit}>
            <Flex justify={"center"} direction={"column"} mt={"md"} gap={12} >
              <TextInput
                label="NOMBRE"
                placeholder="Nombre Apellido"
                {...form.getInputProps("nombre")}

              />
              <TextInput
                label="CORREO ELECTRÓNICO"
                placeholder="correo@ejemplo.com"
                {...form.getInputProps("email")}

              />
              <Radio.Group
                label="¿QUÉ PRODUCTO QUIERES COTIZAR?"
                {...form.getInputProps("tipoServicio")}
                styles={{
                  label: {
                    fontSize: 14,
                    fontFamily: 'Sniglet, sans-serif',
                  },
                }}
              >
                <Group gap={25} mt={10}>
                  <Radio value="asistencia" label="Asistencia" />
                  <Radio value="seguro" label="Seguro" />
                  <Radio value="ambas" label="Ambas" />
                </Group>
              </Radio.Group>
              <Button
                loading={loading}
                style={{ alignSelf: "center" }}>
                Enviar
              </Button>
            </Flex>
          </form>
          {success && (
            <Text c="green" ta={"center"} mt="md">
              ¡Gracias! Nos pondremos en contacto contigo pronto.
            </Text>
          )}
          {error && (
            <Text c="red" mt="md">
              {error}
            </Text>
          )}
        </Paper>

        <Flex justify={"center"} mt={"md"}>
          <SocialNetwoks size={40} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Quote;
