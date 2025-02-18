import { useState } from 'react';
import { useForm } from '@mantine/form';
import { Text, Flex, Box, Image, Button, TextInput, Radio, Paper, SimpleGrid } from '@mantine/core';
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
      apellido: "",
      email: "",
      telefono: "",
      tipoServicio: "",
    },
    validate: zodResolver(quoteSchema),
  });

  const enviarFormulario = async (data: { nombre: string, apellido: string, email: string, tipoServicio: string, telefono: string }) => {
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;
    console.log(data.tipoServicio)
    const payload = {
      fields: [
        { name: "firstname", value: data.nombre },
        { name: "lastname", value: data.apellido },
        { name: "email", value: data.email },
        { name: "phone", value: data.telefono },
        { name: "type", value: data.tipoServicio },
      ],
    };

    setLoading(true);
    try {
      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_APP_HUBSPOT_APP_TOKEN}`,
        },
      });
      console.log("Formulario enviado con éxito:", response.data);
      setSuccess(true);
    } catch (error) {
      console.error("Error al enviar formulario:", error);
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
    <Flex justify={"center"} w={"100%"} bg={"#EF1154"} pos={"relative"} mb={30} id='quote'>
      <Box style={{ flexBasis: "30%" }} my={20} visibleFrom="md">
        <Flex justify="center" direction={"column"} align={'center'}>
          <Image src={"./image_telefono.svg"} w={212} fit="contain" />
        </Flex>
      </Box>
      <Box w={{ base: "90%", md: "45%" }} my={20}>
        <Text c="#ffff" fz={30} fw={500}>Contáctanos</Text>
        <Text c={"#ffff"} mb={"xs"}>Ingresa tus datos y nos pondremos en contacto contigo.</Text>
        <Paper radius={"xl"} withBorder p={{ base: "md", xs: "lg" }}>
          <form onSubmit={handleSubmit}>
            <SimpleGrid cols={2}>


              <TextInput
                label="Nombre"
                placeholder="Ingresa tu nombre"
                {...form.getInputProps("nombre")}
                radius={"xl"}
                styles={{
                  label: { fontSize: 16 },
                  input: { fontSize: 16 }
                }}
              />
              <TextInput
                label="Apellido"
                placeholder="Ingresa tu apellido"
                {...form.getInputProps("apellido")}
                radius={"xl"}
                styles={{
                  label: { fontSize: 16 },
                  input: { fontSize: 16 }
                }}
              />
              <TextInput
                label="Correo electrónico"
                placeholder="Ingresa tu correo electrónico"
                {...form.getInputProps("email")}
                radius={"xl"}
                styles={{
                  label: { fontSize: 16 },
                  input: { fontSize: 16 }
                }}
              />
              <TextInput
                label="Teléfono"
                placeholder="Ingresa tu teléfono"
                {...form.getInputProps("telefono")}
                radius={"xl"}
                styles={{
                  label: { fontSize: 16 },
                  input: { fontSize: 16 }
                }}
              />
            </SimpleGrid>
            <Flex justify={"center"} align={"center"} direction={"column"} mt={"md"}>
              <Radio.Group

                label={"¿Qué producto quieres cotizar?"}
                {...form.getInputProps("tipoServicio")}
                styles={{
                  root: {
                    fontSize: "16px",
                  },
                  label: { fontSize: 18 },

                }}
              >
                <Flex gap={25} mt={10}>
                  <Radio value="asistencia" label="Asistencia" />
                  <Radio value="seguro" label="Seguro" />
                  <Radio value="ambas" label="Ambas" />
                </Flex>
              </Radio.Group>
              <Button radius={"xl"} w={{ base: "100%", xs: "50%" }} h={42} type="submit" loading={loading} mt="md" variant="filled" color="#E61D55" fullWidth>
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
