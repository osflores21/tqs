import { useState } from "react";
import { Text, Flex, Image, Box, TextInput, Button, Paper, SimpleGrid, Title } from "@mantine/core";
import axios from "axios";
import { useForm, zodResolver } from "@mantine/form";
import { joinSchema } from "../schemas/schemas";

const JoinRed = () => {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const portalId = "49319136";
  const formId = "f7c4d54a-a38a-4bc6-9e21-94ab8e34588c";


  const form = useForm({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      estado: "",
    },
    validate: zodResolver(joinSchema),
  });


  const enviarFormulario = async (datos: { nombre: string; apellido: string; email: string; estado: string, telefono: string }) => {
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const payload = {
      fields: [
        { name: "firstname", value: datos.nombre },
        { name: "lastname", value: datos.apellido },
        { name: "email", value: datos.email },
        { name: "phone", value: datos.telefono },
        { name: "address", value: datos.estado },
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
      form.reset()
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
    <Flex justify={"center"} w={"100%"} direction="column" align="center" id='joinRed' mb={16} mt={24}>
      <Flex gap={10} w={{ base: "90%", md: "80%" }} direction="column"  >
        <Title c="#4CC5C4" fz={{ base: 24, xs: 32, md: 48 }} ta={"left"}>¡Únete a nuestro equipo médico!</Title>
        <Text fz={{ base: 18, xs: 24, md: 30, }} fw={500} ta={"left"}>Ingresa tus datos y nos pondremos en contacto contigo.</Text>
        <Flex w={"100%"} direction={"row"} >
          <Box w={{ base: "100%", md: "50%" }}>
            <Paper style={{ borderColor: "#EE1254" }}>
              <form onSubmit={handleSubmit}>
                <SimpleGrid cols={{ base: 1, md: 2 }}>
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
                  <TextInput
                    label="NÚMERO TELEFÓNICO"
                    placeholder="1234567890"
                    {...form.getInputProps("telefono")}
                  />
                  <TextInput
                    label="UBICACIÓN"
                    placeholder="Estado donde resides"
                    {...form.getInputProps("estado")}
                  />
                </SimpleGrid>

                <Flex align={"center"} justify={"center"}>
                  <Button
                    w={"50%"}
                    loading={loading}
                    mt="md">
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
          </Box>
          <Box w={"45%"} display="flex" pos="relative" top={-70} right={50} style={{ zIndex: -5 }} visibleFrom="md">
            <Image src={"/image_unete3.svg"} w={500} fit="contain" />
          </Box>
        </Flex>
      </Flex>
    </Flex>

  );
};


export default JoinRed;
